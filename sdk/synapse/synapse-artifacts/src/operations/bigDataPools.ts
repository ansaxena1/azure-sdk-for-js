/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { BigDataPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import {
  BigDataPoolsListOptionalParams,
  BigDataPoolsListResponse,
  BigDataPoolsGetOptionalParams,
  BigDataPoolsGetResponse,
} from "../models";

/** Class containing BigDataPools operations. */
export class BigDataPoolsImpl implements BigDataPools {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class BigDataPools class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * List Big Data Pools
   * @param options The options parameters.
   */
  async list(
    options?: BigDataPoolsListOptionalParams,
  ): Promise<BigDataPoolsListResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.list",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          listOperationSpec,
        ) as Promise<BigDataPoolsListResponse>;
      },
    );
  }

  /**
   * Get Big Data Pool
   * @param bigDataPoolName The Big Data Pool name
   * @param options The options parameters.
   */
  async get(
    bigDataPoolName: string,
    options?: BigDataPoolsGetOptionalParams,
  ): Promise<BigDataPoolsGetResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.get",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { bigDataPoolName, options },
          getOperationSpec,
        ) as Promise<BigDataPoolsGetResponse>;
      },
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/bigDataPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/bigDataPools/{bigDataPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.bigDataPoolName],
  headerParameters: [Parameters.accept],
  serializer,
};
