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
  MachineRunCommand,
  HybridComputeManagementClient,
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create or update a run command.
 *
 * @summary The operation to create or update a run command.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/runCommand/RunCommands_CreateOrUpdate.json
 */
async function createOrUpdateARunCommand() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const runCommandName = "myRunCommand";
  const runCommandProperties: MachineRunCommand = {
    asyncExecution: false,
    errorBlobUri:
      "https://mystorageaccount.blob.core.windows.net/mycontainer/MyScriptError.txt",
    location: "eastus2",
    outputBlobUri:
      "https://mystorageaccount.blob.core.windows.net/myscriptoutputcontainer/MyScriptoutput.txt",
    parameters: [
      { name: "param1", value: "value1" },
      { name: "param2", value: "value2" },
    ],
    runAsPassword: "<runAsPassword>",
    runAsUser: "user1",
    source: { script: "Write-Host Hello World!" },
    timeoutInSeconds: 3600,
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machineRunCommands.beginCreateOrUpdateAndWait(
    resourceGroupName,
    machineName,
    runCommandName,
    runCommandProperties,
  );
  console.log(result);
}

async function main() {
  createOrUpdateARunCommand();
}

main().catch(console.error);
