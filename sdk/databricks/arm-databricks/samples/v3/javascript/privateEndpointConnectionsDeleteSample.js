/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDatabricksManagementClient } = require("@azure/arm-databricks");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Remove private endpoint connection with the specified name
 *
 * @summary Remove private endpoint connection with the specified name
 * x-ms-original-file: specification/databricks/resource-manager/Microsoft.Databricks/stable/2023-02-01/examples/PrivateEndpointConnectionsDelete.json
 */
async function removeAPrivateEndpointConnection() {
  const subscriptionId =
    process.env["DATABRICKS_SUBSCRIPTION_ID"] || "11111111-1111-1111-1111-111111111111";
  const resourceGroupName = process.env["DATABRICKS_RESOURCE_GROUP"] || "myResourceGroup";
  const workspaceName = "myWorkspace";
  const privateEndpointConnectionName = "myWorkspace.23456789-1111-1111-1111-111111111111";
  const credential = new DefaultAzureCredential();
  const client = new AzureDatabricksManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    workspaceName,
    privateEndpointConnectionName
  );
  console.log(result);
}

async function main() {
  removeAPrivateEndpointConnection();
}

main().catch(console.error);