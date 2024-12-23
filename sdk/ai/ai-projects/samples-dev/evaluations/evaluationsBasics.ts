// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { Dataset, EvaluatorConfiguration } from "@azure/ai-projects";
import { AIProjectsClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

import * as dotenv from "dotenv";
import * as fs from "fs";
import type { Evaluation } from "../../src/index.js";
dotenv.config();

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<project connection string>";

export async function main(): Promise<void> {
    const client = AIProjectsClient.fromConnectionString(connectionString || "", new DefaultAzureCredential());

    // Upload file
    const fileName = "evaluateTestData";
    const localFileStream = fs.createReadStream("./samples-dev/data/evaluationTestData.jsonl");
    const file = await client.agents.uploadFile(localFileStream, "assistants", fileName);
    console.log(`Uploaded file, ID: ${file.id}`);

    const retrievedFile = await client.agents.getFile(file.id);
    console.log(`Retrieved file: ${JSON.stringify(retrievedFile)}`);

    const connections = await client.connections.listConnections({category: "AzureOpenAI"});
    const defaultConnection = connections[0];

    const dataset: Dataset = {
      id: `/subscriptions/${client.scope.subscription_id}/resourceGroups/${client.scope.resource_group_name}/providers/Microsoft.MachineLearningServices/workspaces/${client.scope.project_name}/data/${fileName}/versions/1`,
      type: "Dataset",
    };

    const endpoint = defaultConnection.properties.target.endsWith("/") ? defaultConnection.properties.target.slice(0, -1) : defaultConnection.properties.target;
    console.log(`Endpoint: ${endpoint}`);

    const defaultConnectionModelConfig = {
      "azure_deployment": "<>",
      "azure_endpoint": endpoint,
      "type": "azure_openai",
      "api_version": "<>",
      "api_key": `${defaultConnection.id}/credentials/key`,
    }
    const f1EvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/F1Score-Evaluator/versions/3",
    };

    const relevanceEvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/Relevance-Evaluator/versions/3",
      initParams: {
        model_config: defaultConnectionModelConfig
      }
    };

    const violenceEvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/Violent-Content-Evaluator/versions/3",
      initParams: {
        azure_ai_project: client.scope
      }
    };

    const evaluation: Evaluation = {
      displayName: "Remote Evaluation",
      description: "Evaluation of dataset",
      data: dataset,
      evaluators: {
        "f1_score": f1EvaluatorConfiguration,
        "relevance": relevanceEvaluatorConfiguration,
        "violence": violenceEvaluatorConfiguration,
      },
    };

    const evaluationResponse = await client.evaluations.createEvaluation(evaluation);
    console.log(`Created evaluation, evaluation ID: ${evaluationResponse.id}`);

    const getEvaluationResponse = await client.evaluations.getEvaluation(evaluationResponse.id);
    console.log(`Retrieved evaluation, evaluation ID: ${getEvaluationResponse.id}`);
    console.log(`Evaluation status: ${getEvaluationResponse.status}`);
    if (getEvaluationResponse.properties) {
      console.log(`AI Studio URI: ${getEvaluationResponse.properties["AiStudioEvaluationUri"]}`);
    }
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
