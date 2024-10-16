/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetADelete.json
 */
async function deletePrivateDnsZoneARecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "A";
  const relativeRecordSetName = "recordA";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetAAAADelete.json
 */
async function deletePrivateDnsZoneAaaaRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "AAAA";
  const relativeRecordSetName = "recordAAAA";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetCNAMEDelete.json
 */
async function deletePrivateDnsZoneCnameRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "CNAME";
  const relativeRecordSetName = "recordCNAME";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetMXDelete.json
 */
async function deletePrivateDnsZoneMxRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "MX";
  const relativeRecordSetName = "recordMX";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetPTRDelete.json
 */
async function deletePrivateDnsZonePtrRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "0.0.127.in-addr.arpa";
  const recordType = "PTR";
  const relativeRecordSetName = "1";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetSRVDelete.json
 */
async function deletePrivateDnsZoneSrvRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "SRV";
  const relativeRecordSetName = "recordSRV";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @summary Deletes a record set from a Private DNS zone. This operation cannot be undone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetTXTDelete.json
 */
async function deletePrivateDnsZoneTxtRecordSet() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "TXT";
  const relativeRecordSetName = "recordTXT";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.delete(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
  );
  console.log(result);
}

async function main() {
  deletePrivateDnsZoneARecordSet();
  deletePrivateDnsZoneAaaaRecordSet();
  deletePrivateDnsZoneCnameRecordSet();
  deletePrivateDnsZoneMxRecordSet();
  deletePrivateDnsZonePtrRecordSet();
  deletePrivateDnsZoneSrvRecordSet();
  deletePrivateDnsZoneTxtRecordSet();
}

main().catch(console.error);
