/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceNetworkingManagementClient } = require("@azure/arm-servicenetworking");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a SecurityPolicy
 *
 * @summary Delete a SecurityPolicy
 * x-ms-original-file: specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/preview/2024-05-01-preview/examples/SecurityPolicyDelete.json
 */
async function deleteSecurityPolicy() {
  const subscriptionId = process.env["SERVICENETWORKING_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SERVICENETWORKING_RESOURCE_GROUP"] || "rg1";
  const trafficControllerName = "tc1";
  const securityPolicyName = "sp1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceNetworkingManagementClient(credential, subscriptionId);
  const result = await client.securityPoliciesInterface.beginDeleteAndWait(
    resourceGroupName,
    trafficControllerName,
    securityPolicyName,
  );
  console.log(result);
}

async function main() {
  deleteSecurityPolicy();
}

main().catch(console.error);
