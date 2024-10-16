// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get embeddings from a model endpoint.
 *
 * @summary Get embeddings.
 */

import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const key = process.env["KEY"];
const modelName = process.env["MODEL_NAME"];

export async function main() {
  console.log("== Chat Completions Sample ==");

  const client = createModelClient();
  const response = await client.path("/embeddings").post({
    body: {
      input: ["first phrase", "second phrase", "third phrase"],
      model: modelName
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }
  for (const data of response.body.data) {
    console.log(data);
  }
  console.log(response.body.usage);

}

/*
  * This function creates a model client.
  */
function createModelClient() {
  // auth scope for AOAI resources is currently https://cognitiveservices.azure.com/.default
  // (only needed when targetting AOAI, do not use for Serverless API or Managed Computer Endpoints)
  if (key) {
    return ModelClient(endpoint, new AzureKeyCredential(key));      
  } else {
    const scopes = ["https://cognitiveservices.azure.com/.default"];
    const clientOptions = { credentials: { scopes } };
    return ModelClient(endpoint, new DefaultAzureCredential(), clientOptions);      
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
