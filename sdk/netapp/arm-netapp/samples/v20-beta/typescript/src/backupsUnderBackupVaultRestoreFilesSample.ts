/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BackupRestoreFiles, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Restore the specified files from the specified backup to the active filesystem
 *
 * @summary Restore the specified files from the specified backup to the active filesystem
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/BackupsUnderBackupVault_SingleFileRestore.json
 */
async function backupsSingleFileRestore() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const backupVaultName = "backupVault1";
  const backupName = "backup1";
  const body: BackupRestoreFiles = {
    destinationVolumeId:
      "/subscriptions/D633CC2E-722B-4AE1-B636-BBD9E4C60ED9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1/volumes/volume1",
    fileList: ["/dir1/customer1.db", "/dir1/customer2.db"]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupsUnderBackupVault.beginRestoreFilesAndWait(
    resourceGroupName,
    accountName,
    backupVaultName,
    backupName,
    body
  );
  console.log(result);
}

async function main() {
  backupsSingleFileRestore();
}

main().catch(console.error);