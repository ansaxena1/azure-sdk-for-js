/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HealthcareApisManagementClient } from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the available workspaces under the specified resource group.
 *
 * @summary Lists all the available workspaces under the specified resource group.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2023-11-01/examples/workspaces/Workspaces_ListByResourceGroup.json
 */
async function getWorkspacesByResourceGroup() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspaces.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getWorkspacesByResourceGroup();
}

main().catch(console.error);