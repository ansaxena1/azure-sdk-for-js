/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DevBoxDefinition,
  CatalogDevBoxDefinitionsListByCatalogOptionalParams,
  CatalogDevBoxDefinitionsGetOptionalParams,
  CatalogDevBoxDefinitionsGetResponse,
  CatalogDevBoxDefinitionsGetErrorDetailsOptionalParams,
  CatalogDevBoxDefinitionsGetErrorDetailsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CatalogDevBoxDefinitions. */
export interface CatalogDevBoxDefinitions {
  /**
   * List Dev Box definitions in the catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  listByCatalog(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogDevBoxDefinitionsListByCatalogOptionalParams
  ): PagedAsyncIterableIterator<DevBoxDefinition>;
  /**
   * Gets a Dev Box definition from the catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    devBoxDefinitionName: string,
    options?: CatalogDevBoxDefinitionsGetOptionalParams
  ): Promise<CatalogDevBoxDefinitionsGetResponse>;
  /**
   * Gets Catalog Devbox Definition error details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  getErrorDetails(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    devBoxDefinitionName: string,
    options?: CatalogDevBoxDefinitionsGetErrorDetailsOptionalParams
  ): Promise<CatalogDevBoxDefinitionsGetErrorDetailsResponse>;
}