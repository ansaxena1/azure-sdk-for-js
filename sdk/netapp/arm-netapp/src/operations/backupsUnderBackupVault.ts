/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupsUnderBackupVault } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BackupRestoreFiles,
  BackupsUnderBackupVaultRestoreFilesOptionalParams,
  BackupsUnderBackupVaultRestoreFilesResponse
} from "../models";

/** Class containing BackupsUnderBackupVault operations. */
export class BackupsUnderBackupVaultImpl implements BackupsUnderBackupVault {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class BackupsUnderBackupVault class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * Restore the specified files from the specified backup to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param backupName The name of the backup
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginRestoreFiles(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    backupName: string,
    body: BackupRestoreFiles,
    options?: BackupsUnderBackupVaultRestoreFilesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BackupsUnderBackupVaultRestoreFilesResponse>,
      BackupsUnderBackupVaultRestoreFilesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BackupsUnderBackupVaultRestoreFilesResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        backupVaultName,
        backupName,
        body,
        options
      },
      spec: restoreFilesOperationSpec
    });
    const poller = await createHttpPoller<
      BackupsUnderBackupVaultRestoreFilesResponse,
      OperationState<BackupsUnderBackupVaultRestoreFilesResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Restore the specified files from the specified backup to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param backupName The name of the backup
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginRestoreFilesAndWait(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    backupName: string,
    body: BackupRestoreFiles,
    options?: BackupsUnderBackupVaultRestoreFilesOptionalParams
  ): Promise<BackupsUnderBackupVaultRestoreFilesResponse> {
    const poller = await this.beginRestoreFiles(
      resourceGroupName,
      accountName,
      backupVaultName,
      backupName,
      body,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const restoreFilesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}/restoreFiles",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.BackupsUnderBackupVaultRestoreFilesHeaders
    },
    201: {
      headersMapper: Mappers.BackupsUnderBackupVaultRestoreFilesHeaders
    },
    202: {
      headersMapper: Mappers.BackupsUnderBackupVaultRestoreFilesHeaders
    },
    204: {
      headersMapper: Mappers.BackupsUnderBackupVaultRestoreFilesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body36,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupVaultName,
    Parameters.backupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};