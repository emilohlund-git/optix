import { findOutliers } from "../../src";

describe("findOutliers", () => {
  it("should find outliers in an array of numbers", () => {
    const numbers = [10, 15, 12, 14, 8, 100, 9];
    const outliers = findOutliers(numbers);
    expect(outliers).toEqual([100]);
  });

  it("should handle an array with negative numbers", () => {
    const numbers = [-1, -5, -3, -2, -4];
    const outliers = findOutliers(numbers);
    expect(outliers).toEqual([]);
  });

  it("should point out the outlier as 10", () => {
    const numbers = [10, 88, 90, 92, 85, 102, 110, 94, 77];
    const outliers = findOutliers(numbers);
    expect(outliers).toEqual([10]);
  });
});