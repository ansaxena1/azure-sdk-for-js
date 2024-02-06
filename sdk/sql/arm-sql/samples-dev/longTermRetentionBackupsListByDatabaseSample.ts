/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all long term retention backups for a database.
 *
 * @summary Lists all long term retention backups for a database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/LongTermRetentionBackupListByDatabase.json
 */
async function getAllLongTermRetentionBackupsUnderTheDatabase() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const longTermRetentionDatabaseName = "testDatabase";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.longTermRetentionBackups.listByDatabase(
    locationName,
    longTermRetentionServerName,
    longTermRetentionDatabaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAllLongTermRetentionBackupsUnderTheDatabase();
}

main().catch(console.error);
