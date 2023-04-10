/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CommandPostBody, CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Invoke a command like nodetool for cassandra maintenance
 *
 * @summary Invoke a command like nodetool for cassandra maintenance
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-11-15-preview/examples/CosmosDBManagedCassandraCommand.json
 */
async function cosmosDbManagedCassandraCommand() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const body: CommandPostBody = {
    arguments: { status: "" },
    command: "nodetool",
    host: "10.0.1.12"
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.beginInvokeCommandAndWait(
    resourceGroupName,
    clusterName,
    body
  );
  console.log(result);
}

async function main() {
  cosmosDbManagedCassandraCommand();
}

main().catch(console.error);
