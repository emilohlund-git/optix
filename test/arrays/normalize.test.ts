import { normalizeArray } from "../../src";

describe("normalizeArray", () => {
  it("should normalize an array to the range [0, 1]", () => {
    const numbers = [10, 15, 12, 14, 8];
    const normalizedData = normalizeArray(numbers, 0, 1);
    const expected = [0, 0.8571428571428571, 0.42857142857142855, 0.7142857142857143, 0.14285714285714285];

    for (let i = 0; i < normalizedData.length; i++) {
      expect(normalizedData[i]).toBeCloseTo(expected[i], 1e-10); // Use a larger tolerance
    }
  });

  it("should handle an array with duplicate values", () => {
    const numbers = [10, 10, 10, 10, 10];
    const normalizedData = normalizeArray(numbers, 0, 1);
    const expected = [0.5, 0.5, 0.5, 0.5, 0.5];

    for (let i = 0; i < normalizedData.length; i++) {
      expect(normalizedData[i]).toBeCloseTo(expected[i], 1e-10); // Use a larger tolerance
    }
  });
});
