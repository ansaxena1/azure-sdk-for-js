/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ExportRDBParameters,
  RedisManagementClient,
} from "@azure/arm-rediscache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Export data from the redis cache to blobs in a container.
 *
 * @summary Export data from the redis cache to blobs in a container.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2024-03-01/examples/RedisCacheExport.json
 */
async function redisCacheExport() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rg1";
  const name = "cache1";
  const parameters: ExportRDBParameters = {
    format: "RDB",
    container:
      "https://contosostorage.blob.core.window.net/urltoBlobContainer?sasKeyParameters",
    prefix: "datadump1",
    storageSubscriptionId: "storageSubId",
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.redis.beginExportDataAndWait(
    resourceGroupName,
    name,
    parameters,
  );
  console.log(result);
}

async function main() {
  redisCacheExport();
}

main().catch(console.error);
