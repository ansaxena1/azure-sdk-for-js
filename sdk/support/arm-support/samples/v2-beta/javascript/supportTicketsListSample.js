/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftSupport } = require("@azure/arm-support");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsCreatedOnOrAfterAndInOpenStateBySubscription.json
 */
async function listSupportTicketsCreatedOnOrAfterACertainDateAndInOpenStateForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "createdDate ge 2020-03-10T22:08:51Z and status eq 'Open'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsCreatedOnOrAfterAndInUpdatingStateBySubscription.json
 */
async function listSupportTicketsCreatedOnOrAfterACertainDateAndInUpdatingStateForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "createdDate ge 2020-03-10T22:08:51Z and status eq 'Updating'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsBySubscription.json
 */
async function listSupportTicketsForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsInOpenStateBySubscription.json
 */
async function listSupportTicketsInOpenStateForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "status eq 'Open'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsInUpdatingStateBySubscription.json
 */
async function listSupportTicketsInUpdatingStateForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "status eq 'Updating'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsProblemClassificationIdEqualsForSubscription.json
 */
async function listSupportTicketsWithACertainProblemClassificationIdForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "ProblemClassificationId eq 'compute_vm_problemClassification_guid'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @summary Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListSupportTicketsServiceIdEqualsForSubscription.json
 */
async function listSupportTicketsWithACertainServiceIdForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const filter = "ServiceId eq 'vm_windows_service_guid'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.supportTickets.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listSupportTicketsCreatedOnOrAfterACertainDateAndInOpenStateForASubscription();
  listSupportTicketsCreatedOnOrAfterACertainDateAndInUpdatingStateForASubscription();
  listSupportTicketsForASubscription();
  listSupportTicketsInOpenStateForASubscription();
  listSupportTicketsInUpdatingStateForASubscription();
  listSupportTicketsWithACertainProblemClassificationIdForASubscription();
  listSupportTicketsWithACertainServiceIdForASubscription();
}

main().catch(console.error);