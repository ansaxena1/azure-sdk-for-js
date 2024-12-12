/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Reference to another ARM resource. */
export interface SubResource {
  /** Resource ID. */
  id: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** An error message */
export interface CloudError {
  /** The error message body */
  error?: CloudErrorBody;
}

/** The body of an error message */
export interface CloudErrorBody {
  /** The error code */
  code?: string;
  /** A description of what caused the error */
  message?: string;
  /** The target resource of the error message */
  target?: string;
  /** Extra error information */
  details?: CloudErrorBody[];
}

/** Describes a DNS resolver for PATCH operation. */
export interface DnsResolverPatch {
  /** Tags for DNS Resolver. */
  tags?: { [propertyName: string]: string };
}

/** The response to an enumeration operation on DNS resolvers. */
export interface DnsResolverListResult {
  /** Enumeration of the DNS resolvers. */
  value?: DnsResolver[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** IP configuration. */
export interface IpConfiguration {
  /** The reference to the subnet bound to the IP configuration. */
  subnet: SubResource;
  /** Private IP address of the IP configuration. */
  privateIpAddress?: string;
  /** Private IP address allocation method. */
  privateIpAllocationMethod?: IpAllocationMethod;
}

/** Describes an inbound endpoint for a DNS resolver for PATCH operation. */
export interface InboundEndpointPatch {
  /** Tags for inbound endpoint. */
  tags?: { [propertyName: string]: string };
}

/** The response to an enumeration operation on inbound endpoints for a DNS resolver. */
export interface InboundEndpointListResult {
  /** Enumeration of the inbound endpoints for a DNS resolver. */
  value?: InboundEndpoint[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Describes an outbound endpoint for a DNS resolver for PATCH operation. */
export interface OutboundEndpointPatch {
  /** Tags for outbound endpoint. */
  tags?: { [propertyName: string]: string };
}

/** The response to an enumeration operation on outbound endpoints for a DNS resolver. */
export interface OutboundEndpointListResult {
  /** Enumeration of the outbound endpoints for a DNS resolver. */
  value?: OutboundEndpoint[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Describes a DNS forwarding ruleset PATCH operation. */
export interface DnsForwardingRulesetPatch {
  /** The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. */
  dnsResolverOutboundEndpoints?: SubResource[];
  /** Tags for DNS Resolver. */
  tags?: { [propertyName: string]: string };
}

/** The response to an enumeration operation on DNS forwarding rulesets. */
export interface DnsForwardingRulesetListResult {
  /** Enumeration of the DNS forwarding rulesets. */
  value?: DnsForwardingRuleset[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Describes a server to forward the DNS queries to. */
export interface TargetDnsServer {
  /** DNS server IP address. */
  ipAddress: string;
  /** DNS server port. */
  port?: number;
}

/** Describes a forwarding rule for PATCH operation. */
export interface ForwardingRulePatch {
  /** DNS servers to forward the DNS query to. */
  targetDnsServers?: TargetDnsServer[];
  /** Metadata attached to the forwarding rule. */
  metadata?: { [propertyName: string]: string };
  /** The state of forwarding rule. */
  forwardingRuleState?: ForwardingRuleState;
}

/** The response to an enumeration operation on forwarding rules within a DNS forwarding ruleset. */
export interface ForwardingRuleListResult {
  /** Enumeration of the forwarding rules. */
  value?: ForwardingRule[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Describes a virtual network link for PATCH operation. */
export interface VirtualNetworkLinkPatch {
  /** Metadata attached to the virtual network link. */
  metadata?: { [propertyName: string]: string };
}

/** The response to an enumeration operation on virtual network links. */
export interface VirtualNetworkLinkListResult {
  /** Enumeration of the virtual network links. */
  value?: VirtualNetworkLink[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The response to an enumeration operation on sub-resources. */
export interface SubResourceListResult {
  /** Enumeration of the sub-resources. */
  value?: SubResource[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The response to an enumeration operation on Virtual Network DNS Forwarding Ruleset. */
export interface VirtualNetworkDnsForwardingRulesetListResult {
  /** Enumeration of the Virtual Network DNS Forwarding Ruleset. */
  value?: VirtualNetworkDnsForwardingRuleset[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Reference to DNS forwarding ruleset and associated virtual network link. */
export interface VirtualNetworkDnsForwardingRuleset {
  /** DNS Forwarding Ruleset Resource ID. */
  id?: string;
  /** The reference to the virtual network link. */
  virtualNetworkLink?: SubResource;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Describes a DNS resolver. */
export interface DnsResolver extends TrackedResource {
  /**
   * ETag of the DNS resolver.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The reference to the virtual network. This cannot be changed after creation. */
  virtualNetwork: SubResource;
  /**
   * The current status of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dnsResolverState?: DnsResolverState;
  /**
   * The current provisioning state of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The resourceGuid property of the DNS resolver resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGuid?: string;
}

/** Describes an inbound endpoint for a DNS resolver. */
export interface InboundEndpoint extends TrackedResource {
  /**
   * ETag of the inbound endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** IP configurations for the inbound endpoint. */
  ipConfigurations: IpConfiguration[];
  /**
   * The current provisioning state of the inbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The resourceGuid property of the inbound endpoint resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGuid?: string;
}

/** Describes an outbound endpoint for a DNS resolver. */
export interface OutboundEndpoint extends TrackedResource {
  /**
   * ETag of the outbound endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The reference to the subnet used for the outbound endpoint. */
  subnet: SubResource;
  /**
   * The current provisioning state of the outbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The resourceGuid property of the outbound endpoint resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGuid?: string;
}

/** Describes a DNS forwarding ruleset. */
export interface DnsForwardingRuleset extends TrackedResource {
  /**
   * ETag of the DNS forwarding ruleset.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. */
  dnsResolverOutboundEndpoints: SubResource[];
  /**
   * The current provisioning state of the DNS forwarding ruleset. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The resourceGuid for the DNS forwarding ruleset.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGuid?: string;
}

/** Describes a forwarding rule within a DNS forwarding ruleset. */
export interface ForwardingRule extends ProxyResource {
  /**
   * ETag of the forwarding rule.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The domain name for the forwarding rule. */
  domainName: string;
  /** DNS servers to forward the DNS query to. */
  targetDnsServers: TargetDnsServer[];
  /** Metadata attached to the forwarding rule. */
  metadata?: { [propertyName: string]: string };
  /** The state of forwarding rule. */
  forwardingRuleState?: ForwardingRuleState;
  /**
   * The current provisioning state of the forwarding rule. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Describes a virtual network link. */
export interface VirtualNetworkLink extends ProxyResource {
  /**
   * ETag of the virtual network link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The reference to the virtual network. This cannot be changed after creation. */
  virtualNetwork: SubResource;
  /** Metadata attached to the virtual network link. */
  metadata?: { [propertyName: string]: string };
  /**
   * The current provisioning state of the virtual network link. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Known values of {@link DnsResolverState} that the service accepts. */
export enum KnownDnsResolverState {
  /** Connected */
  Connected = "Connected",
  /** Disconnected */
  Disconnected = "Disconnected"
}

/**
 * Defines values for DnsResolverState. \
 * {@link KnownDnsResolverState} can be used interchangeably with DnsResolverState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Connected** \
 * **Disconnected**
 */
export type DnsResolverState = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link IpAllocationMethod} that the service accepts. */
export enum KnownIpAllocationMethod {
  /** Static */
  Static = "Static",
  /** Dynamic */
  Dynamic = "Dynamic"
}

/**
 * Defines values for IpAllocationMethod. \
 * {@link KnownIpAllocationMethod} can be used interchangeably with IpAllocationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Static** \
 * **Dynamic**
 */
export type IpAllocationMethod = string;

/** Known values of {@link ForwardingRuleState} that the service accepts. */
export enum KnownForwardingRuleState {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for ForwardingRuleState. \
 * {@link KnownForwardingRuleState} can be used interchangeably with ForwardingRuleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type ForwardingRuleState = string;

/** Optional parameters. */
export interface DnsResolversCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DnsResolversCreateOrUpdateResponse = DnsResolver;

/** Optional parameters. */
export interface DnsResolversUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DnsResolversUpdateResponse = DnsResolver;

/** Optional parameters. */
export interface DnsResolversDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DnsResolversGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DnsResolversGetResponse = DnsResolver;

/** Optional parameters. */
export interface DnsResolversListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type DnsResolversListByResourceGroupResponse = DnsResolverListResult;

/** Optional parameters. */
export interface DnsResolversListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type DnsResolversListResponse = DnsResolverListResult;

/** Optional parameters. */
export interface DnsResolversListByVirtualNetworkOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the listByVirtualNetwork operation. */
export type DnsResolversListByVirtualNetworkResponse = SubResourceListResult;

/** Optional parameters. */
export interface DnsResolversListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DnsResolversListByResourceGroupNextResponse = DnsResolverListResult;

/** Optional parameters. */
export interface DnsResolversListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DnsResolversListNextResponse = DnsResolverListResult;

/** Optional parameters. */
export interface DnsResolversListByVirtualNetworkNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVirtualNetworkNext operation. */
export type DnsResolversListByVirtualNetworkNextResponse = SubResourceListResult;

/** Optional parameters. */
export interface InboundEndpointsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type InboundEndpointsCreateOrUpdateResponse = InboundEndpoint;

/** Optional parameters. */
export interface InboundEndpointsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type InboundEndpointsUpdateResponse = InboundEndpoint;

/** Optional parameters. */
export interface InboundEndpointsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface InboundEndpointsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type InboundEndpointsGetResponse = InboundEndpoint;

/** Optional parameters. */
export interface InboundEndpointsListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type InboundEndpointsListResponse = InboundEndpointListResult;

/** Optional parameters. */
export interface InboundEndpointsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type InboundEndpointsListNextResponse = InboundEndpointListResult;

/** Optional parameters. */
export interface OutboundEndpointsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type OutboundEndpointsCreateOrUpdateResponse = OutboundEndpoint;

/** Optional parameters. */
export interface OutboundEndpointsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type OutboundEndpointsUpdateResponse = OutboundEndpoint;

/** Optional parameters. */
export interface OutboundEndpointsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface OutboundEndpointsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OutboundEndpointsGetResponse = OutboundEndpoint;

/** Optional parameters. */
export interface OutboundEndpointsListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type OutboundEndpointsListResponse = OutboundEndpointListResult;

/** Optional parameters. */
export interface OutboundEndpointsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OutboundEndpointsListNextResponse = OutboundEndpointListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DnsForwardingRulesetsCreateOrUpdateResponse = DnsForwardingRuleset;

/** Optional parameters. */
export interface DnsForwardingRulesetsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DnsForwardingRulesetsUpdateResponse = DnsForwardingRuleset;

/** Optional parameters. */
export interface DnsForwardingRulesetsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DnsForwardingRulesetsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DnsForwardingRulesetsGetResponse = DnsForwardingRuleset;

/** Optional parameters. */
export interface DnsForwardingRulesetsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type DnsForwardingRulesetsListByResourceGroupResponse = DnsForwardingRulesetListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type DnsForwardingRulesetsListResponse = DnsForwardingRulesetListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsListByVirtualNetworkOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the listByVirtualNetwork operation. */
export type DnsForwardingRulesetsListByVirtualNetworkResponse = VirtualNetworkDnsForwardingRulesetListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DnsForwardingRulesetsListByResourceGroupNextResponse = DnsForwardingRulesetListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DnsForwardingRulesetsListNextResponse = DnsForwardingRulesetListResult;

/** Optional parameters. */
export interface DnsForwardingRulesetsListByVirtualNetworkNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVirtualNetworkNext operation. */
export type DnsForwardingRulesetsListByVirtualNetworkNextResponse = VirtualNetworkDnsForwardingRulesetListResult;

/** Optional parameters. */
export interface ForwardingRulesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ForwardingRulesCreateOrUpdateResponse = ForwardingRule;

/** Optional parameters. */
export interface ForwardingRulesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the update operation. */
export type ForwardingRulesUpdateResponse = ForwardingRule;

/** Optional parameters. */
export interface ForwardingRulesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
}

/** Optional parameters. */
export interface ForwardingRulesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ForwardingRulesGetResponse = ForwardingRule;

/** Optional parameters. */
export interface ForwardingRulesListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type ForwardingRulesListResponse = ForwardingRuleListResult;

/** Optional parameters. */
export interface ForwardingRulesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ForwardingRulesListNextResponse = ForwardingRuleListResult;

/** Optional parameters. */
export interface VirtualNetworkLinksCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type VirtualNetworkLinksCreateOrUpdateResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type VirtualNetworkLinksUpdateResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface VirtualNetworkLinksGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VirtualNetworkLinksGetResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of results to return. If not specified, returns up to 100 results. */
  top?: number;
}

/** Contains response data for the list operation. */
export type VirtualNetworkLinksListResponse = VirtualNetworkLinkListResult;

/** Optional parameters. */
export interface VirtualNetworkLinksListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type VirtualNetworkLinksListNextResponse = VirtualNetworkLinkListResult;

/** Optional parameters. */
export interface DnsResolverManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
