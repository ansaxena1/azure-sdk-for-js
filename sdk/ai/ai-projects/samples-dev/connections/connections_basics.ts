// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AIProjectsClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

import * as dotenv from "dotenv";
dotenv.config();

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<endpoint>;<subscription>;<resource group>;<project>";

export async function main(): Promise<void> {
    const client = AIProjectsClient.fromConnectionString(connectionString || "", new DefaultAzureCredential());

    // Get the properties of the specified machine learning workspace
    const workspace = await client.connections.getWorkspace();
    console.log(`Retrieved workspace, workspace name: ${workspace.name}`);

    // List the details of all the connections
    const connections = await client.connections.listConnections();
    console.log(`Retrieved ${connections.value.length} connections`);

    // Get the details of a connection, without credentials
    const connectionName = connections.value[0].name;
    const connection = await client.connections.getConnection(connectionName);
    console.log(`Retrieved connection, connection name: ${connection.name}`);

    // Get the details of a connection, including credentials (if available)
    const connectionWithSecrets = await client.connections.getConnectionWithSecrets(connectionName);
    console.log(`Retrieved connection with secrets, connection name: ${connectionWithSecrets.name}`);
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
