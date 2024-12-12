/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  JobExecutionTemplate,
  JobsStartOptionalParams,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Start a Container Apps Job
 *
 * @summary Start a Container Apps Job
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/Job_Start.json
 */
async function runAContainerAppsJob() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const jobName = "testcontainerAppsJob0";
  const template: JobExecutionTemplate = {
    containers: [
      {
        name: "testcontainerAppsJob0",
        image: "repo/testcontainerAppsJob0:v4",
        resources: { cpu: 0.2, memory: "100Mi" },
      },
    ],
    initContainers: [
      {
        name: "testinitcontainerAppsJob0",
        args: ["-c", "while true; do echo hello; sleep 10;done"],
        command: ["/bin/sh"],
        image: "repo/testcontainerAppsJob0:v4",
        resources: { cpu: 0.2, memory: "100Mi" },
      },
    ],
  };
  const options: JobsStartOptionalParams = { template };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.jobs.beginStartAndWait(
    resourceGroupName,
    jobName,
    options,
  );
  console.log(result);
}

async function main() {
  runAContainerAppsJob();
}

main().catch(console.error);
