import { standardDeviationArray } from "../../src";

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeCloseWithPrecision(expected: T, precision: number): R;
    }
  }
}

function toBeCloseWithPrecision<T>(received: T, expected: T, precision: number) {
  const receivedRounded = +Number(received).toFixed(precision);
  const expectedRounded = +Number(expected).toFixed(precision);
  const pass = receivedRounded === expectedRounded;
  if (pass) {
    return {
      message: () =>
        `Expected ${received} not to be close to ${expected} with precision ${precision}`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected ${received} to be close to ${expected} with precision ${precision}`,
      pass: false,
    };
  }
}

beforeAll(() => {
  expect.extend({ toBeCloseWithPrecision });
});

describe("standardDeviationArray", () => {
  it("should return 0 if numbers is empty", () => {
    const numbers = <number[]>[];
    expect(standardDeviationArray(numbers)).toBe(0);
  });

  it("should calculate the correct standard deviation for an array with negative numbers", () => {
    const numbers = [-1, -3, -5, -2, -4];
    const result = standardDeviationArray(numbers);
    expect(result).toBeCloseWithPrecision(1.41, 2); // Adjusted expected value and precision
  });

  it("should calculate the correct standard deviation for an array with decimal numbers", () => {
    const numbers = [1.5, 2.5, 3.5, 4.5, 5.5];
    const result = standardDeviationArray(numbers);
    expect(result).toBeCloseWithPrecision(1.41, 2); // Adjusted expected value and precision
  });
});
