// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function successfulBreezeResponse(count: number): any {
  return {
    itemsAccepted: count,
    itemsReceived: count,
    errors: [],
  };
}

export function failedBreezeResponse(count: number, statusCode: number): any {
  return {
    itemsAccepted: 0,
    itemsReceived: count,
    errors: new Array(count).fill(0).map((_, index) => ({
      index,
      statusCode,
      message: "foo",
    })),
  };
}

export function partialBreezeResponse(statusCodes: number[]): {
  itemsAccepted: number;
  itemsReceived: number;
  errors: { index: number; statusCode: number; message: string }[];
} {
  const itemsAccepted = statusCodes.filter((v) => v === 200).length;
  return {
    itemsAccepted,
    itemsReceived: statusCodes.length,
    errors: statusCodes
      .filter((v) => v !== 200)
      .map((v) => ({
        index: statusCodes.findIndex((s) => v === s),
        statusCode: v,
        message: "foo",
      })),
  };
}
