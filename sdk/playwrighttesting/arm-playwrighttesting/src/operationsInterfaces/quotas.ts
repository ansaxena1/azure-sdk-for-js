/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Quota,
  QuotasListBySubscriptionOptionalParams,
  QuotaNames,
  QuotasGetOptionalParams,
  QuotasGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Quotas. */
export interface Quotas {
  /**
   * List quotas for a given subscription Id.
   * @param location The location of quota in ARM Normalized format like eastus, southeastasia etc.
   * @param options The options parameters.
   */
  listBySubscription(
    location: string,
    options?: QuotasListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Quota>;
  /**
   * Get quota by name.
   * @param location The location of quota in ARM Normalized format like eastus, southeastasia etc.
   * @param name The quota name.
   * @param options The options parameters.
   */
  get(
    location: string,
    name: QuotaNames,
    options?: QuotasGetOptionalParams
  ): Promise<QuotasGetResponse>;
}