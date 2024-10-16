/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  ElasticSan as ElasticSanMapper,
  ElasticSanUpdate as ElasticSanUpdateMapper,
  VolumeGroup as VolumeGroupMapper,
  VolumeGroupUpdate as VolumeGroupUpdateMapper,
  Volume as VolumeMapper,
  VolumeUpdate as VolumeUpdateMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Snapshot as SnapshotMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-05-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ElasticSanMapper,
};

export const elasticSanName: OperationURLParameter = {
  parameterPath: "elasticSanName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]+((-|_)[a-z0-9A-Z]+)*$"),
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "elasticSanName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ElasticSanUpdateMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: VolumeGroupMapper,
};

export const volumeGroupName: OperationURLParameter = {
  parameterPath: "volumeGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]+((-|_)[a-z0-9A-Z]+)*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "volumeGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: VolumeGroupUpdateMapper,
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: VolumeMapper,
};

export const volumeName: OperationURLParameter = {
  parameterPath: "volumeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]+(-[a-z0-9A-Z]+)*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "volumeName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: VolumeUpdateMapper,
};

export const xMsDeleteSnapshots: OperationParameter = {
  parameterPath: ["options", "xMsDeleteSnapshots"],
  mapper: {
    serializedName: "x-ms-delete-snapshots",
    type: {
      name: "String",
    },
  },
};

export const xMsForceDelete: OperationParameter = {
  parameterPath: ["options", "xMsForceDelete"],
  mapper: {
    serializedName: "x-ms-force-delete",
    type: {
      name: "String",
    },
  },
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: SnapshotMapper,
};

export const snapshotName: OperationURLParameter = {
  parameterPath: "snapshotName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]+(?:[._-][a-z0-9]+)*$"),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "snapshotName",
    required: true,
    type: {
      name: "String",
    },
  },
};
