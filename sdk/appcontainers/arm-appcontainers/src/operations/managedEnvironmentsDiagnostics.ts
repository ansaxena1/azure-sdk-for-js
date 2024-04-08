/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagedEnvironmentsDiagnostics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  ManagedEnvironmentsDiagnosticsGetRootOptionalParams,
  ManagedEnvironmentsDiagnosticsGetRootResponse,
} from "../models";

/** Class containing ManagedEnvironmentsDiagnostics operations. */
export class ManagedEnvironmentsDiagnosticsImpl
  implements ManagedEnvironmentsDiagnostics
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ManagedEnvironmentsDiagnostics class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the properties of a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param options The options parameters.
   */
  getRoot(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsDiagnosticsGetRootOptionalParams,
  ): Promise<ManagedEnvironmentsDiagnosticsGetRootResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      getRootOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getRootOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/detectorProperties/rootApi/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironment,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
