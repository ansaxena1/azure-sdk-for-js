/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

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
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
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
          className: "ErrorDetail"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
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
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SpacecraftListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Spacecraft"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpacecraftLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftLink",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      centerFrequencyMHz: {
        serializedName: "centerFrequencyMHz",
        required: true,
        type: {
          name: "Number"
        }
      },
      bandwidthMHz: {
        serializedName: "bandwidthMHz",
        required: true,
        type: {
          name: "Number"
        }
      },
      direction: {
        serializedName: "direction",
        required: true,
        type: {
          name: "String"
        }
      },
      polarization: {
        serializedName: "polarization",
        required: true,
        type: {
          name: "String"
        }
      },
      authorizations: {
        serializedName: "authorizations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthorizedGroundstation"
            }
          }
        }
      }
    }
  }
};

export const AuthorizedGroundstation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizedGroundstation",
    modelProperties: {
      groundStation: {
        serializedName: "groundStation",
        required: true,
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "expirationDate",
        required: true,
        type: {
          name: "Date"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const TagsObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsObject",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ContactListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Contact"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactsPropertiesAntennaConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactsPropertiesAntennaConfiguration",
    modelProperties: {
      destinationIp: {
        serializedName: "destinationIp",
        type: {
          name: "String"
        }
      },
      sourceIps: {
        serializedName: "sourceIps",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceReference",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactParameters",
    modelProperties: {
      contactProfile: {
        serializedName: "contactProfile",
        type: {
          name: "Composite",
          className: "ContactParametersContactProfile"
        }
      },
      groundStationName: {
        serializedName: "groundStationName",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const AvailableContactsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableContactsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailableContacts"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableContacts: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableContacts",
    modelProperties: {
      spacecraft: {
        serializedName: "spacecraft",
        type: {
          name: "Composite",
          className: "AvailableContactsSpacecraft"
        }
      },
      groundStationName: {
        serializedName: "groundStationName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maximumElevationDegrees: {
        serializedName: "properties.maximumElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      txStartTime: {
        serializedName: "properties.txStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      txEndTime: {
        serializedName: "properties.txEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      rxStartTime: {
        serializedName: "properties.rxStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      rxEndTime: {
        serializedName: "properties.rxEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      startAzimuthDegrees: {
        serializedName: "properties.startAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endAzimuthDegrees: {
        serializedName: "properties.endAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startElevationDegrees: {
        serializedName: "properties.startElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endElevationDegrees: {
        serializedName: "properties.endElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ContactInstanceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactInstanceProperties",
    modelProperties: {
      maximumElevationDegrees: {
        serializedName: "maximumElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      txStartTime: {
        serializedName: "txStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      txEndTime: {
        serializedName: "txEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      rxStartTime: {
        serializedName: "rxStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      rxEndTime: {
        serializedName: "rxEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      startAzimuthDegrees: {
        serializedName: "startAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endAzimuthDegrees: {
        serializedName: "endAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startElevationDegrees: {
        serializedName: "startElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endElevationDegrees: {
        serializedName: "endElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ContactProfilesProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfilesProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      minimumViableContactDuration: {
        serializedName: "minimumViableContactDuration",
        type: {
          name: "String"
        }
      },
      minimumElevationDegrees: {
        serializedName: "minimumElevationDegrees",
        type: {
          name: "Number"
        }
      },
      autoTrackingConfiguration: {
        serializedName: "autoTrackingConfiguration",
        type: {
          name: "Enum",
          allowedValues: ["disabled", "xBand", "sBand"]
        }
      },
      eventHubUri: {
        serializedName: "eventHubUri",
        type: {
          name: "String"
        }
      },
      networkConfiguration: {
        serializedName: "networkConfiguration",
        type: {
          name: "Composite",
          className: "ContactProfilesPropertiesNetworkConfiguration"
        }
      },
      thirdPartyConfigurations: {
        serializedName: "thirdPartyConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfileThirdPartyConfiguration"
            }
          }
        }
      },
      links: {
        serializedName: "links",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfileLink"
            }
          }
        }
      }
    }
  }
};

export const ContactProfilesPropertiesNetworkConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfilesPropertiesNetworkConfiguration",
    modelProperties: {
      subnetId: {
        serializedName: "subnetId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfileThirdPartyConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfileThirdPartyConfiguration",
    modelProperties: {
      providerName: {
        serializedName: "providerName",
        required: true,
        type: {
          name: "String"
        }
      },
      missionConfiguration: {
        serializedName: "missionConfiguration",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfileLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfileLink",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      polarization: {
        serializedName: "polarization",
        required: true,
        type: {
          name: "String"
        }
      },
      direction: {
        serializedName: "direction",
        required: true,
        type: {
          name: "String"
        }
      },
      gainOverTemperature: {
        serializedName: "gainOverTemperature",
        type: {
          name: "Number"
        }
      },
      eirpdBW: {
        serializedName: "eirpdBW",
        type: {
          name: "Number"
        }
      },
      channels: {
        serializedName: "channels",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfileLinkChannel"
            }
          }
        }
      }
    }
  }
};

export const ContactProfileLinkChannel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfileLinkChannel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      centerFrequencyMHz: {
        serializedName: "centerFrequencyMHz",
        required: true,
        type: {
          name: "Number"
        }
      },
      bandwidthMHz: {
        serializedName: "bandwidthMHz",
        required: true,
        type: {
          name: "Number"
        }
      },
      endPoint: {
        serializedName: "endPoint",
        type: {
          name: "Composite",
          className: "EndPoint"
        }
      },
      modulationConfiguration: {
        serializedName: "modulationConfiguration",
        type: {
          name: "String"
        }
      },
      demodulationConfiguration: {
        serializedName: "demodulationConfiguration",
        type: {
          name: "String"
        }
      },
      encodingConfiguration: {
        serializedName: "encodingConfiguration",
        type: {
          name: "String"
        }
      },
      decodingConfiguration: {
        serializedName: "decodingConfiguration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EndPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndPoint",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        required: true,
        type: {
          name: "String"
        }
      },
      endPointName: {
        serializedName: "endPointName",
        required: true,
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        required: true,
        type: {
          name: "String"
        }
      },
      protocol: {
        serializedName: "protocol",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfileListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfileListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfile"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableGroundStationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableGroundStationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailableGroundStation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableGroundStation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableGroundStation",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "properties.city",
        type: {
          name: "String"
        }
      },
      providerName: {
        serializedName: "properties.providerName",
        type: {
          name: "String"
        }
      },
      longitudeDegrees: {
        serializedName: "properties.longitudeDegrees",
        type: {
          name: "Number"
        }
      },
      latitudeDegrees: {
        serializedName: "properties.latitudeDegrees",
        type: {
          name: "Number"
        }
      },
      altitudeMeters: {
        serializedName: "properties.altitudeMeters",
        type: {
          name: "Number"
        }
      },
      releaseMode: {
        serializedName: "properties.releaseMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableGroundStationPropertiesAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableGroundStationPropertiesAutoGenerated",
    modelProperties: {
      city: {
        serializedName: "city",
        type: {
          name: "String"
        }
      },
      providerName: {
        serializedName: "providerName",
        type: {
          name: "String"
        }
      },
      longitudeDegrees: {
        serializedName: "longitudeDegrees",
        type: {
          name: "Number"
        }
      },
      latitudeDegrees: {
        serializedName: "latitudeDegrees",
        type: {
          name: "Number"
        }
      },
      altitudeMeters: {
        serializedName: "altitudeMeters",
        type: {
          name: "Number"
        }
      },
      releaseMode: {
        serializedName: "releaseMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      percentComplete: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 0
        },
        serializedName: "percentComplete",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "OperationResultErrorProperties"
        }
      }
    }
  }
};

export const OperationResultErrorProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResultErrorProperties",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceIdListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceIdListResultValueItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdListResultValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceIdListResultValueItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
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
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const ContactsPropertiesContactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactsPropertiesContactProfile",
    modelProperties: {
      ...ResourceReference.type.modelProperties
    }
  }
};

export const ContactParametersContactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactParametersContactProfile",
    modelProperties: {
      ...ResourceReference.type.modelProperties
    }
  }
};

export const AvailableContactsSpacecraft: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableContactsSpacecraft",
    modelProperties: {
      ...ResourceReference.type.modelProperties
    }
  }
};

export const AvailableContactsProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableContactsProperties",
    modelProperties: {
      ...ContactInstanceProperties.type.modelProperties
    }
  }
};

export const ContactProfileProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfileProperties",
    modelProperties: {
      ...ContactProfilesProperties.type.modelProperties
    }
  }
};

export const AvailableGroundStationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableGroundStationProperties",
    modelProperties: {
      ...AvailableGroundStationPropertiesAutoGenerated.type.modelProperties
    }
  }
};

export const Spacecraft: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Spacecraft",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      noradId: {
        serializedName: "properties.noradId",
        type: {
          name: "String"
        }
      },
      titleLine: {
        serializedName: "properties.titleLine",
        required: true,
        type: {
          name: "String"
        }
      },
      tleLine1: {
        serializedName: "properties.tleLine1",
        required: true,
        type: {
          name: "String"
        }
      },
      tleLine2: {
        serializedName: "properties.tleLine2",
        required: true,
        type: {
          name: "String"
        }
      },
      links: {
        serializedName: "properties.links",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SpacecraftLink"
            }
          }
        }
      }
    }
  }
};

export const ContactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfile",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      minimumViableContactDuration: {
        serializedName: "properties.minimumViableContactDuration",
        type: {
          name: "String"
        }
      },
      minimumElevationDegrees: {
        serializedName: "properties.minimumElevationDegrees",
        type: {
          name: "Number"
        }
      },
      autoTrackingConfiguration: {
        serializedName: "properties.autoTrackingConfiguration",
        type: {
          name: "Enum",
          allowedValues: ["disabled", "xBand", "sBand"]
        }
      },
      eventHubUri: {
        serializedName: "properties.eventHubUri",
        type: {
          name: "String"
        }
      },
      networkConfiguration: {
        serializedName: "properties.networkConfiguration",
        type: {
          name: "Composite",
          className: "ContactProfilesPropertiesNetworkConfiguration"
        }
      },
      thirdPartyConfigurations: {
        serializedName: "properties.thirdPartyConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfileThirdPartyConfiguration"
            }
          }
        }
      },
      links: {
        serializedName: "properties.links",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactProfileLink"
            }
          }
        }
      }
    }
  }
};

export const Contact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Contact",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      reservationStartTime: {
        serializedName: "properties.reservationStartTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      reservationEndTime: {
        serializedName: "properties.reservationEndTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      rxStartTime: {
        serializedName: "properties.rxStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      rxEndTime: {
        serializedName: "properties.rxEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      txStartTime: {
        serializedName: "properties.txStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      txEndTime: {
        serializedName: "properties.txEndTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      errorMessage: {
        serializedName: "properties.errorMessage",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maximumElevationDegrees: {
        serializedName: "properties.maximumElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startAzimuthDegrees: {
        serializedName: "properties.startAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endAzimuthDegrees: {
        serializedName: "properties.endAzimuthDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      groundStationName: {
        serializedName: "properties.groundStationName",
        required: true,
        type: {
          name: "String"
        }
      },
      startElevationDegrees: {
        serializedName: "properties.startElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endElevationDegrees: {
        serializedName: "properties.endElevationDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      antennaConfiguration: {
        serializedName: "properties.antennaConfiguration",
        type: {
          name: "Composite",
          className: "ContactsPropertiesAntennaConfiguration"
        }
      },
      contactProfile: {
        serializedName: "properties.contactProfile",
        type: {
          name: "Composite",
          className: "ContactsPropertiesContactProfile"
        }
      }
    }
  }
};

export const SpacecraftsCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftsCreateOrUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpacecraftsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpacecraftsUpdateTagsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftsUpdateTagsHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpacecraftsListAvailableContactsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftsListAvailableContactsHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpacecraftsListAvailableContactsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SpacecraftsListAvailableContactsNextHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactsCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactsCreateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfilesCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfilesCreateOrUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfilesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfilesDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfilesUpdateTagsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfilesUpdateTagsHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationsResultsGetHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationsResultsGetHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
