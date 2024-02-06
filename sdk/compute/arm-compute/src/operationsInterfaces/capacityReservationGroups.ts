/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CapacityReservationGroup,
  CapacityReservationGroupsListByResourceGroupOptionalParams,
  CapacityReservationGroupsListBySubscriptionOptionalParams,
  CapacityReservationGroupsCreateOrUpdateOptionalParams,
  CapacityReservationGroupsCreateOrUpdateResponse,
  CapacityReservationGroupUpdate,
  CapacityReservationGroupsUpdateOptionalParams,
  CapacityReservationGroupsUpdateResponse,
  CapacityReservationGroupsDeleteOptionalParams,
  CapacityReservationGroupsGetOptionalParams,
  CapacityReservationGroupsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CapacityReservationGroups. */
export interface CapacityReservationGroups {
  /**
   * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink
   * property in the response to get the next page of capacity reservation groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CapacityReservationGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<CapacityReservationGroup>;
  /**
   * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the
   * response to get the next page of capacity reservation groups.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: CapacityReservationGroupsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<CapacityReservationGroup>;
  /**
   * The operation to create or update a capacity reservation group. When updating a capacity reservation
   * group, only tags and sharing profile may be modified. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Create capacity reservation Group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    parameters: CapacityReservationGroup,
    options?: CapacityReservationGroupsCreateOrUpdateOptionalParams
  ): Promise<CapacityReservationGroupsCreateOrUpdateResponse>;
  /**
   * The operation to update a capacity reservation group. When updating a capacity reservation group,
   * only tags and sharing profile may be modified.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Update capacity reservation Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    parameters: CapacityReservationGroupUpdate,
    options?: CapacityReservationGroupsUpdateOptionalParams
  ): Promise<CapacityReservationGroupsUpdateResponse>;
  /**
   * The operation to delete a capacity reservation group. This operation is allowed only if all the
   * associated resources are disassociated from the reservation group and all capacity reservations
   * under the reservation group have also been deleted. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation that retrieves information about a capacity reservation group.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationGroupsGetOptionalParams
  ): Promise<CapacityReservationGroupsGetResponse>;
}
