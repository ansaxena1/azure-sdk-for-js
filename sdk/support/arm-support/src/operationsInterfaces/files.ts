/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FileDetails,
  FilesListOptionalParams,
  FilesGetOptionalParams,
  FilesGetResponse,
  FilesCreateOptionalParams,
  FilesCreateResponse,
  UploadFile,
  FilesUploadOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Files. */
export interface Files {
  /**
   * Lists all the Files information under a workspace for an Azure subscription.
   * @param fileWorkspaceName File Workspace Name
   * @param options The options parameters.
   */
  list(
    fileWorkspaceName: string,
    options?: FilesListOptionalParams
  ): PagedAsyncIterableIterator<FileDetails>;
  /**
   * Returns details of a specific file in a work space.
   * @param fileWorkspaceName File Workspace Name
   * @param fileName File Name
   * @param options The options parameters.
   */
  get(
    fileWorkspaceName: string,
    fileName: string,
    options?: FilesGetOptionalParams
  ): Promise<FilesGetResponse>;
  /**
   * Creates a new file under a workspace for the specified subscription.
   * @param fileWorkspaceName File workspace name.
   * @param fileName File name.
   * @param createFileParameters Create file object
   * @param options The options parameters.
   */
  create(
    fileWorkspaceName: string,
    fileName: string,
    createFileParameters: FileDetails,
    options?: FilesCreateOptionalParams
  ): Promise<FilesCreateResponse>;
  /**
   * This API allows you to upload content to a file
   * @param fileWorkspaceName File WorkspaceName
   * @param fileName File Name
   * @param uploadFile UploadFile object
   * @param options The options parameters.
   */
  upload(
    fileWorkspaceName: string,
    fileName: string,
    uploadFile: UploadFile,
    options?: FilesUploadOptionalParams
  ): Promise<void>;
}