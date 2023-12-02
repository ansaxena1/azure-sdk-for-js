/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceNetworkingManagementClient } from "@azure/arm-servicenetworking";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a Frontend
 *
 * @summary Delete a Frontend
 * x-ms-original-file: specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/stable/2023-11-01/examples/FrontendDelete.json
 */
async function deleteFrontend() {
  const subscriptionId =
    process.env["SERVICENETWORKING_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["SERVICENETWORKING_RESOURCE_GROUP"] || "rg1";
  const trafficControllerName = "tc1";
  const frontendName = "fe1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceNetworkingManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.frontendsInterface.beginDeleteAndWait(
    resourceGroupName,
    trafficControllerName,
    frontendName
  );
  console.log(result);
}

async function main() {
  deleteFrontend();
}

main().catch(console.error);
