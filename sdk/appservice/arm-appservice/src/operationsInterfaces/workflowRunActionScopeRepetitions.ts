/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkflowRunActionRepetitionDefinition,
  WorkflowRunActionScopeRepetitionsListOptionalParams,
  WorkflowRunActionScopeRepetitionsGetOptionalParams,
  WorkflowRunActionScopeRepetitionsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkflowRunActionScopeRepetitions. */
export interface WorkflowRunActionScopeRepetitions {
  /**
   * List the workflow run action scoped repetitions.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionScopeRepetitionsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkflowRunActionRepetitionDefinition>;
  /**
   * Get a workflow run action scoped repetition.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionScopeRepetitionsGetOptionalParams,
  ): Promise<WorkflowRunActionScopeRepetitionsGetResponse>;
}
