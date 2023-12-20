/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  JobPrivateEndpoint,
  JobPrivateEndpointsListByAgentOptionalParams,
  JobPrivateEndpointsGetOptionalParams,
  JobPrivateEndpointsGetResponse,
  JobPrivateEndpointsCreateOrUpdateOptionalParams,
  JobPrivateEndpointsCreateOrUpdateResponse,
  JobPrivateEndpointsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobPrivateEndpoints. */
export interface JobPrivateEndpoints {
  /**
   * Gets a list of job agent private endpoints.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobPrivateEndpointsListByAgentOptionalParams
  ): PagedAsyncIterableIterator<JobPrivateEndpoint>;
  /**
   * Gets a private endpoint.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param privateEndpointName The name of the private endpoint to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    privateEndpointName: string,
    options?: JobPrivateEndpointsGetOptionalParams
  ): Promise<JobPrivateEndpointsGetResponse>;
  /**
   * Creates or updates a private endpoint.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param privateEndpointName The name of the private endpoint.
   * @param parameters The requested private endpoint state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    privateEndpointName: string,
    parameters: JobPrivateEndpoint,
    options?: JobPrivateEndpointsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<JobPrivateEndpointsCreateOrUpdateResponse>,
      JobPrivateEndpointsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a private endpoint.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param privateEndpointName The name of the private endpoint.
   * @param parameters The requested private endpoint state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    privateEndpointName: string,
    parameters: JobPrivateEndpoint,
    options?: JobPrivateEndpointsCreateOrUpdateOptionalParams
  ): Promise<JobPrivateEndpointsCreateOrUpdateResponse>;
  /**
   * Deletes a private endpoint.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param privateEndpointName The name of the private endpoint to delete.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    privateEndpointName: string,
    options?: JobPrivateEndpointsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a private endpoint.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param privateEndpointName The name of the private endpoint to delete.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    privateEndpointName: string,
    options?: JobPrivateEndpointsDeleteOptionalParams
  ): Promise<void>;
}