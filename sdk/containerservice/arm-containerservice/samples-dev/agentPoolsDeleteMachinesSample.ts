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
  AgentPoolDeleteMachinesParameter,
  ContainerServiceClient,
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes specific machines in an agent pool.
 *
 * @summary Deletes specific machines in an agent pool.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2024-08-01/examples/AgentPoolsDeleteMachines.json
 */
async function deleteSpecificMachinesInAnAgentPool() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const machines: AgentPoolDeleteMachinesParameter = {
    machineNames: [
      "aks-nodepool1-42263519-vmss00000a",
      "aks-nodepool1-42263519-vmss00000b",
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginDeleteMachinesAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    machines,
  );
  console.log(result);
}

async function main() {
  deleteSpecificMachinesInAnAgentPool();
}

main().catch(console.error);
