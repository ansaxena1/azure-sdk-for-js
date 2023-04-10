/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IPv6FirewallRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  IPv6FirewallRule,
  IPv6FirewallRulesListByServerNextOptionalParams,
  IPv6FirewallRulesListByServerOptionalParams,
  IPv6FirewallRulesListByServerResponse,
  IPv6FirewallRulesGetOptionalParams,
  IPv6FirewallRulesGetResponse,
  IPv6FirewallRulesCreateOrUpdateOptionalParams,
  IPv6FirewallRulesCreateOrUpdateResponse,
  IPv6FirewallRulesDeleteOptionalParams,
  IPv6FirewallRulesListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IPv6FirewallRules operations. */
export class IPv6FirewallRulesImpl implements IPv6FirewallRules {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class IPv6FirewallRules class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of IPv6 firewall rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: IPv6FirewallRulesListByServerOptionalParams
  ): PagedAsyncIterableIterator<IPv6FirewallRule> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: IPv6FirewallRulesListByServerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IPv6FirewallRule[]> {
    let result: IPv6FirewallRulesListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: IPv6FirewallRulesListByServerOptionalParams
  ): AsyncIterableIterator<IPv6FirewallRule> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of IPv6 firewall rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: IPv6FirewallRulesListByServerOptionalParams
  ): Promise<IPv6FirewallRulesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Gets an IPv6 firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    options?: IPv6FirewallRulesGetOptionalParams
  ): Promise<IPv6FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, firewallRuleName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an IPv6 firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param parameters The required parameters for creating or updating an IPv6 firewall rule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    parameters: IPv6FirewallRule,
    options?: IPv6FirewallRulesCreateOrUpdateOptionalParams
  ): Promise<IPv6FirewallRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, firewallRuleName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an IPv6 firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    options?: IPv6FirewallRulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, firewallRuleName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: IPv6FirewallRulesListByServerNextOptionalParams
  ): Promise<IPv6FirewallRulesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/ipv6FirewallRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPv6FirewallRuleListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/ipv6FirewallRules/{firewallRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPv6FirewallRule
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/ipv6FirewallRules/{firewallRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IPv6FirewallRule
    },
    201: {
      bodyMapper: Mappers.IPv6FirewallRule
    },
    default: {}
  },
  requestBody: Parameters.parameters71,
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/ipv6FirewallRules/{firewallRuleName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPv6FirewallRuleListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
