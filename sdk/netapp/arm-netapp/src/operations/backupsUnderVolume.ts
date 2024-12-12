/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupsUnderVolume } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BackupsMigrationRequest,
  BackupsUnderVolumeMigrateBackupsOptionalParams,
  BackupsUnderVolumeMigrateBackupsResponse,
} from "../models";

/** Class containing BackupsUnderVolume operations. */
export class BackupsUnderVolumeImpl implements BackupsUnderVolume {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class BackupsUnderVolume class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * Migrate the backups under volume to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Migrate backups under volume payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginMigrateBackups(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderVolumeMigrateBackupsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupsUnderVolumeMigrateBackupsResponse>,
      BackupsUnderVolumeMigrateBackupsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BackupsUnderVolumeMigrateBackupsResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        body,
        options,
      },
      spec: migrateBackupsOperationSpec,
    });
    const poller = await createHttpPoller<
      BackupsUnderVolumeMigrateBackupsResponse,
      OperationState<BackupsUnderVolumeMigrateBackupsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Migrate the backups under volume to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Migrate backups under volume payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginMigrateBackupsAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderVolumeMigrateBackupsOptionalParams,
  ): Promise<BackupsUnderVolumeMigrateBackupsResponse> {
    const poller = await this.beginMigrateBackups(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const migrateBackupsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/migrateBackups",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.BackupsUnderVolumeMigrateBackupsHeaders,
    },
    201: {
      headersMapper: Mappers.BackupsUnderVolumeMigrateBackupsHeaders,
    },
    202: {
      headersMapper: Mappers.BackupsUnderVolumeMigrateBackupsHeaders,
    },
    204: {
      headersMapper: Mappers.BackupsUnderVolumeMigrateBackupsHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body39,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
