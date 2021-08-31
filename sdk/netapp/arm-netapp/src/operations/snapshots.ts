/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/snapshotsMappers";
import * as Parameters from "../models/parameters";
import { AzureNetAppFilesManagementClientContext } from "../azureNetAppFilesManagementClientContext";

/** Class representing a Snapshots. */
export class Snapshots {
  private readonly client: AzureNetAppFilesManagementClientContext;

  /**
   * Create a Snapshots.
   * @param {AzureNetAppFilesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureNetAppFilesManagementClientContext) {
    this.client = client;
  }

  /**
   * List all snapshots associated with the volume
   * @summary Describe all snapshots
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListResponse>
   */
  list(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, callback: msRest.ServiceCallback<Models.SnapshotsList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotsList>): void;
  list(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotsList>, callback?: msRest.ServiceCallback<Models.SnapshotsList>): Promise<Models.SnapshotsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SnapshotsListResponse>;
  }

  /**
   * Get details of the specified snapshot
   * @summary Describe a snapshot
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  get(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Snapshot>, callback?: msRest.ServiceCallback<Models.Snapshot>): Promise<Models.SnapshotsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SnapshotsGetResponse>;
  }

  /**
   * Create the specified snapshot within the given volume
   * @summary Create a snapshot
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param location Resource location
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, location: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,poolName,volumeName,snapshotName,location,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsCreateResponse>;
  }

  /**
   * Patch a snapshot
   * @summary Update a snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsUpdateResponse>
   */
  update(body: any, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsUpdateResponse> {
    return this.beginUpdate(body,resourceGroupName,accountName,poolName,volumeName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsUpdateResponse>;
  }

  /**
   * Delete snapshot
   * @summary Delete a snapshot
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,poolName,volumeName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create the specified snapshot within the given volume
   * @summary Create a snapshot
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param location Resource location
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, location: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        location,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Patch a snapshot
   * @summary Update a snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(body: any, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete snapshot
   * @summary Delete a snapshot
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      location: "location"
    },
    mapper: {
      ...Mappers.Snapshot,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Snapshot
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Object"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
