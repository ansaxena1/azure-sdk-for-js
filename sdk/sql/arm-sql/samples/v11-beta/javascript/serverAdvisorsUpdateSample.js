/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a server advisor.
 *
 * @summary Updates a server advisor.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAdvisorUpdate.json
 */
async function updateServerAdvisor() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "workloadinsight-demos";
  const serverName = "misosisvr";
  const advisorName = "CreateIndex";
  const parameters = { autoExecuteStatus: "Disabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAdvisors.update(
    resourceGroupName,
    serverName,
    advisorName,
    parameters,
  );
  console.log(result);
}

async function main() {
  updateServerAdvisor();
}

main().catch(console.error);