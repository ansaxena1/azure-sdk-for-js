/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-09-01-preview/examples/CosmosDBGremlinGraphThroughputGet.json
 */
async function cosmosDbGremlinGraphThroughputGet() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const graphName = "graphName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.getGremlinGraphThroughput(
    resourceGroupName,
    accountName,
    databaseName,
    graphName,
  );
  console.log(result);
}

async function main() {
  cosmosDbGremlinGraphThroughputGet();
}

main().catch(console.error);
