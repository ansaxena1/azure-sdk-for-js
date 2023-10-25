/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 *
 * @summary List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2023-01-01/examples/VolumeSnapshots_ListByVolumeGroup_MaximumSet_Gen.json
 */
async function volumeSnapshotsListByVolumeGroupMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const filter = "volumeName eq <volume name>";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.volumeSnapshots.listByVolumeGroup(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 *
 * @summary List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2023-01-01/examples/VolumeSnapshots_ListByVolumeGroup_MinimumSet_Gen.json
 */
async function volumeSnapshotsListByVolumeGroupMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.volumeSnapshots.listByVolumeGroup(
    resourceGroupName,
    elasticSanName,
    volumeGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  volumeSnapshotsListByVolumeGroupMaximumSetGen();
  volumeSnapshotsListByVolumeGroupMinimumSetGen();
}

main().catch(console.error);