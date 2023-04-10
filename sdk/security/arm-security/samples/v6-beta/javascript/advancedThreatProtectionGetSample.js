/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the Advanced Threat Protection settings for the specified resource.
 *
 * @summary Gets the Advanced Threat Protection settings for the specified resource.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-01-01/examples/AdvancedThreatProtection/GetAdvancedThreatProtectionSettings_example.json
 */
async function getsTheAdvancedThreatProtectionSettingsForTheSpecifiedResource() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.advancedThreatProtection.get(resourceId);
  console.log(result);
}

async function main() {
  getsTheAdvancedThreatProtectionSettingsForTheSpecifiedResource();
}

main().catch(console.error);
