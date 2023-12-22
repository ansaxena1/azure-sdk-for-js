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
 * This sample demonstrates how to Lists all the component resources in a network function.
 *
 * @summary Lists all the component resources in a network function.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ComponentListByNetworkFunction.json
 */
async function listComponentsInNetworkFunction() {
  const subscriptionId = process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg";
  const networkFunctionName = "testNf";
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.components.listByNetworkFunction(
    resourceGroupName,
    networkFunctionName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listComponentsInNetworkFunction();
}

main().catch(console.error);