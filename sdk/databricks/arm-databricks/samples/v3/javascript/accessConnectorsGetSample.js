/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDatabricksManagementClient } = require("@azure/arm-databricks");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets an azure databricks accessConnector.
 *
 * @summary Gets an azure databricks accessConnector.
 * x-ms-original-file: specification/databricks/resource-manager/Microsoft.Databricks/stable/2023-05-01/examples/AccessConnectorGet.json
 */
async function getAnAzureDatabricksAccessConnector() {
  const subscriptionId = process.env["DATABRICKS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["DATABRICKS_RESOURCE_GROUP"] || "rg";
  const connectorName = "myAccessConnector";
  const credential = new DefaultAzureCredential();
  const client = new AzureDatabricksManagementClient(credential, subscriptionId);
  const result = await client.accessConnectors.get(resourceGroupName, connectorName);
  console.log(result);
}

async function main() {
  getAnAzureDatabricksAccessConnector();
}

main().catch(console.error);