/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns details of a specific file in a work space.
 *
 * @summary Returns details of a specific file in a work space.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/GetFileDetailsForSubscription.json
 */
async function getDetailsOfASubscriptionFile() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const fileWorkspaceName = "testworkspace";
  const fileName = "test.txt";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.files.get(fileWorkspaceName, fileName);
  console.log(result);
}

async function main() {
  getDetailsOfASubscriptionFile();
}

main().catch(console.error);