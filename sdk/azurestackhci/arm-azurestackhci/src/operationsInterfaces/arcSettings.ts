/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ArcSetting,
  ArcSettingsListByClusterOptionalParams,
  ArcSettingsGetOptionalParams,
  ArcSettingsGetResponse,
  ArcSettingsCreateOptionalParams,
  ArcSettingsCreateResponse,
  ArcSettingsPatch,
  ArcSettingsUpdateOptionalParams,
  ArcSettingsUpdateResponse,
  ArcSettingsDeleteOptionalParams,
  ArcSettingsGeneratePasswordOptionalParams,
  ArcSettingsGeneratePasswordResponse,
  ArcSettingsCreateIdentityOptionalParams,
  ArcSettingsCreateIdentityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ArcSettings. */
export interface ArcSettings {
  /**
   * Get ArcSetting resources of HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ArcSettingsListByClusterOptionalParams
  ): PagedAsyncIterableIterator<ArcSetting>;
  /**
   * Get ArcSetting resource details of HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsGetOptionalParams
  ): Promise<ArcSettingsGetResponse>;
  /**
   * Create ArcSetting for HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param arcSetting Parameters supplied to the Create ArcSetting resource for this HCI cluster.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    arcSetting: ArcSetting,
    options?: ArcSettingsCreateOptionalParams
  ): Promise<ArcSettingsCreateResponse>;
  /**
   * Update ArcSettings for HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param arcSetting ArcSettings parameters that needs to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    arcSetting: ArcSettingsPatch,
    options?: ArcSettingsUpdateOptionalParams
  ): Promise<ArcSettingsUpdateResponse>;
  /**
   * Delete ArcSetting resource details of HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete ArcSetting resource details of HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Generate password for arc settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  generatePassword(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsGeneratePasswordOptionalParams
  ): Promise<ArcSettingsGeneratePasswordResponse>;
  /**
   * Create Aad identity for arc settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  beginCreateIdentity(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsCreateIdentityOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ArcSettingsCreateIdentityResponse>,
      ArcSettingsCreateIdentityResponse
    >
  >;
  /**
   * Create Aad identity for arc settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param arcSettingName The name of the proxy resource holding details of HCI ArcSetting information.
   * @param options The options parameters.
   */
  beginCreateIdentityAndWait(
    resourceGroupName: string,
    clusterName: string,
    arcSettingName: string,
    options?: ArcSettingsCreateIdentityOptionalParams
  ): Promise<ArcSettingsCreateIdentityResponse>;
}