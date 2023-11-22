/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the current usage of a resource.
 *
 * @summary Get the current usage of a resource.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/getComputeOneSkuUsages.json
 */
async function quotasUsagesRequestForCompute() {
  const resourceName = "standardNDSFamily";
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Compute/locations/eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.usages.get(resourceName, scope);
  console.log(result);
}

/**
 * This sample demonstrates how to Get the current usage of a resource.
 *
 * @summary Get the current usage of a resource.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/getNetworkOneSkuUsages.json
 */
async function quotasUsagesRequestForNetwork() {
  const resourceName = "MinPublicIpInterNetworkPrefixLength";
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Network/locations/eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.usages.get(resourceName, scope);
  console.log(result);
}

async function main() {
  quotasUsagesRequestForCompute();
  quotasUsagesRequestForNetwork();
}

main().catch(console.error);