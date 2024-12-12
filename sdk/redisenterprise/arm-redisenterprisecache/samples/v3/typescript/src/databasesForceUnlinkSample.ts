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
  ForceUnlinkParameters,
  RedisEnterpriseManagementClient
} from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Forcibly removes the link to the specified database resource.
 *
 * @summary Forcibly removes the link to the specified database resource.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesForceUnlink.json
 */
async function howToUnlinkADatabaseDuringARegionalOutage() {
  const subscriptionId =
    process.env["REDISENTERPRISE_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["REDISENTERPRISE_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const parameters: ForceUnlinkParameters = {
    ids: [
      "/subscriptions/subid2/resourceGroups/rg2/providers/Microsoft.Cache/redisEnterprise/cache2/databases/default"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.databases.beginForceUnlinkAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    parameters
  );
  console.log(result);
}

async function main() {
  howToUnlinkADatabaseDuringARegionalOutage();
}

main().catch(console.error);
