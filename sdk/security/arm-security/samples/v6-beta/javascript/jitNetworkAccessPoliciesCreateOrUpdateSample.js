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
 * This sample demonstrates how to Create a policy for protecting resources using Just-in-Time access control
 *
 * @summary Create a policy for protecting resources using Just-in-Time access control
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/JitNetworkAccessPolicies/CreateJitNetworkAccessPolicy_example.json
 */
async function createJitNetworkAccessPolicy() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "myRg1";
  const ascLocation = "westeurope";
  const jitNetworkAccessPolicyName = "default";
  const body = {
    name: "default",
    type: "Microsoft.Security/locations/jitNetworkAccessPolicies",
    id: "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Security/locations/westeurope/jitNetworkAccessPolicies/default",
    kind: "Basic",
    location: "westeurope",
    provisioningState: "Succeeded",
    requests: [
      {
        requestor: "barbara@contoso.com",
        startTimeUtc: new Date("2018-05-17T08:06:45.5691611Z"),
        virtualMachines: [
          {
            id: "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Compute/virtualMachines/vm1",
            ports: [
              {
                allowedSourceAddressPrefix: "192.127.0.2",
                endTimeUtc: new Date("2018-05-17T09:06:45.5691611Z"),
                number: 3389,
                status: "Initiated",
                statusReason: "UserRequested",
              },
            ],
          },
        ],
      },
    ],
    virtualMachines: [
      {
        id: "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Compute/virtualMachines/vm1",
        ports: [
          {
            allowedSourceAddressPrefix: "*",
            maxRequestAccessDuration: "PT3H",
            number: 22,
            protocol: "*",
          },
          {
            allowedSourceAddressPrefix: "*",
            maxRequestAccessDuration: "PT3H",
            number: 3389,
            protocol: "*",
          },
        ],
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.jitNetworkAccessPolicies.createOrUpdate(
    resourceGroupName,
    ascLocation,
    jitNetworkAccessPolicyName,
    body
  );
  console.log(result);
}

async function main() {
  createJitNetworkAccessPolicy();
}

main().catch(console.error);
