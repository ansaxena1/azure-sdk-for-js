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
  StorageContainers,
  StorageContainersListOptionalParams,
  StorageContainersListAllOptionalParams,
  StorageContainersGetOptionalParams,
  StorageContainersGetResponse,
  StorageContainersCreateOrUpdateOptionalParams,
  StorageContainersCreateOrUpdateResponse,
  StorageContainersDeleteOptionalParams,
  StorageContainersDeleteResponse,
  StorageContainersUpdateRequest,
  StorageContainersUpdateOptionalParams,
  StorageContainersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StorageContainersOperations. */
export interface StorageContainersOperations {
  /**
   * Lists all of the storage containers in the specified resource group. Use the nextLink property in
   * the response to get the next page of storage containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: StorageContainersListOptionalParams
  ): PagedAsyncIterableIterator<StorageContainers>;
  /**
   * Lists all of the storage containers in the specified subscription. Use the nextLink property in the
   * response to get the next page of storage containers.
   * @param options The options parameters.
   */
  listAll(
    options?: StorageContainersListAllOptionalParams
  ): PagedAsyncIterableIterator<StorageContainers>;
  /**
   * Gets a storage container
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageContainerName: string,
    options?: StorageContainersGetOptionalParams
  ): Promise<StorageContainersGetResponse>;
  /**
   * The operation to create or update a storage container. Please note some properties can be set only
   * during storage container creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param storageContainers The storage container resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    storageContainerName: string,
    storageContainers: StorageContainers,
    options?: StorageContainersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageContainersCreateOrUpdateResponse>,
      StorageContainersCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update a storage container. Please note some properties can be set only
   * during storage container creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param storageContainers The storage container resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    storageContainerName: string,
    storageContainers: StorageContainers,
    options?: StorageContainersCreateOrUpdateOptionalParams
  ): Promise<StorageContainersCreateOrUpdateResponse>;
  /**
   * The operation to delete a storage container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    storageContainerName: string,
    options?: StorageContainersDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageContainersDeleteResponse>,
      StorageContainersDeleteResponse
    >
  >;
  /**
   * The operation to delete a storage container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    storageContainerName: string,
    options?: StorageContainersDeleteOptionalParams
  ): Promise<StorageContainersDeleteResponse>;
  /**
   * The operation to update a storage container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param storageContainers The storage container resource patch definition.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    storageContainerName: string,
    storageContainers: StorageContainersUpdateRequest,
    options?: StorageContainersUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageContainersUpdateResponse>,
      StorageContainersUpdateResponse
    >
  >;
  /**
   * The operation to update a storage container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageContainerName Name of the storage container
   * @param storageContainers The storage container resource patch definition.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    storageContainerName: string,
    storageContainers: StorageContainersUpdateRequest,
    options?: StorageContainersUpdateOptionalParams
  ): Promise<StorageContainersUpdateResponse>;
}