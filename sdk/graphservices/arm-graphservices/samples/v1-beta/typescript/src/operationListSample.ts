/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { GraphServices } from "@azure/arm-graphservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns list of operations.
 *
 * @summary Returns list of operations.
 * x-ms-original-file: specification/graphservicesprod/resource-manager/Microsoft.GraphServices/preview/2022-09-22-preview/examples/Operations_List.json
 */
async function getListOfOperations() {
  const subscriptionId =
    process.env["GRAPHSERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new GraphServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operationOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getListOfOperations();
}

main().catch(console.error);
