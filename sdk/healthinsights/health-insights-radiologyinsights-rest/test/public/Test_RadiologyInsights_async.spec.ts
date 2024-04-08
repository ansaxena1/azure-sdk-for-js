// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { Recorder } from "@azure-tools/test-recorder";
import { Context } from "mocha";
import { createClient, createRecorder } from "./utils/recordedClient";
import { AzureHealthInsightsClient, getLongRunningPoller } from "../../src";

const codingData = {
  system: "http://www.nlm.nih.gov/research/umls",
  code: "C0018802",
  display: "MalignantNeoplasms",
};

const codingData2 = {
  system: "Http://hl7.org/fhir/ValueSet/cpt-all",
  code: "111111",
  display: "CT ABD/PELVIS",
};

const code = {
  coding: [codingData],
};

const code2 = {
  coding: [codingData2],
};

const clinicInfoData = {
  resourceType: "Observation",
  status: "unknown",
  code: code,
  valueBoolean: true,
};

const patientInfo = {
  sex: "female",
  birthDate: new Date("1959-11-11T19:00:00+00:00"),
  clinicalInfo: [clinicInfoData],
};

const encounterData = {
  id: "encounterid1",
  period: {
    start: "2021-8-28T00:00:00",
    end: "2021-8-28T00:00:00",
  },
  class: "inpatient",
};

const authorData = {
  id: "authorid1",
  name: "authorname1",
};

const orderedProceduresData = {
  code: code2,
  description: "CT ABD/PELVIS",
};
const administrativeMetadata = {
  orderedProcedures: [orderedProceduresData],
  encounterId: "encounterid1",
};

const content = {
  sourceType: "inline",
  value:
    "\n\nThe results were faxed to Julie Carter on July 6 2016 at 3 PM.\n\nThe results were sent via Powerscribe to George Brown, PA.\n\n\t\t",
};

const patientDocumentData = {
  type: "note",
  clinicalType: "radiologyReport",
  id: "docid1",
  language: "en",
  authors: [authorData],
  specialtyType: "radiology",
  administrativeMetadata: administrativeMetadata,
  content: content,
  createdDateTime: new Date("2021-05-31T22:00:00.000Z"),
  orderedProceduresAsCsv: "CT ABD/PELVIS",
};

const patientData = {
  id: "Samantha Jones",
  info: patientInfo,
  encounters: [encounterData],
  patientDocuments: [patientDocumentData],
};

const inferenceTypes = [
  "finding",
  "ageMismatch",
  "lateralityDiscrepancy",
  "sexMismatch",
  "completeOrderDiscrepancy",
  "limitedOrderDiscrepancy",
  "criticalResult",
  "criticalRecommendation",
  "followupRecommendation",
  "followupCommunication",
  "radiologyProcedure",
];

const followupRecommendationOptions = {
  includeRecommendationsWithNoSpecifiedModality: true,
  includeRecommendationsInReferences: true,
  provideFocusedSentenceEvidence: true,
};

const findingOptions = {
  provideFocusedSentenceEvidence: true,
};
const inferenceOptions = {
  followupRecommendationOptions: followupRecommendationOptions,
  findingOptions: findingOptions,
};

// Create RI Configuration
const configuration = {
  inferenceOptions: inferenceOptions,
  inferenceTypes: inferenceTypes,
  locale: "en-US",
  verbose: false,
  includeEvidence: true,
};

// create RI Data
const radiologyInsightsData = {
  patients: [patientData],
  configuration: configuration,
};

const radiologyInsightsParameter = {
  body: radiologyInsightsData,
};

describe("Radiology Insights Test", () => {
  let recorder: Recorder;
  let client: AzureHealthInsightsClient;

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
    client = await createClient(recorder);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("radiology Insights test", async function () {
    const result = await client.path("/radiology-insights/jobs").post(radiologyInsightsParameter);
    const poller = await getLongRunningPoller(client, result);
    const res = await poller.pollUntilDone();
    console.log(res);
    assert.equal(res.status, "200");
  });
});
