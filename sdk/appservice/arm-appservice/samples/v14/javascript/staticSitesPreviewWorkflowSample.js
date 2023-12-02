/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Generates a preview workflow file for the static site
 *
 * @summary Description for Generates a preview workflow file for the static site
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/GenerateStaticSiteWorkflowPreview.json
 */
async function generatesAPreviewWorkflowFileForTheStaticSite() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const location = "West US 2";
  const staticSitesWorkflowPreviewRequest = {
    branch: "master",
    buildProperties: {
      apiLocation: "api",
      appArtifactLocation: "build",
      appLocation: "app",
    },
    repositoryUrl: "https://github.com/username/RepoName",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.previewWorkflow(
    location,
    staticSitesWorkflowPreviewRequest
  );
  console.log(result);
}

async function main() {
  generatesAPreviewWorkflowFileForTheStaticSite();
}

main().catch(console.error);
