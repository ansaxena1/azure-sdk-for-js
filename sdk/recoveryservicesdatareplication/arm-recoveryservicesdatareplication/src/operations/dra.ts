/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Dra } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSiteRecoveryManagementServiceAPI } from "../azureSiteRecoveryManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DraModel,
  DraListNextOptionalParams,
  DraListOptionalParams,
  DraListResponse,
  DraGetOptionalParams,
  DraGetResponse,
  DraCreateOptionalParams,
  DraCreateResponse,
  DraDeleteOptionalParams,
  DraDeleteResponse,
  DraListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Dra operations. */
export class DraImpl implements Dra {
  private readonly client: AzureSiteRecoveryManagementServiceAPI;

  /**
   * Initialize a new instance of the class Dra class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSiteRecoveryManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Gets the list of fabric agents in the given fabric.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    fabricName: string,
    options?: DraListOptionalParams
  ): PagedAsyncIterableIterator<DraModel> {
    const iter = this.listPagingAll(resourceGroupName, fabricName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          fabricName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    fabricName: string,
    options?: DraListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DraModel[]> {
    let result: DraListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, fabricName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        fabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    fabricName: string,
    options?: DraListOptionalParams
  ): AsyncIterableIterator<DraModel> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      fabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the details of the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraGetOptionalParams
  ): Promise<DraGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fabricName, fabricAgentName, options },
      getOperationSpec
    );
  }

  /**
   * Creates the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraCreateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<DraCreateResponse>, DraCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DraCreateResponse> => {
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
      args: { resourceGroupName, fabricName, fabricAgentName, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      DraCreateResponse,
      OperationState<DraCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraCreateOptionalParams
  ): Promise<DraCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      fabricName,
      fabricAgentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraDeleteOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<DraDeleteResponse>, DraDeleteResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DraDeleteResponse> => {
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
      args: { resourceGroupName, fabricName, fabricAgentName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      DraDeleteResponse,
      OperationState<DraDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraDeleteOptionalParams
  ): Promise<DraDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      fabricName,
      fabricAgentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of fabric agents in the given fabric.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    fabricName: string,
    options?: DraListOptionalParams
  ): Promise<DraListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fabricName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    fabricName: string,
    nextLink: string,
    options?: DraListNextOptionalParams
  ): Promise<DraListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fabricName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DraModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName,
    Parameters.fabricAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DraModel
    },
    201: {
      bodyMapper: Mappers.DraModel
    },
    202: {
      bodyMapper: Mappers.DraModel
    },
    204: {
      bodyMapper: Mappers.DraModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName,
    Parameters.fabricAgentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.DraDeleteHeaders
    },
    201: {
      headersMapper: Mappers.DraDeleteHeaders
    },
    202: {
      headersMapper: Mappers.DraDeleteHeaders
    },
    204: {
      headersMapper: Mappers.DraDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName,
    Parameters.fabricAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DraModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DraModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};