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
  ApplicationAcceleratorResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the application accelerator.
 *
 * @summary Create or update the application accelerator.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/ApplicationAccelerators_CreateOrUpdate.json
 */
async function applicationAcceleratorsCreateOrUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const applicationAcceleratorName = "default";
  const applicationAcceleratorResource: ApplicationAcceleratorResource = {
    properties: {},
    sku: { name: "E0", capacity: 2, tier: "Enterprise" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.applicationAccelerators.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    applicationAcceleratorName,
    applicationAcceleratorResource
  );
  console.log(result);
}

async function main() {
  applicationAcceleratorsCreateOrUpdate();
}

main().catch(console.error);
