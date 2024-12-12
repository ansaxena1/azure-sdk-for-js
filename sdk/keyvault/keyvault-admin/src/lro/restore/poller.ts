// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyVaultAdminPoller, KeyVaultAdminPollerOptions } from "../keyVaultAdminPoller.js";
import {
  KeyVaultRestoreOperationState,
  KeyVaultRestorePollOperation,
  KeyVaultRestorePollOperationState,
} from "./operation.js";
import { KeyVaultRestoreResult } from "../../backupClientModels.js";

export interface KeyVaultRestorePollerOptions extends KeyVaultAdminPollerOptions {
  folderUri: string;
  sasToken?: string;
  folderName: string;
}

/**
 * Class that creates a poller that waits until a Key Vault ends up being restored.
 */
export class KeyVaultRestorePoller extends KeyVaultAdminPoller<
  KeyVaultRestoreOperationState,
  KeyVaultRestoreResult
> {
  constructor(options: KeyVaultRestorePollerOptions) {
    const {
      client,
      vaultUrl,
      folderUri,
      sasToken,
      folderName,
      requestOptions,
      intervalInMs = 2000,
      resumeFrom,
    } = options;

    let state: KeyVaultRestorePollOperationState | undefined;

    if (resumeFrom) {
      state = JSON.parse(resumeFrom).state;
    }

    const operation = new KeyVaultRestorePollOperation(
      {
        ...state,
        folderUri,
        sasToken,
        folderName,
      },
      vaultUrl,
      client,
      requestOptions,
    );

    super(operation);

    this.intervalInMs = intervalInMs;
  }
}
