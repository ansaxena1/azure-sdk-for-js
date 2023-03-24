/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NewRelicObservability } from "@azure/arm-newrelicobservability";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List NewRelicMonitorResource resources by subscription ID
 *
 * @summary List NewRelicMonitorResource resources by subscription ID
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/preview/2022-07-01-preview/examples/Monitors_ListBySubscription_MaximumSet_Gen.json
 */
async function monitorsListBySubscriptionMaximumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "hfmjmpyqgezxkp";
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  monitorsListBySubscriptionMaximumSetGen();
}

main().catch(console.error);
