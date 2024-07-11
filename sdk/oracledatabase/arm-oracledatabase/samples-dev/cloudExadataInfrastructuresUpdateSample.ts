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
  CloudExadataInfrastructureUpdate,
  OracleDatabaseManagementClient,
} from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a CloudExadataInfrastructure
 *
 * @summary Update a CloudExadataInfrastructure
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/exaInfra_patch.json
 */
async function patchExadataInfrastructure() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudexadatainfrastructurename = "infra1";
  const properties: CloudExadataInfrastructureUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.cloudExadataInfrastructures.beginUpdateAndWait(
    resourceGroupName,
    cloudexadatainfrastructurename,
    properties,
  );
  console.log(result);
}

async function main() {
  patchExadataInfrastructure();
}

main().catch(console.error);
