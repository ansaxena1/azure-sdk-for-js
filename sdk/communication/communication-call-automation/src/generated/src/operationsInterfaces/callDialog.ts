/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  StartDialogRequest,
  CallDialogStartDialogOptionalParams,
  CallDialogStartDialogResponse,
  CallDialogStopDialogOptionalParams,
  UpdateDialogRequest,
  CallDialogUpdateDialogOptionalParams,
} from "../models/index.js";

/** Interface representing a CallDialog. */
export interface CallDialog {
  /**
   * Start a dialog.
   * @param callConnectionId The call connection id
   * @param dialogId The dialog id
   * @param startDialogRequest The start dialog request
   * @param options The options parameters.
   */
  startDialog(
    callConnectionId: string,
    dialogId: string,
    startDialogRequest: StartDialogRequest,
    options?: CallDialogStartDialogOptionalParams,
  ): Promise<CallDialogStartDialogResponse>;
  /**
   * @param callConnectionId
   * @param dialogId
   * @param options The options parameters.
   */
  stopDialog(
    callConnectionId: string,
    dialogId: string,
    options?: CallDialogStopDialogOptionalParams,
  ): Promise<void>;
  /**
   * Update a dialog.
   * @param callConnectionId The call connection id
   * @param dialogId The dialog id
   * @param updateDialogRequest The update dialog request
   * @param options The options parameters.
   */
  updateDialog(
    callConnectionId: string,
    dialogId: string,
    updateDialogRequest: UpdateDialogRequest,
    options?: CallDialogUpdateDialogOptionalParams,
  ): Promise<void>;
}
