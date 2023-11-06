/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RedisManagementClient } from "@azure/arm-rediscache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to For checking the ongoing status of an operation
 *
 * @summary For checking the ongoing status of an operation
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2023-08-01/examples/RedisCacheAsyncOperationStatus.json
 */
async function redisCacheAsyncOperationStatus() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const location = "East US";
  const operationId = "c7ba2bf5-5939-4d79-b037-2964ccf097da";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.asyncOperationStatus.get(location, operationId);
  console.log(result);
}

async function main() {
  redisCacheAsyncOperationStatus();
}

main().catch(console.error);