/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
 
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureQuotaExtensionAPI } = require("@azure/arm-quota");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config({ debug: true });
console.log(process.env);
 
/**
 * This sample demonstrates how to Put the GroupQuota requests for a specific ResourceProvider/Location/Resource. the location and resourceName ("name": {"value" : "resourceName") properties are specified in the request body. Only 1 resource quota can be requested.
Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 *
 * @summary Put the GroupQuota requests for a specific ResourceProvider/Location/Resource. the location and resourceName ("name": {"value" : "resourceName") properties are specified in the request body. Only 1 resource quota can be requested.
Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/GroupQuotaLimitsRequests/PutGroupQuotaLimitsRequests-Compute.json
 */
async function groupQuotaLimitsRequestsCreateOrUpdate() {
  const managementGroupId = "testMgIdRoot";
  const groupQuotaName = "sdk-test-group-quota";
  const resourceProviderName = "Microsoft.Compute";
  const resourceName = "standarddv4family";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const groupQuotaRequest = {
    properties: {
      requestedResource: {
        properties: {
          limit: 21,
          region: "eastus",
          comments: "Testing the SDK"
        }
      }
    }
  };
  const options = {
    groupQuotaRequest,
  };
  const result = await client.groupQuotaLimitsRequest.beginCreateOrUpdate(
    managementGroupId,
    groupQuotaName,
    resourceProviderName,
    resourceName,
    options
  );
 
  const rawResponse = JSON.parse(result.toString());
  const operationLocation = rawResponse.state.config.operationLocation;
  const requestId = operationLocation.split('/').pop().split('?')[0];

  console.log(requestId);
  
  const startTime = Date.now();
  const runTime = 3 * 60 * 1000; // 3 minutes in milliseconds
  const interval = 30 * 1000; // 30 seconds in milliseconds

  while (Date.now() - startTime < runTime) {
      // Your code to execute every 30 seconds
      const status = await client.groupQuotaLimitsRequest.get(
        managementGroupId,
        groupQuotaName,
        requestId,
      );

      var provisioningState = status?.properties?.provisioningState;
      console.log(provisioningState);
      var finalState = "";
      if( provisioningState != "Accepted" && provisioningState != "InProgress"){

        if( provisioningState == "Escalated"){
          finalState = provisioningState;
          console.info("Request has been escalated. Contact your capacity manager for next steps");
          break;
        }else if( provisioningState == "Failed"){
          finalState = provisioningState;
          console.info("Failed with FaultCode:" + status?.properties?.faultCode)
          break;
        }else{
          finalState = provisioningState;
          console.info("Request was successful");
          break;
        }
      }

      // Wait for 30 seconds
      const waitUntil = Date.now() + interval;
      while (Date.now() < waitUntil) {
          // Busy-wait loop
      }
  }

  if(finalState != "Succeeded" && finalState != "Failed"){
    console.info("Request has not reached a terminal state . Please poll this URI for your status:"+ operationLocation);
  }

}
 
async function main() {
  groupQuotaLimitsRequestsCreateOrUpdate();
}
 
main().catch(console.error);