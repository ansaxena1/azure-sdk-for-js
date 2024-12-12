/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SnapshotPolicyPatch, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch a snapshot policy
 *
 * @summary Patch a snapshot policy
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/SnapshotPolicies_Update.json
 */
async function snapshotPoliciesUpdate() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const snapshotPolicyName = "snapshotPolicyName";
  const body: SnapshotPolicyPatch = {
    dailySchedule: { hour: 14, minute: 30, snapshotsToKeep: 4 },
    enabled: true,
    hourlySchedule: { minute: 50, snapshotsToKeep: 2 },
    location: "eastus",
    monthlySchedule: {
      daysOfMonth: "10,11,12",
      hour: 14,
      minute: 15,
      snapshotsToKeep: 5,
    },
    weeklySchedule: {
      day: "Wednesday",
      hour: 14,
      minute: 45,
      snapshotsToKeep: 3,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.snapshotPolicies.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    snapshotPolicyName,
    body,
  );
  console.log(result);
}

async function main() {
  snapshotPoliciesUpdate();
}

main().catch(console.error);
