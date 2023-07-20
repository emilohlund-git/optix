import { ArrayUtils } from '../../src';

describe("medianArray", () => {
  it("should return the median of an odd-length array", () => {
    const numbers = [5, 10, 2, 8, 1];
    expect(ArrayUtils.median(numbers)).toBe(5);
  });

  it("should return the median of an even-length array", () => {
    const numbers = [5, 10, 2, 8];
    expect(ArrayUtils.median(numbers)).toBe(6.5);
  });

  it("should return the median of a sorted array", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(ArrayUtils.median(numbers)).toBe(3);
  });

  it("should return the median of a reverse-sorted array", () => {
    const numbers = [5, 4, 3, 2, 1];
    expect(ArrayUtils.median(numbers)).toBe(3);
  });

  it("should return the median of an array with negative numbers", () => {
    const numbers = [-5, -10, -2, -8, -1];
    expect(ArrayUtils.median(numbers)).toBe(-5);
  });

  it("should return the median of an array with duplicate numbers", () => {
    const numbers = [1, 2, 3, 3, 4, 5];
    expect(ArrayUtils.median(numbers)).toBe(3);
  });

  it("should return NaN for an empty array", () => {
    const numbers: number[] = [];
    expect(ArrayUtils.median(numbers)).toBe(NaN);
  });
});
