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
  OperationQueryParameter
} from "@azure/core-client";
import { MonitoringDataPoint as MonitoringDataPointMapper } from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const monitoringDataPoint: OperationParameter = {
  parameterPath: ["options", "monitoringDataPoint"],
  mapper: MonitoringDataPointMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const host: OperationURLParameter = {
  parameterPath: "host",
  mapper: {
    serializedName: "Host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const ikey: OperationQueryParameter = {
  parameterPath: "ikey",
  mapper: {
    serializedName: "ikey",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apikey: OperationQueryParameter = {
  parameterPath: ["options", "apikey"],
  mapper: {
    serializedName: "apikey",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsTransmissionTime: OperationParameter = {
  parameterPath: ["options", "xMsQpsTransmissionTime"],
  mapper: {
    serializedName: "x-ms-qps-transmission-time",
    type: {
      name: "Number"
    }
  }
};

export const xMsQpsMachineName: OperationParameter = {
  parameterPath: ["options", "xMsQpsMachineName"],
  mapper: {
    serializedName: "x-ms-qps-machine-name",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsInstanceName: OperationParameter = {
  parameterPath: ["options", "xMsQpsInstanceName"],
  mapper: {
    serializedName: "x-ms-qps-instance-name",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsStreamId: OperationParameter = {
  parameterPath: ["options", "xMsQpsStreamId"],
  mapper: {
    serializedName: "x-ms-qps-stream-id",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsRoleName: OperationParameter = {
  parameterPath: ["options", "xMsQpsRoleName"],
  mapper: {
    serializedName: "x-ms-qps-role-name",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsInvariantVersion: OperationParameter = {
  parameterPath: ["options", "xMsQpsInvariantVersion"],
  mapper: {
    serializedName: "x-ms-qps-invariant-version",
    type: {
      name: "String"
    }
  }
};

export const xMsQpsConfigurationEtag: OperationParameter = {
  parameterPath: ["options", "xMsQpsConfigurationEtag"],
  mapper: {
    serializedName: "x-ms-qps-configuration-etag",
    type: {
      name: "String"
    }
  }
};

export const monitoringDataPoints: OperationParameter = {
  parameterPath: ["options", "monitoringDataPoints"],
  mapper: {
    serializedName: "monitoringDataPoints",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "MonitoringDataPoint"
        }
      }
    }
  }
};