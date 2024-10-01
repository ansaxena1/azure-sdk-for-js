/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 */

import { env, Recorder, isPlaybackMode, delay } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { MongoClusterManagementClient } from "../../src/mongoClusterManagementClient.js";
import { createRecorder } from "./utils/recordedClient.js";

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("MongoCluster test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: MongoClusterManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;
  let fireWallName: string;

  beforeEach(async (context) => {
    process.env.SystemRoot = process.env.SystemRoot || "C:\\Windows";
    recorder = await createRecorder(context);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new MongoClusterManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "eastus";
    resourceGroup = "czwjstest";
    resourcename = "testmongocluster";
    fireWallName = "testfilerule";
  });

  afterEach(async function () {
    if (recorder?.recordingId) {
      await recorder.stop();
    }
  });

  it("operations list test", async function () {
    const resArray = new Array();
    for await (let item of client.operations.list()) {
      resArray.push(item);
    }
    assert.notEqual(resArray.length, 0);
  });

  it("mongoClusters create test", async function () {
    const res = await client.mongoClusters.createOrUpdate(
      resourceGroup,
      resourcename,
      {
        location,
        properties: {
          administratorLogin: "mongoAdmin",
          administratorLoginPassword: "SecureString;",
          nodeGroupSpecs: [
            {
              diskSizeGB: 128,
              enableHa: true,
              kind: "Shard",
              nodeCount: 1,
              sku: "M30",
            },
          ],
          serverVersion: "5.0",
        },
      },
      testPollingOptions,
    );
    assert.equal(res.name, resourcename);
  });

  it("firerules create test", async function () {
    const res = await client.firewallRules.createOrUpdate(
      resourceGroup,
      resourcename,
      fireWallName,
      {
        properties: {
          startIpAddress: "0.0.0.0",
          endIpAddress: "255.255.255.255",
        },
      },
      testPollingOptions,
    );
    console.log(res);
    assert.equal(res.name, fireWallName);
  });

  it("mongoClusters get test", async function () {
    const res = await client.mongoClusters.get(resourceGroup, resourcename);
    assert.equal(res.name, resourcename);
  });

  it("firerules get test", async function () {
    const res = await client.firewallRules.get(resourceGroup, resourcename, fireWallName);
    console.log(res);
    assert.equal(res.name, fireWallName);
  });

  it("mongoClusters list test", async function () {
    const resArray = new Array();
    for await (let item of client.mongoClusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("firewallRules list test", async function () {
    const resArray = new Array();
    for await (let item of client.firewallRules.listByMongoCluster(resourceGroup, resourcename)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("mongoClusters update test", async function () {
    const res = await client.mongoClusters.update(resourceGroup, resourcename, {
      tags: {},
    });
    assert.equal(res.name, resourcename);
  });

  it("firewallRules delete test", async function () {
    const resArray = new Array();
    await client.firewallRules.delete(resourceGroup, resourcename, fireWallName);
    for await (let item of client.firewallRules.listByMongoCluster(resourceGroup, resourcename)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("mongoClusters delete test", async function () {
    const resArray = new Array();
    await client.mongoClusters.delete(resourceGroup, resourcename);
    for await (let item of client.mongoClusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);

    await delay(isPlaybackMode() ? 1000 : 60000);
  });
});
