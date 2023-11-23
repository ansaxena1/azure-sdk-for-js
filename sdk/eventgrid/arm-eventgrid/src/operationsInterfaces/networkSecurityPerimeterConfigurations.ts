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
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterResourceType,
  NetworkSecurityPerimeterConfigurationsListOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetResponse,
  NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  NetworkSecurityPerimeterConfigurationsReconcileResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkSecurityPerimeterConfigurations. */
export interface NetworkSecurityPerimeterConfigurations {
  /**
   * Get all network security perimeter configurations associated with a topic or domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param resourceType The type of the resource. This can be either \'topics\' or \'domains\'.
   * @param resourceName The name of the resource (namely, either, the topic name or domain name).
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration>;
  /**
   * Get a specific network security perimeter configuration with a topic or domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param resourceType The type of the resource. This can be either \'topics\', or \'domains\'.
   * @param resourceName The name of the resource (namely, either, the topic name or domain name).
   * @param perimeterGuid Unique identifier for perimeter
   * @param associationName Association name to association network security perimeter resource to
   *                        profile
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    perimeterGuid: string,
    associationName: string,
    options?: NetworkSecurityPerimeterConfigurationsGetOptionalParams
  ): Promise<NetworkSecurityPerimeterConfigurationsGetResponse>;
  /**
   * Reconcile a specific network security perimeter configuration for a given network security perimeter
   * association with a topic or domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param resourceType The type of the resource. This can be either \'topics\' or \'domains\'.
   * @param resourceName The name of the resource (namely, either, the topic name or domain name).
   * @param perimeterGuid Unique identifier for perimeter
   * @param associationName Association name to association network security perimeter resource to
   *                        profile
   * @param options The options parameters.
   */
  beginReconcile(
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    perimeterGuid: string,
    associationName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkSecurityPerimeterConfigurationsReconcileResponse>,
      NetworkSecurityPerimeterConfigurationsReconcileResponse
    >
  >;
  /**
   * Reconcile a specific network security perimeter configuration for a given network security perimeter
   * association with a topic or domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param resourceType The type of the resource. This can be either \'topics\' or \'domains\'.
   * @param resourceName The name of the resource (namely, either, the topic name or domain name).
   * @param perimeterGuid Unique identifier for perimeter
   * @param associationName Association name to association network security perimeter resource to
   *                        profile
   * @param options The options parameters.
   */
  beginReconcileAndWait(
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    perimeterGuid: string,
    associationName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  ): Promise<NetworkSecurityPerimeterConfigurationsReconcileResponse>;
}