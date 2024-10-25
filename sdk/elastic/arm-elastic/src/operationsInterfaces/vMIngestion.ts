/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VMIngestionDetailsOptionalParams,
  VMIngestionDetailsOperationResponse,
} from "../models";

/** Interface representing a VMIngestion. */
export interface VMIngestion {
  /**
   * List the vm ingestion details that will be monitored by the Elastic monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  details(
    resourceGroupName: string,
    monitorName: string,
    options?: VMIngestionDetailsOptionalParams,
  ): Promise<VMIngestionDetailsOperationResponse>;
}
