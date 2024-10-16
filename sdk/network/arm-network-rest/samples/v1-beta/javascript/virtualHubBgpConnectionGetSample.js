// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const createNetworkManagementClient = require("@azure-rest/arm-network").default;
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieves the details of a Virtual Hub Bgp Connection.
 *
 * @summary Retrieves the details of a Virtual Hub Bgp Connection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualHubBgpConnectionGet.json
 */
async function virtualHubVirtualHubRouteTableV2Get() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const virtualHubName = "hub1";
  const connectionName = "conn1";
  const options = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/bgpConnections/{connectionName}",
      subscriptionId,
      resourceGroupName,
      virtualHubName,
      connectionName
    )
    .get(options);
  console.log(result);
}

virtualHubVirtualHubRouteTableV2Get().catch(console.error);
