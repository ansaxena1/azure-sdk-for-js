/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckScopedNameAvailabilityRequest,
  CheckScopedNameAvailabilityExecuteOptionalParams,
  CheckScopedNameAvailabilityExecuteResponse,
} from "../models";

/** Interface representing a CheckScopedNameAvailability. */
export interface CheckScopedNameAvailability {
  /**
   * Check the availability of name for resource
   * @param nameAvailabilityRequest The required parameters for checking if resource name is available.
   * @param options The options parameters.
   */
  execute(
    nameAvailabilityRequest: CheckScopedNameAvailabilityRequest,
    options?: CheckScopedNameAvailabilityExecuteOptionalParams,
  ): Promise<CheckScopedNameAvailabilityExecuteResponse>;
}
