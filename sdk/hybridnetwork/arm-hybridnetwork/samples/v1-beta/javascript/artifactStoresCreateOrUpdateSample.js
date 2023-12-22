/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridNetworkManagementClient } = require("@azure/arm-hybridnetwork");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a artifact store.
 *
 * @summary Creates or updates a artifact store.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ArtifactStoreCreate.json
 */
async function createOrUpdateAnArtifactStoreOfPublisherResource() {
  const subscriptionId = process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg";
  const publisherName = "TestPublisher";
  const artifactStoreName = "TestArtifactStore";
  const parameters = {
    location: "eastus",
    properties: {
      managedResourceGroupConfiguration: { name: "testRg", location: "eastus" },
      replicationStrategy: "SingleReplication",
      storeType: "AzureContainerRegistry",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publisherName,
    artifactStoreName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createOrUpdateAnArtifactStoreOfPublisherResource();
}

main().catch(console.error);