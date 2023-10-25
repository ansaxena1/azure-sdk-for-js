/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureSiteRecoveryManagementServiceAPI } from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the details of the job.
 *
 * @summary Gets the details of the job.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/Workflow_Get.json
 */
async function workflowGet() {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const vaultName = "4";
  const jobName = "ZGH4y";
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.workflow.get(
    resourceGroupName,
    vaultName,
    jobName
  );
  console.log(result);
}

async function main() {
  workflowGet();
}

main().catch(console.error);