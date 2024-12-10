// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { EvaluatorConfiguration } from "@azure/ai-projects";
import { AIProjectsClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

import * as dotenv from "dotenv";
import type { ApplicationInsightsConfiguration, EvaluationSchedule, RecurrenceTrigger } from "../../src/index.js";
dotenv.config();

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<endpoint>;<subscription>;<resource group>;<project>";

export async function main(): Promise<void> {
    const client = AIProjectsClient.fromConnectionString(connectionString || "", new DefaultAzureCredential());

    const appInsightsConfig: ApplicationInsightsConfiguration = {
      type: "applicationInsights",
      resourceId: "<resource_id>",
      query: 'traces | where message contains ""',
      serviceName: "sample_service_name",
    };

    const f1EvaluatorConfiguration: EvaluatorConfiguration = {
      id: "azureml://registries/model-evaluation-dev-01/models/F1ScoreEval/versions/1",
      initParams: {
        columnMapping: {
          response: `${data.message}`,
          groundTruth: `${data.itemType}`,

        }
      }
    };

    const recurrenceTrigger: RecurrenceTrigger = {
      frequency: "Day",
      interval: 1,
    };

    const evaluators = {
        "f1_score": f1EvaluatorConfiguration,
    };

    const name = "CANARY-ONLINE-EVAL-TEST-WS-ENV-104";
    const description = "Testing Online eval command job in CANARY environment";
    const tags = {"tag1": "value1", "tag2": "value2"};

    const schedule: EvaluationSchedule = {
      data: appInsightsConfig,
      evaluators: evaluators,
      trigger: recurrenceTrigger,
      description: description,
      tags: tags,
    };

    const evaluationSchedule = await client.evaluations.createOrReplaceSchedule(name, schedule);
    console.log(`Created evaluation schedule, status: ${evaluationSchedule.provisioningState}`);
    console.log(`Created evaluation schedule: ${evaluationSchedule}`);

    const getEvaluationSchedule = await client.evaluations.getSchedule(name);
    console.log(`Get evaluation schedule: ${getEvaluationSchedule}`);

    const schedules = await client.evaluations.listSchedules();
    schedules.forEach(schedule => {
      console.log(`Schedule: ${schedule}`);
    });
    await client.evaluations.disableSchedule(name);
    console.log("Disabled evaluation schedule");

}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
