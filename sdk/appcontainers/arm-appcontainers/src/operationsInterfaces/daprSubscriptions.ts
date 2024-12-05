/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DaprSubscription,
  DaprSubscriptionsListOptionalParams,
  DaprSubscriptionsGetOptionalParams,
  DaprSubscriptionsGetResponse,
  DaprSubscriptionsCreateOrUpdateOptionalParams,
  DaprSubscriptionsCreateOrUpdateResponse,
  DaprSubscriptionsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DaprSubscriptions. */
export interface DaprSubscriptions {
  /**
   * Get the Dapr subscriptions for a managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprSubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<DaprSubscription>;
  /**
   * Get a dapr subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr subscription.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    options?: DaprSubscriptionsGetOptionalParams,
  ): Promise<DaprSubscriptionsGetResponse>;
  /**
   * Creates or updates a Dapr subscription in a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr subscription.
   * @param daprSubscriptionEnvelope Configuration details of the Dapr subscription.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    daprSubscriptionEnvelope: DaprSubscription,
    options?: DaprSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<DaprSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete a Dapr subscription from a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr subscription.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    options?: DaprSubscriptionsDeleteOptionalParams,
  ): Promise<void>;
}
