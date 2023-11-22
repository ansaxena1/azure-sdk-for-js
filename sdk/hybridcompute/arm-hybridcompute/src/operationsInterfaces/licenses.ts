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
  License,
  LicensesListByResourceGroupOptionalParams,
  LicensesListBySubscriptionOptionalParams,
  LicensesValidateLicenseOptionalParams,
  LicensesValidateLicenseResponse,
  LicensesCreateOrUpdateOptionalParams,
  LicensesCreateOrUpdateResponse,
  LicenseUpdate,
  LicensesUpdateOptionalParams,
  LicensesUpdateResponse,
  LicensesGetOptionalParams,
  LicensesGetResponse,
  LicensesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Licenses. */
export interface Licenses {
  /**
   * The operation to get all licenses of a non-Azure machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: LicensesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<License>;
  /**
   * The operation to get all licenses of a non-Azure machine
   * @param options The options parameters.
   */
  listBySubscription(
    options?: LicensesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<License>;
  /**
   * The operation to validate a license.
   * @param parameters Parameters supplied to the license validation operation.
   * @param options The options parameters.
   */
  beginValidateLicense(
    parameters: License,
    options?: LicensesValidateLicenseOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LicensesValidateLicenseResponse>,
      LicensesValidateLicenseResponse
    >
  >;
  /**
   * The operation to validate a license.
   * @param parameters Parameters supplied to the license validation operation.
   * @param options The options parameters.
   */
  beginValidateLicenseAndWait(
    parameters: License,
    options?: LicensesValidateLicenseOptionalParams
  ): Promise<LicensesValidateLicenseResponse>;
  /**
   * The operation to create or update a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param parameters Parameters supplied to the Create license operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    licenseName: string,
    parameters: License,
    options?: LicensesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LicensesCreateOrUpdateResponse>,
      LicensesCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param parameters Parameters supplied to the Create license operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    licenseName: string,
    parameters: License,
    options?: LicensesCreateOrUpdateOptionalParams
  ): Promise<LicensesCreateOrUpdateResponse>;
  /**
   * The operation to update a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param parameters Parameters supplied to the Update license operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    licenseName: string,
    parameters: LicenseUpdate,
    options?: LicensesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LicensesUpdateResponse>,
      LicensesUpdateResponse
    >
  >;
  /**
   * The operation to update a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param parameters Parameters supplied to the Update license operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    licenseName: string,
    parameters: LicenseUpdate,
    options?: LicensesUpdateOptionalParams
  ): Promise<LicensesUpdateResponse>;
  /**
   * Retrieves information about the view of a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    licenseName: string,
    options?: LicensesGetOptionalParams
  ): Promise<LicensesGetResponse>;
  /**
   * The operation to delete a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    licenseName: string,
    options?: LicensesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to delete a license.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param licenseName The name of the license.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    licenseName: string,
    options?: LicensesDeleteOptionalParams
  ): Promise<void>;
}