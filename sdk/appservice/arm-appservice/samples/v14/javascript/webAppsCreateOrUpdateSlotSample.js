/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/CloneWebAppSlot.json
 */
async function cloneWebAppSlot() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const slot = "staging";
  const siteEnvelope = {
    cloningInfo: {
      appSettingsOverrides: { setting1: "NewValue1", setting3: "NewValue5" },
      cloneCustomHostNames: true,
      cloneSourceControl: true,
      configureLoadBalancing: false,
      hostingEnvironment:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/hostingenvironments/aseforsites",
      overwrite: false,
      sourceWebAppId:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/sites/srcsiteg478/slot/qa",
      sourceWebAppLocation: "West Europe",
    },
    kind: "app",
    location: "East US",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateSlotAndWait(
    resourceGroupName,
    name,
    slot,
    siteEnvelope
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/CreateOrUpdateWebAppSlot.json
 */
async function createOrUpdateWebAppSlot() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const slot = "staging";
  const siteEnvelope = {
    kind: "app",
    location: "East US",
    serverFarmId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/DefaultAsp",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateSlotAndWait(
    resourceGroupName,
    name,
    slot,
    siteEnvelope
  );
  console.log(result);
}

async function main() {
  cloneWebAppSlot();
  createOrUpdateWebAppSlot();
}

main().catch(console.error);
