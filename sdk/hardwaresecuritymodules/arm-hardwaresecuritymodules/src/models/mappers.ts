/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CloudHsmProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmProperties",
    modelProperties: {
      fqdn: {
        serializedName: "fqdn",
        type: {
          name: "String",
        },
      },
      state: {
        serializedName: "state",
        type: {
          name: "String",
        },
      },
      stateMessage: {
        serializedName: "stateMessage",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const ManagedServiceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedServiceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" },
          },
        },
      },
    },
  },
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
    },
  },
};

export const CloudHsmClusterSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClusterSku",
    modelProperties: {
      family: {
        serializedName: "family",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Standard_B1", "Standard B10"],
        },
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const CloudHsmClusterPatchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClusterPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
    },
  },
};

export const CloudHsmClusterListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClusterListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudHsmCluster",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BackupRestoreRequestBaseProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupRestoreRequestBaseProperties",
    modelProperties: {
      azureStorageBlobContainerUri: {
        serializedName: "azureStorageBlobContainerUri",
        required: true,
        type: {
          name: "String",
        },
      },
      token: {
        serializedName: "token",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BackupResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupResult",
    modelProperties: {
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      statusDetails: {
        serializedName: "properties.statusDetails",
        type: {
          name: "String",
        },
      },
      error: {
        serializedName: "properties.error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
      startTime: {
        serializedName: "properties.startTime",
        readOnly: true,
        type: {
          name: "DateTime",
        },
      },
      endTime: {
        serializedName: "properties.endTime",
        readOnly: true,
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      jobId: {
        serializedName: "properties.jobId",
        type: {
          name: "String",
        },
      },
      azureStorageBlobContainerUri: {
        serializedName: "properties.azureStorageBlobContainerUri",
        type: {
          name: "String",
        },
      },
      backupId: {
        serializedName: "properties.backupId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BackupRestoreBaseResultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupRestoreBaseResultProperties",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      statusDetails: {
        serializedName: "statusDetails",
        type: {
          name: "String",
        },
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime",
        },
      },
      endTime: {
        serializedName: "endTime",
        readOnly: true,
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      jobId: {
        serializedName: "jobId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RestoreResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestoreResult",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "BackupRestoreBaseResultProperties",
        },
      },
    },
  },
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const NetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "ApiEntityReference",
        },
      },
      networkInterfaces: {
        serializedName: "networkInterfaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetworkInterface",
            },
          },
        },
      },
    },
  },
};

export const ApiEntityReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiEntityReference",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const NetworkInterface: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkInterface",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      privateIpAddress: {
        serializedName: "privateIpAddress",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DedicatedHsmError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel",
        },
      },
    },
  },
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel",
        },
      },
    },
  },
};

export const DedicatedHsmPatchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const DedicatedHsmListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHsm",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OutboundEnvironmentEndpointCollection: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "OutboundEnvironmentEndpointCollection",
      modelProperties: {
        value: {
          serializedName: "value",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "OutboundEnvironmentEndpoint",
              },
            },
          },
        },
        nextLink: {
          serializedName: "nextLink",
          readOnly: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const OutboundEnvironmentEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEnvironmentEndpoint",
    modelProperties: {
      category: {
        serializedName: "category",
        type: {
          name: "String",
        },
      },
      endpoints: {
        serializedName: "endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDependency",
            },
          },
        },
      },
    },
  },
};

export const EndpointDependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDependency",
    modelProperties: {
      domainName: {
        serializedName: "domainName",
        type: {
          name: "String",
        },
      },
      endpointDetails: {
        serializedName: "endpointDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDetail",
            },
          },
        },
      },
    },
  },
};

export const EndpointDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDetail",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String",
        },
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number",
        },
      },
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
    },
  },
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const BackupRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupRequestProperties",
    modelProperties: {
      ...BackupRestoreRequestBaseProperties.type.modelProperties,
    },
  },
};

export const RestoreRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestoreRequestProperties",
    modelProperties: {
      ...BackupRestoreRequestBaseProperties.type.modelProperties,
      backupId: {
        serializedName: "backupId",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BackupResultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupResultProperties",
    modelProperties: {
      ...BackupRestoreBaseResultProperties.type.modelProperties,
      azureStorageBlobContainerUri: {
        serializedName: "azureStorageBlobContainerUri",
        type: {
          name: "String",
        },
      },
      backupId: {
        serializedName: "backupId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String",
        },
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint",
        },
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      groupIds: {
        serializedName: "properties.groupIds",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const CloudHsmClusterResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClusterResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CloudHsmClusterSku",
        },
      },
    },
  },
};

export const DedicatedHsm: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsm",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku",
        },
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile",
        },
      },
      managementNetworkProfile: {
        serializedName: "properties.managementNetworkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile",
        },
      },
      stampId: {
        serializedName: "properties.stampId",
        type: {
          name: "String",
        },
      },
      statusMessage: {
        serializedName: "properties.statusMessage",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmCluster: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmCluster",
    modelProperties: {
      ...CloudHsmClusterResource.type.modelProperties,
      activationState: {
        serializedName: "properties.activationState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      autoGeneratedDomainNameLabelScope: {
        serializedName: "properties.autoGeneratedDomainNameLabelScope",
        type: {
          name: "String",
        },
      },
      hsms: {
        serializedName: "properties.hsms",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudHsmProperties",
            },
          },
        },
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection",
            },
          },
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String",
        },
      },
      statusMessage: {
        serializedName: "properties.statusMessage",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmClustersUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClustersUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmClustersDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClustersDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmClustersValidateBackupPropertiesHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClustersValidateBackupPropertiesHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClustersBackupHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClustersBackupHeaders",
    modelProperties: {
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmClustersValidateRestorePropertiesHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClustersValidateRestorePropertiesHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClustersRestoreHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudHsmClustersRestoreHeaders",
    modelProperties: {
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudHsmClusterPrivateEndpointConnectionsDeleteHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClusterPrivateEndpointConnectionsDeleteHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClusterBackupStatusGetHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClusterBackupStatusGetHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClusterBackupStatusGetExceptionHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClusterBackupStatusGetExceptionHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClusterRestoreStatusGetHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClusterRestoreStatusGetHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const CloudHsmClusterRestoreStatusGetExceptionHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CloudHsmClusterRestoreStatusGetExceptionHeaders",
      modelProperties: {
        xMsRequestId: {
          serializedName: "x-ms-request-id",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const DedicatedHsmUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DedicatedHsmDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};
