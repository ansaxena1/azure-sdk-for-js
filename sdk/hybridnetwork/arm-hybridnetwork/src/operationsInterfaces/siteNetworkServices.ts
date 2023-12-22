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
  SiteNetworkService,
  SiteNetworkServicesListBySubscriptionOptionalParams,
  SiteNetworkServicesListByResourceGroupOptionalParams,
  SiteNetworkServicesDeleteOptionalParams,
  SiteNetworkServicesDeleteResponse,
  SiteNetworkServicesGetOptionalParams,
  SiteNetworkServicesGetResponse,
  SiteNetworkServicesCreateOrUpdateOptionalParams,
  SiteNetworkServicesCreateOrUpdateResponse,
  TagsObject,
  SiteNetworkServicesUpdateTagsOptionalParams,
  SiteNetworkServicesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SiteNetworkServices. */
export interface SiteNetworkServices {
  /**
   * Lists all sites in the network service in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SiteNetworkServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SiteNetworkService>;
  /**
   * Lists all site network services.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SiteNetworkServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SiteNetworkService>;
  /**
   * Deletes the specified site network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SiteNetworkServicesDeleteResponse>,
      SiteNetworkServicesDeleteResponse
    >
  >;
  /**
   * Deletes the specified site network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesDeleteOptionalParams
  ): Promise<SiteNetworkServicesDeleteResponse>;
  /**
   * Gets information about the specified site network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesGetOptionalParams
  ): Promise<SiteNetworkServicesGetResponse>;
  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param parameters Parameters supplied to the create or update site network service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: SiteNetworkService,
    options?: SiteNetworkServicesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SiteNetworkServicesCreateOrUpdateResponse>,
      SiteNetworkServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param parameters Parameters supplied to the create or update site network service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: SiteNetworkService,
    options?: SiteNetworkServicesCreateOrUpdateOptionalParams
  ): Promise<SiteNetworkServicesCreateOrUpdateResponse>;
  /**
   * Updates a site update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteNetworkServiceName The name of the site network service.
   * @param parameters Parameters supplied to update network site tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: TagsObject,
    options?: SiteNetworkServicesUpdateTagsOptionalParams
  ): Promise<SiteNetworkServicesUpdateTagsResponse>;
}