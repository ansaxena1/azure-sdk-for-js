// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { Dataset, EvaluatorConfiguration } from "@azure/ai-projects";
import { AIProjectsClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

import * as dotenv from "dotenv";
import type { Evaluation } from "../../src/index.js";
dotenv.config();

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<endpoint>;<subscription>;<resource group>;<project>";

export async function main(): Promise<void> {
    const client = AIProjectsClient.fromConnectionString(connectionString || "", new DefaultAzureCredential());

    // Upload file
    const localFileStream = "../ai-projects/samples-dev/data/evaluateTestData.jsonl"; // fs.createReadStream("./samples-dev/data/evaluateTestData.jsonl");
    const file = await client.agents.uploadFile(localFileStream, "assistants", "evaluateTestData.jsonl");
    console.log(`Uploaded file, ID: ${file.id}`);

    const connections = await client.connections.listConnections({category: "AzureOpenAI"});
    const defaultConnection = connections[0];

    console.log(`Default connection: ${JSON.stringify(defaultConnection)}`);

    const dataset: Dataset = {
      id: file.id,
      type: "dataset",
    };

    const endpoint = defaultConnection.properties.target.endsWith("/") ? defaultConnection.properties.target.slice(0, -1) : defaultConnection.properties.target;
    console.log(`Endpoint: ${endpoint}`);

    const defaultConnectionModelConfig = {
      azureDeployment: "<>",
      azureEndpoint: endpoint,
      type: "azure_openai",
      apiVersion: "<>",
      apiKey: `${defaultConnection.id}/credentials/key`,
    }
    const f1EvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/F1Score-Evaluator/versions/3",
    };

    const relevanceEvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/Relevance-Evaluator/versions/3",
      initParams: {
        modelConfig: defaultConnectionModelConfig
      }
    };

    const violenceEvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/azureml-staging/models/Violent-Content-Evaluator/versions/3",
      initParams: {
        azureAIProject: client.scope
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
    console.log(`Got evaluation, evaluation ID: ${getEvaluationResponse.id}`);
    console.log(`Evaluation status: ${getEvaluationResponse.status}`);
    if (getEvaluationResponse.properties) {
      console.log(`AI Studio URI: ${getEvaluationResponse.properties["AiStudioEvaluationUri"]}`);
    }
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
