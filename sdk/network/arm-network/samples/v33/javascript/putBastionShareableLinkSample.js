/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a Bastion Shareable Links for all the VMs specified in the request.
 *
 * @summary Creates a Bastion Shareable Links for all the VMs specified in the request.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/BastionShareableLinkCreate.json
 */
async function createBastionShareableLinksForTheRequestVMS() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const bastionHostName = "bastionhosttenant";
  const bslRequest = {
    vms: [
      {
        vm: {
          id: "/subscriptions/subid/resourceGroups/rgx/providers/Microsoft.Compute/virtualMachines/vm1",
        },
      },
      {
        vm: {
          id: "/subscriptions/subid/resourceGroups/rgx/providers/Microsoft.Compute/virtualMachines/vm2",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.beginListPutBastionShareableLinkAndWait(
    resourceGroupName,
    bastionHostName,
    bslRequest,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  createBastionShareableLinksForTheRequestVMS();
}

main().catch(console.error);