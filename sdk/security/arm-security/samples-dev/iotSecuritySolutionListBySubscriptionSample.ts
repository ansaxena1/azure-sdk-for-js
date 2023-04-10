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
  IotSecuritySolutionListBySubscriptionOptionalParams,
  SecurityCenter
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Use this method to get the list of IoT Security solutions by subscription.
 *
 * @summary Use this method to get the list of IoT Security solutions by subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-08-01/examples/IoTSecuritySolutions/GetIoTSecuritySolutionsListByIotHub.json
 */
async function listIoTSecuritySolutionsByIoTHub() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const filter =
    'properties.iotHubs/any(i eq "/subscriptions/075423e9-7d33-4166-8bdf-3920b04e3735/resourceGroups/myRg/providers/Microsoft.Devices/IotHubs/FirstIotHub")';
  const options: IotSecuritySolutionListBySubscriptionOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iotSecuritySolution.listBySubscription(
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Use this method to get the list of IoT Security solutions by subscription.
 *
 * @summary Use this method to get the list of IoT Security solutions by subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-08-01/examples/IoTSecuritySolutions/GetIoTSecuritySolutionsList.json
 */
async function listIoTSecuritySolutionsBySubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iotSecuritySolution.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listIoTSecuritySolutionsByIoTHub();
  listIoTSecuritySolutionsBySubscription();
}

main().catch(console.error);
