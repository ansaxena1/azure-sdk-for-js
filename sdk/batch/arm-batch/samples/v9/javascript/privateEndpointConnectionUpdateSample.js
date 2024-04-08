/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates the properties of an existing private endpoint connection.
 *
 * @summary Updates the properties of an existing private endpoint connection.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2024-02-01/examples/PrivateEndpointConnectionUpdate.json
 */
async function updatePrivateEndpointConnection() {
  const subscriptionId = process.env["BATCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["BATCH_RESOURCE_GROUP"] || "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const privateEndpointConnectionName =
    "testprivateEndpointConnection5.24d6b4b5-e65c-4330-bbe9-3a290d62f8e0";
  const parameters = {
    privateLinkServiceConnectionState: {
      description: "Approved by xyz.abc@company.com",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    privateEndpointConnectionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  updatePrivateEndpointConnection();
}

main().catch(console.error);
