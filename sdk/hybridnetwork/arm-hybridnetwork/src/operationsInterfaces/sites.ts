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
  Site,
  SitesListBySubscriptionOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesDeleteOptionalParams,
  SitesDeleteResponse,
  SitesGetOptionalParams,
  SitesGetResponse,
  SitesCreateOrUpdateOptionalParams,
  SitesCreateOrUpdateResponse,
  TagsObject,
  SitesUpdateTagsOptionalParams,
  SitesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Sites. */
export interface Sites {
  /**
   * Lists all sites in the network service in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SitesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Site>;
  /**
   * Lists all sites in the network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Site>;
  /**
   * Deletes the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<SitesDeleteResponse>, SitesDeleteResponse>
  >;
  /**
   * Deletes the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams
  ): Promise<SitesDeleteResponse>;
  /**
   * Gets information about the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetOptionalParams
  ): Promise<SitesGetResponse>;
  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to the create or update network site operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SitesCreateOrUpdateResponse>,
      SitesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to the create or update network site operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams
  ): Promise<SitesCreateOrUpdateResponse>;
  /**
   * Updates a site update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to update network site tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    siteName: string,
    parameters: TagsObject,
    options?: SitesUpdateTagsOptionalParams
  ): Promise<SitesUpdateTagsResponse>;
}