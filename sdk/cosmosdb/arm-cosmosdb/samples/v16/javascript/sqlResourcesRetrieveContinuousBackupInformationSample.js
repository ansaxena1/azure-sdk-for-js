/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieves continuous backup information for a container resource.
 *
 * @summary Retrieves continuous backup information for a container resource.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-08-15/examples/CosmosDBSqlContainerBackupInformation.json
 */
async function cosmosDbSqlContainerBackupInformation() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const location = {
    location: "North Europe",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginRetrieveContinuousBackupInformationAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    location,
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlContainerBackupInformation();
}

main().catch(console.error);
