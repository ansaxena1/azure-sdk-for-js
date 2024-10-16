/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BillingManagementClient } = require("@azure/arm-billing");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a role assignment for the caller on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @summary Gets a role assignment for the caller on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRoleAssignmentGetByInvoiceSection.json
 */
async function billingRoleAssignmentGetByInvoiceSection() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2018-09-30";
  const billingProfileName = "BKM6-54VH-BG7-PGB";
  const invoiceSectionName = "xxxx-xxxx-xxx-xxx";
  const billingRoleAssignmentName =
    "10000000-aaaa-bbbb-cccc-100000000000_6fd330f6-7d26-4aff-b9cf-7bd699f965b9";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingRoleAssignments.getByInvoiceSection(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    billingRoleAssignmentName,
  );
  console.log(result);
}

async function main() {
  billingRoleAssignmentGetByInvoiceSection();
}

main().catch(console.error);
