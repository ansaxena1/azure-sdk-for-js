/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkServiceDesignGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridNetworkManagementClient } from "../hybridNetworkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkServiceDesignGroup,
  NetworkServiceDesignGroupsListByPublisherNextOptionalParams,
  NetworkServiceDesignGroupsListByPublisherOptionalParams,
  NetworkServiceDesignGroupsListByPublisherResponse,
  NetworkServiceDesignGroupsDeleteOptionalParams,
  NetworkServiceDesignGroupsDeleteResponse,
  NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  NetworkServiceDesignGroupsCreateOrUpdateResponse,
  NetworkServiceDesignGroupsGetOptionalParams,
  NetworkServiceDesignGroupsGetResponse,
  TagsObject,
  NetworkServiceDesignGroupsUpdateOptionalParams,
  NetworkServiceDesignGroupsUpdateResponse,
  NetworkServiceDesignGroupsListByPublisherNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkServiceDesignGroups operations. */
export class NetworkServiceDesignGroupsImpl
  implements NetworkServiceDesignGroups {
  private readonly client: HybridNetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkServiceDesignGroups class.
   * @param client Reference to the service client
   */
  constructor(client: HybridNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets information of the network service design groups under a publisher.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param options The options parameters.
   */
  public listByPublisher(
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkServiceDesignGroupsListByPublisherOptionalParams
  ): PagedAsyncIterableIterator<NetworkServiceDesignGroup> {
    const iter = this.listByPublisherPagingAll(
      resourceGroupName,
      publisherName,
      options
    );
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
        return this.listByPublisherPagingPage(
          resourceGroupName,
          publisherName,
          options,
          settings
        );
      }
    };
  }

  private async *listByPublisherPagingPage(
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkServiceDesignGroupsListByPublisherOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkServiceDesignGroup[]> {
    let result: NetworkServiceDesignGroupsListByPublisherResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByPublisher(
        resourceGroupName,
        publisherName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByPublisherNext(
        resourceGroupName,
        publisherName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByPublisherPagingAll(
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkServiceDesignGroupsListByPublisherOptionalParams
  ): AsyncIterableIterator<NetworkServiceDesignGroup> {
    for await (const page of this.listByPublisherPagingPage(
      resourceGroupName,
      publisherName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets information of the network service design groups under a publisher.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param options The options parameters.
   */
  private _listByPublisher(
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkServiceDesignGroupsListByPublisherOptionalParams
  ): Promise<NetworkServiceDesignGroupsListByPublisherResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, publisherName, options },
      listByPublisherOperationSpec
    );
  }

  /**
   * Deletes a specified network service design group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignGroupsDeleteResponse>,
      NetworkServiceDesignGroupsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkServiceDesignGroupsDeleteResponse> => {
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
        publisherName,
        networkServiceDesignGroupName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkServiceDesignGroupsDeleteResponse,
      OperationState<NetworkServiceDesignGroupsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a specified network service design group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsDeleteOptionalParams
  ): Promise<NetworkServiceDesignGroupsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates or updates a network service design group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param parameters Parameters supplied to the create or update publisher network service design group
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: NetworkServiceDesignGroup,
    options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignGroupsCreateOrUpdateResponse>,
      NetworkServiceDesignGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkServiceDesignGroupsCreateOrUpdateResponse> => {
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
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkServiceDesignGroupsCreateOrUpdateResponse,
      OperationState<NetworkServiceDesignGroupsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a network service design group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param parameters Parameters supplied to the create or update publisher network service design group
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: NetworkServiceDesignGroup,
    options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams
  ): Promise<NetworkServiceDesignGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified networkServiceDesign group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsGetOptionalParams
  ): Promise<NetworkServiceDesignGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Updates a network service design groups resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param parameters Parameters supplied to the create or update publisher network service design group
   *                   operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: TagsObject,
    options?: NetworkServiceDesignGroupsUpdateOptionalParams
  ): Promise<NetworkServiceDesignGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * ListByPublisherNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param nextLink The nextLink from the previous successful call to the ListByPublisher method.
   * @param options The options parameters.
   */
  private _listByPublisherNext(
    resourceGroupName: string,
    publisherName: string,
    nextLink: string,
    options?: NetworkServiceDesignGroupsListByPublisherNextOptionalParams
  ): Promise<NetworkServiceDesignGroupsListByPublisherNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, publisherName, nextLink, options },
      listByPublisherNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByPublisherOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.NetworkServiceDesignGroupsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.NetworkServiceDesignGroupsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.NetworkServiceDesignGroupsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.NetworkServiceDesignGroupsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    201: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    202: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    204: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByPublisherNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};