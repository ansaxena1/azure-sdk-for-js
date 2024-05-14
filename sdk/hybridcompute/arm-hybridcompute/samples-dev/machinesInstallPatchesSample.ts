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
  MachineInstallPatchesParameters,
  HybridComputeManagementClient,
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to install patches on a hybrid machine identity in Azure.
 *
 * @summary The operation to install patches on a hybrid machine identity in Azure.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2023-10-03-preview/examples/machine/Machine_InstallPatches.json
 */
async function installPatchStateOfAMachine() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroupName";
  const name = "myMachineName";
  const installPatchesInput: MachineInstallPatchesParameters = {
    maximumDuration: "PT4H",
    rebootSetting: "IfRequired",
    windowsParameters: {
      classificationsToInclude: ["Critical", "Security"],
      maxPatchPublishDate: new Date("2021-08-19T02:36:43.0539904+00:00"),
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machines.beginInstallPatchesAndWait(
    resourceGroupName,
    name,
    installPatchesInput,
  );
  console.log(result);
}

async function main() {
  installPatchStateOfAMachine();
}

main().catch(console.error);
