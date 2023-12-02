/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List all global event subscriptions under an Azure subscription for a topic type.
 *
 * @summary List all global event subscriptions under an Azure subscription for a topic type.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/EventSubscriptions_ListGlobalBySubscriptionForTopicType.json
 */
async function eventSubscriptionsListGlobalBySubscriptionForTopicType() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const topicTypeName = "Microsoft.Resources.Subscriptions";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventSubscriptions.listGlobalBySubscriptionForTopicType(
    topicTypeName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  eventSubscriptionsListGlobalBySubscriptionForTopicType();
}

main().catch(console.error);
