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
  BackupPatch,
  BackupsUpdateOptionalParams,
  NetAppManagementClient
} from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch a Backup under the Backup Vault
 *
 * @summary Patch a Backup under the Backup Vault
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/BackupsUnderBackupVault_Update.json
 */
async function backupsUnderBackupVaultUpdate() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const backupVaultName = "backupVault1";
  const backupName = "backup1";
  const body: BackupPatch = {};
  const options: BackupsUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backups.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    backupVaultName,
    backupName,
    options
  );
  console.log(result);
}

async function main() {
  backupsUnderBackupVaultUpdate();
}

main().catch(console.error);