// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* eslint-disable promise/always-return */

import { ExportResultCode } from "@opentelemetry/core";
import { TraceHandler } from "../../../../src/traces/index.js";
import { MetricHandler } from "../../../../src/metrics/index.js";
import { InternalConfig } from "../../../../src/shared/index.js";
import type { HttpInstrumentationConfig } from "@opentelemetry/instrumentation-http";
import type {
  BasicTracerProvider,
  ReadableSpan,
  SpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import type { ProxyTracerProvider, Span } from "@opentelemetry/api";
import { metrics, trace } from "@opentelemetry/api";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import type { MockInstance } from "vitest";
import { describe, it, assert, expect, vi, afterEach, beforeAll } from "vitest";

describe("Library/TraceHandler", () => {
  let http: any = null;
  /* eslint-disable-next-line no-underscore-dangle */
  let _config: InternalConfig;
  let exportStub: MockInstance;
  let handler: TraceHandler;
  let metricHandler: MetricHandler;

  let mockHttpServer: any;
  const mockHttpServerPort = 8085;

  function createMockServers(): void {
    mockHttpServer = http.createServer((req: any, res: any) => {
      if (req) {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.write(
          JSON.stringify({
            success: true,
          }),
        );
        res.end();
      }
    });
    mockHttpServer.listen(mockHttpServerPort);
  }

  async function makeHttpRequest(): Promise<void> {
    const options = {
      hostname: "localhost",
      port: mockHttpServerPort,
      path: "/test",
      method: "GET",
    };
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res: any) => {
        res.on("data", function () {});
        res.on("end", () => {
          resolve();
        });
      });
      req.on("error", (error: Error) => {
        reject(error);
      });
      req.end();
    });
  }

  beforeAll(() => {
    _config = new InternalConfig();
    if (_config.azureMonitorExporterOptions) {
      _config.azureMonitorExporterOptions.connectionString =
        "InstrumentationKey=1aa11111-bbbb-1ccc-8ddd-eeeeffff3333";
    }
  });

  afterEach(async () => {
    await metricHandler.shutdown();
    await handler.shutdown();
    metrics.disable();
    trace.disable();
    mockHttpServer.close();
    vi.restoreAllMocks();
  });

  function createHandler(httpConfig: HttpInstrumentationConfig): void {
    _config.instrumentationOptions.http = httpConfig;
    metricHandler = new MetricHandler(_config);
    handler = new TraceHandler(_config, metricHandler);
    exportStub = vi.spyOn(handler["_azureExporter"], "export").mockImplementation(
      (spans: any, resultCallback: any) =>
        new Promise((resolve) => {
          resultCallback({
            code: ExportResultCode.SUCCESS,
          });
          resolve(spans);
        }),
    );
    const tracerProvider = new NodeTracerProvider();
    tracerProvider.addSpanProcessor(handler.getAzureMonitorSpanProcessor());
    tracerProvider.addSpanProcessor(handler.getBatchSpanProcessor());
    trace.setGlobalTracerProvider(tracerProvider);

    // Load Http modules, HTTP instrumentation hook will be created in OpenTelemetry
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    http = require("http");
    createMockServers();
  }

  describe("#autoCollection of HTTP/HTTPS requests", () => {
    it("http outgoing/incoming requests", async () => {
      createHandler({ enabled: true });
      await makeHttpRequest();

      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();

      expect(exportStub).toHaveBeenCalled();
      const spans = exportStub.mock.calls[0][0];
      assert.deepStrictEqual(spans.length, 2);
      // Incoming request
      assert.deepStrictEqual(spans[0].name, "GET");
      assert.deepStrictEqual(
        spans[0].instrumentationLibrary.name,
        "@opentelemetry/instrumentation-http",
      );
      assert.deepStrictEqual(spans[0].kind, 1, "Span Kind");
      assert.deepStrictEqual(spans[0].status.code, 0, "Span Success"); // Success
      assert.ok(spans[0].startTime);
      assert.ok(spans[0].endTime);
      assert.deepStrictEqual(spans[0].attributes["http.host"], `localhost:${mockHttpServerPort}`);
      assert.deepStrictEqual(spans[0].attributes["http.method"], "GET");
      assert.deepStrictEqual(spans[0].attributes["http.status_code"], 200);
      assert.deepStrictEqual(spans[0].attributes["http.status_text"], "OK");
      assert.deepStrictEqual(spans[0].attributes["http.target"], "/test");
      assert.deepStrictEqual(
        spans[0].attributes["http.url"],
        `http://localhost:${mockHttpServerPort}/test`,
      );
      assert.deepStrictEqual(spans[0].attributes["net.host.name"], "localhost");
      assert.deepStrictEqual(spans[0].attributes["net.host.port"], mockHttpServerPort);
      // Outgoing request
      assert.deepStrictEqual(spans[1].name, "GET");
      assert.deepStrictEqual(
        spans[1].instrumentationLibrary.name,
        "@opentelemetry/instrumentation-http",
      );
      assert.deepStrictEqual(spans[1].kind, 2, "Span Kind");
      assert.deepStrictEqual(spans[1].status.code, 0, "Span Success"); // Success
      assert.ok(spans[1].startTime);
      assert.ok(spans[1].endTime);
      assert.deepStrictEqual(spans[1].attributes["http.host"], `localhost:${mockHttpServerPort}`);
      assert.deepStrictEqual(spans[1].attributes["http.method"], "GET");
      assert.deepStrictEqual(spans[1].attributes["http.status_code"], 200);
      assert.deepStrictEqual(spans[1].attributes["http.status_text"], "OK");
      assert.deepStrictEqual(spans[1].attributes["http.target"], "/test");
      assert.deepStrictEqual(
        spans[1].attributes["http.url"],
        `http://localhost:${mockHttpServerPort}/test`,
      );
      assert.deepStrictEqual(spans[1].attributes["net.peer.name"], "localhost");
      assert.deepStrictEqual(spans[1].attributes["net.peer.port"], mockHttpServerPort);

      assert.deepStrictEqual(
        spans[0]["_spanContext"]["traceId"],
        spans[1]["_spanContext"]["traceId"],
      );
      assert.notDeepEqual(spans[0]["_spanContext"]["spanId"], spans[1]["_spanContext"]["spanId"]);
    });

    it("Custom Span processors", async () => {
      createHandler({ enabled: true });
      const customSpanProcessor: SpanProcessor = {
        forceFlush: () => {
          return Promise.resolve();
        },
        onStart: (span: Span) => {
          span.setAttribute("startAttribute", "SomeValue");
        },
        onEnd: (span: ReadableSpan) => {
          span.attributes["endAttribute"] = "SomeValue2";
        },
        shutdown: () => {
          return Promise.resolve();
        },
      };
      (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as BasicTracerProvider
      ).addSpanProcessor(customSpanProcessor);
      await makeHttpRequest();

      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();
      expect(exportStub).toHaveBeenCalled();
      const spans = exportStub.mock.calls[0][0];
      assert.deepStrictEqual(spans.length, 2);
      // Incoming request
      assert.deepStrictEqual(spans[0].attributes["startAttribute"], "SomeValue");
      assert.deepStrictEqual(spans[0].attributes["endAttribute"], "SomeValue2");
      // Outgoing request
      assert.deepStrictEqual(spans[1].attributes["startAttribute"], "SomeValue");
      assert.deepStrictEqual(spans[1].attributes["endAttribute"], "SomeValue2");
    });

    it("Span processing for pre aggregated metrics", async () => {
      createHandler({ enabled: true });
      await makeHttpRequest();

      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();

      expect(exportStub).toHaveBeenCalled();
      const spans = exportStub.mock.calls[0][0];
      assert.deepStrictEqual(spans.length, 2);
      // Incoming request
      assert.deepStrictEqual(
        spans[0].attributes["_MS.ProcessedByMetricExtractors"],
        "(Name:'Requests', Ver:'1.1')",
      );
      // Outgoing request
      assert.deepStrictEqual(
        spans[1].attributes["_MS.ProcessedByMetricExtractors"],
        "(Name:'Dependencies', Ver:'1.1')",
      );
    });

    it("should not track dependencies if configured off", async () => {
      const httpConfig: HttpInstrumentationConfig = {
        enabled: true,
        ignoreOutgoingRequestHook: () => true,
      };
      createHandler(httpConfig);
      await makeHttpRequest();
      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();
      expect(exportStub).toHaveBeenCalled();
      const spans = exportStub.mock.calls[0][0];
      assert.deepStrictEqual(spans.length, 1);
      assert.deepStrictEqual(spans[0].kind, 1, "Span Kind"); // Incoming only
    });

    it("should not track requests if configured off", async () => {
      const httpConfig: HttpInstrumentationConfig = {
        enabled: true,
        ignoreIncomingRequestHook: () => true,
      };
      createHandler(httpConfig);
      await makeHttpRequest();

      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();
      expect(exportStub).toHaveBeenCalled();
      const spans = exportStub.mock.calls[0][0];
      assert.deepStrictEqual(spans.length, 1);
      assert.deepStrictEqual(spans[0].kind, 2, "Span Kind"); // Outgoing only
    });

    it("http should not track if instrumentations are disabled", async () => {
      createHandler({ enabled: false });
      await makeHttpRequest();

      await makeHttpRequest();
      await (
        (trace.getTracerProvider() as ProxyTracerProvider).getDelegate() as NodeTracerProvider
      ).forceFlush();
      expect(exportStub).not.toHaveBeenCalled();
    });
  });
});
