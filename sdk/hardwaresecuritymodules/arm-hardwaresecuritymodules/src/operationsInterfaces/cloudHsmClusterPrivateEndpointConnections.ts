/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnection,
  CloudHsmClusterPrivateEndpointConnectionsCreateOptionalParams,
  CloudHsmClusterPrivateEndpointConnectionsCreateResponse,
  CloudHsmClusterPrivateEndpointConnectionsDeleteOptionalParams,
  CloudHsmClusterPrivateEndpointConnectionsGetOptionalParams,
  CloudHsmClusterPrivateEndpointConnectionsGetResponse
} from "../models";

/** Interface representing a CloudHsmClusterPrivateEndpointConnections. */
export interface CloudHsmClusterPrivateEndpointConnections {
  /**
   * Creates or updates the private endpoint connection for the Cloud Hsm Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param peConnectionName Name of the private endpoint connection associated with the Cloud HSM
   *                         Cluster.
   * @param properties Parameters of the PrivateEndpointConnection
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: CloudHsmClusterPrivateEndpointConnectionsCreateOptionalParams
  ): Promise<CloudHsmClusterPrivateEndpointConnectionsCreateResponse>;
  /**
   * Deletes the private endpoint connection for the Cloud Hsm Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param peConnectionName Name of the private endpoint connection associated with the Cloud HSM
   *                         Cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    options?: CloudHsmClusterPrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the private endpoint connection for the Cloud Hsm Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param peConnectionName Name of the private endpoint connection associated with the Cloud HSM
   *                         Cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    options?: CloudHsmClusterPrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the private endpoint connection for the Cloud Hsm Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param peConnectionName Name of the private endpoint connection associated with the Cloud HSM
   *                         Cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    options?: CloudHsmClusterPrivateEndpointConnectionsGetOptionalParams
  ): Promise<CloudHsmClusterPrivateEndpointConnectionsGetResponse>;
}
