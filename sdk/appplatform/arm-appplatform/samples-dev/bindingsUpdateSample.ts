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
  BindingResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Operation to update an exiting Binding.
 *
 * @summary Operation to update an exiting Binding.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/Bindings_Update.json
 */
async function bindingsUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const bindingName = "mybinding";
  const bindingResource: BindingResource = {
    properties: {
      bindingParameters: { apiType: "SQL", databaseName: "db1" },
      createdAt: undefined,
      generatedProperties: undefined,
      key: "xxxx",
      updatedAt: undefined
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.bindings.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    bindingName,
    bindingResource
  );
  console.log(result);
}

async function main() {
  bindingsUpdate();
}

main().catch(console.error);
