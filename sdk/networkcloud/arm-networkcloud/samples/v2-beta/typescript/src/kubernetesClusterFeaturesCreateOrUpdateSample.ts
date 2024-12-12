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
  KubernetesClusterFeature,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it exists.
 *
 * @summary Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it exists.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/KubernetesClusterFeatures_Create.json
 */
async function createOrUpdateKubernetesClusterFeature() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const kubernetesClusterName = "kubernetesClusterName";
  const featureName = "featureName";
  const kubernetesClusterFeatureParameters: KubernetesClusterFeature = {
    location: "location",
    options: [{ key: "featureOptionName", value: "featureOptionValue" }],
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result =
    await client.kubernetesClusterFeatures.beginCreateOrUpdateAndWait(
      resourceGroupName,
      kubernetesClusterName,
      featureName,
      kubernetesClusterFeatureParameters,
    );
  console.log(result);
}

async function main() {
  createOrUpdateKubernetesClusterFeature();
}

main().catch(console.error);
