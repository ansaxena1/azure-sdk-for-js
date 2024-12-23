// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { EvaluatorConfiguration } from "@azure/ai-projects";
import { AIProjectsClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

import { delay } from "@azure/core-util";
import * as dotenv from "dotenv";
import type { ApplicationInsightsConfiguration, EvaluationSchedule, RecurrenceTrigger } from "../../src/index.js";
dotenv.config();

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<project connection string>";

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
        "column_mapping": {
          response: "${data.message}",
          ground_truth: "${data.itemType}",

        }
      }
    };

    const recurrenceTrigger: RecurrenceTrigger = {
      frequency: "Day",
      interval: 1,
      type: "Recurrence"
    };

    const evaluators = {
        "f1_score": f1EvaluatorConfiguration,
    };

    const name = "CANARY-ONLINE-EVAL-TEST-WS-ENV-104";
    const description = "Testing Online eval command job in CANARY environment";
    const tags = {"tag1": "value1", "tag2": "value2"};
    const properties = {"AzureMSIClientId": "sample_client_id"};

    const schedule: EvaluationSchedule = {
      data: appInsightsConfig,
      evaluators: evaluators,
      trigger: recurrenceTrigger,
      description: description,
      tags: tags,
      properties: properties
    };

    const evaluationSchedule = await client.evaluations.createOrReplaceSchedule(name, schedule);
    console.log(`Created evaluation schedule: ${evaluationSchedule.name}`);
    await delay(30000);

    const getEvaluationSchedule = await client.evaluations.getSchedule(name);
    console.log(`Retrieved evaluation schedule: ${getEvaluationSchedule.name}`);

    const schedules = await client.evaluations.listSchedules();
    console.log("Listing evaluation schedules:");
    schedules.value.forEach(x => {
      console.log(`Schedule ${x.name} has status: ${x.provisioningState}`);
    });
    await client.evaluations.disableSchedule(name);
    console.log("Disabled evaluation schedule");

}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
