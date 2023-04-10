/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ResourceHealthMetadataOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  ResourceHealthMetadata,
  ResourceHealthMetadataListNextOptionalParams,
  ResourceHealthMetadataListOptionalParams,
  ResourceHealthMetadataListResponse,
  ResourceHealthMetadataListByResourceGroupNextOptionalParams,
  ResourceHealthMetadataListByResourceGroupOptionalParams,
  ResourceHealthMetadataListByResourceGroupResponse,
  ResourceHealthMetadataListBySiteNextOptionalParams,
  ResourceHealthMetadataListBySiteOptionalParams,
  ResourceHealthMetadataListBySiteResponse,
  ResourceHealthMetadataListBySiteSlotNextOptionalParams,
  ResourceHealthMetadataListBySiteSlotOptionalParams,
  ResourceHealthMetadataListBySiteSlotResponse,
  ResourceHealthMetadataGetBySiteOptionalParams,
  ResourceHealthMetadataGetBySiteResponse,
  ResourceHealthMetadataGetBySiteSlotOptionalParams,
  ResourceHealthMetadataGetBySiteSlotResponse,
  ResourceHealthMetadataListNextResponse,
  ResourceHealthMetadataListByResourceGroupNextResponse,
  ResourceHealthMetadataListBySiteNextResponse,
  ResourceHealthMetadataListBySiteSlotNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceHealthMetadataOperations operations. */
export class ResourceHealthMetadataOperationsImpl
  implements ResourceHealthMetadataOperations {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class ResourceHealthMetadataOperations class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourceHealthMetadataListOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadata> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourceHealthMetadataListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceHealthMetadata[]> {
    let result: ResourceHealthMetadataListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ResourceHealthMetadataListOptionalParams
  ): AsyncIterableIterator<ResourceHealthMetadata> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ResourceHealthMetadataListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadata> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ResourceHealthMetadataListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceHealthMetadata[]> {
    let result: ResourceHealthMetadataListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ResourceHealthMetadataListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ResourceHealthMetadata> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The options parameters.
   */
  public listBySite(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataListBySiteOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadata> {
    const iter = this.listBySitePagingAll(resourceGroupName, name, options);
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
        return this.listBySitePagingPage(
          resourceGroupName,
          name,
          options,
          settings
        );
      }
    };
  }

  private async *listBySitePagingPage(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataListBySiteOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceHealthMetadata[]> {
    let result: ResourceHealthMetadataListBySiteResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySite(resourceGroupName, name, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySiteNext(
        resourceGroupName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySitePagingAll(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataListBySiteOptionalParams
  ): AsyncIterableIterator<ResourceHealthMetadata> {
    for await (const page of this.listBySitePagingPage(
      resourceGroupName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  public listBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataListBySiteSlotOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadata> {
    const iter = this.listBySiteSlotPagingAll(
      resourceGroupName,
      name,
      slot,
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
        return this.listBySiteSlotPagingPage(
          resourceGroupName,
          name,
          slot,
          options,
          settings
        );
      }
    };
  }

  private async *listBySiteSlotPagingPage(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataListBySiteSlotOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceHealthMetadata[]> {
    let result: ResourceHealthMetadataListBySiteSlotResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySiteSlot(
        resourceGroupName,
        name,
        slot,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySiteSlotNext(
        resourceGroupName,
        name,
        slot,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySiteSlotPagingAll(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataListBySiteSlotOptionalParams
  ): AsyncIterableIterator<ResourceHealthMetadata> {
    for await (const page of this.listBySiteSlotPagingPage(
      resourceGroupName,
      name,
      slot,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourceHealthMetadataListOptionalParams
  ): Promise<ResourceHealthMetadataListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ResourceHealthMetadataListByResourceGroupOptionalParams
  ): Promise<ResourceHealthMetadataListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The options parameters.
   */
  private _listBySite(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataListBySiteOptionalParams
  ): Promise<ResourceHealthMetadataListBySiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      listBySiteOperationSpec
    );
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param options The options parameters.
   */
  getBySite(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataGetBySiteOptionalParams
  ): Promise<ResourceHealthMetadataGetBySiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getBySiteOperationSpec
    );
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  private _listBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataListBySiteSlotOptionalParams
  ): Promise<ResourceHealthMetadataListBySiteSlotResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, slot, options },
      listBySiteSlotOperationSpec
    );
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  getBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataGetBySiteSlotOptionalParams
  ): Promise<ResourceHealthMetadataGetBySiteSlotResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, slot, options },
      getBySiteSlotOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourceHealthMetadataListNextOptionalParams
  ): Promise<ResourceHealthMetadataListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourceHealthMetadataListByResourceGroupNextOptionalParams
  ): Promise<ResourceHealthMetadataListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySiteNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param nextLink The nextLink from the previous successful call to the ListBySite method.
   * @param options The options parameters.
   */
  private _listBySiteNext(
    resourceGroupName: string,
    name: string,
    nextLink: string,
    options?: ResourceHealthMetadataListBySiteNextOptionalParams
  ): Promise<ResourceHealthMetadataListBySiteNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, nextLink, options },
      listBySiteNextOperationSpec
    );
  }

  /**
   * ListBySiteSlotNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param nextLink The nextLink from the previous successful call to the ListBySiteSlot method.
   * @param options The options parameters.
   */
  private _listBySiteSlotNext(
    resourceGroupName: string,
    name: string,
    slot: string,
    nextLink: string,
    options?: ResourceHealthMetadataListBySiteSlotNextOptionalParams
  ): Promise<ResourceHealthMetadataListBySiteSlotNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, slot, nextLink, options },
      listBySiteSlotNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBySiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteSlotOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBySiteSlotOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteSlotNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
