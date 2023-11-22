/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByServerOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Gets all private endpoint connections on a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: PrivateEndpointConnectionsListByServerOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse>;
}