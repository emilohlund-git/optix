import { ArrayUtils } from "../../src";
import { analyzeNumericArray } from "../../src/arrays/analyzeData";
import { AnalyzeDataResult } from "../../src/types";

describe('ArrayUtils.analyze', () => {
  it('should analyze an array of numbers and return the correct analysis result', () => {
    const temperatureData = [25.6, 26.2, 24.8, 23.5, 27.3, 26.8, 27.9, 24.5, 25.2, 26.1];
    const analysisResults: AnalyzeDataResult = analyzeNumericArray(temperatureData);

    const roundToPrecision = (value: number, precision: number): number => {
      const factor = 10 ** precision;
      return Math.round(value * factor) / factor;
    };

    expect(analysisResults.mean).toBeCloseTo(25.79, 2);
    expect(analysisResults.max).toBe(27.9);
    expect(analysisResults.min).toBe(23.5);
    expect(analysisResults.median).toBeCloseTo(25.85, 2);
    expect(analysisResults.normalized.map((val) => parseFloat(val.toFixed(2)))).toEqual([
      0.48,
      0.61,
      0.30,
      0.00,
      0.86,
      0.75,
      1.00,
      0.23,
      0.39,
      0.59,
    ]);
    expect(roundToPrecision(analysisResults.standardDeviation, 2)).toBeCloseTo(1.28);
    expect(roundToPrecision(analysisResults.sum, 1)).toBeCloseTo(257.9);
    expect(analysisResults.sorted).toEqual([
      23.5, 24.5, 24.8, 25.2, 25.6, 26.1, 26.2, 26.8, 27.3, 27.9,
    ]);
  });

  // Test case 1: Basic test with simple data containing 'sales' and 'revenue' attributes.
  it('should correctly analyze an array with "sales" and "revenue" attributes', () => {
    const salesData = [
      { product: 'Widget', sales: 1200, revenue: 24000 },
      { product: 'Gadget', sales: 800, revenue: 32000 },
      { product: 'Doodad', sales: 1600, revenue: 12800 },
    ];

    const analysisResults = ArrayUtils.analyze(salesData);

    console.log(analysisResults);

    expect(analysisResults.sales.mean).toBe(1200);
    expect(analysisResults.sales.max).toBe(1600);
    expect(analysisResults.sales.min).toBe(800);
    expect(analysisResults.sales.median).toBe(1200);
    expect(analysisResults.sales.normalized).toEqual([0.5, 0, 1]);
    expect(analysisResults.sales.standardDeviation).toBeCloseTo(326.598632, 2);
    expect(analysisResults.sales.sum).toBe(3600);
    expect(analysisResults.sales.sorted).toEqual([800, 1200, 1600]);
    expect(analysisResults.sales.outliers).toEqual([]);

    expect(analysisResults.revenue.mean).toBeCloseTo(22933.33);
    expect(analysisResults.revenue.max).toBe(32000);
    expect(analysisResults.revenue.min).toBe(12800);
    expect(analysisResults.revenue.median).toBe(24000);
    expect(analysisResults.revenue.normalized).toEqual([0.5833333333333334, 1, 0]);
    expect(analysisResults.revenue.standardDeviation).toBeCloseTo(7874.57, 2);
    expect(analysisResults.revenue.sum).toBe(68800);
    expect(analysisResults.revenue.sorted).toEqual([12800, 24000, 32000]);
    expect(analysisResults.revenue.outliers).toEqual([]);
  });

  // Test case 2: Test with additional attributes like 'quantity' and 'cost'.
  it('should correctly analyze an array with additional attributes', () => {
    const productData = [
      { product: 'Widget', sales: 1200, revenue: 24000, quantity: 100, cost: 18000 },
      { product: 'Gadget', sales: 800, revenue: 32000, quantity: 50, cost: 15000 },
      { product: 'Doodad', sales: 1600, revenue: 12800, quantity: 200, cost: 10000 },
    ];

    const analysisResults = ArrayUtils.analyze(productData);

    // Test analysis results for 'sales' attribute (similar to Test case 1).
    expect(analysisResults.sales.mean).toBeCloseTo(1200);
    expect(analysisResults.sales.max).toBe(1600);
    expect(analysisResults.sales.min).toBe(800);

    // Test analysis results for 'revenue' attribute (similar to Test case 1).
    expect(analysisResults.revenue.mean).toBeCloseTo(22933.33);
    expect(analysisResults.revenue.max).toBe(32000);
    expect(analysisResults.revenue.min).toBe(12800);

    // Test analysis results for 'quantity' attribute.
    expect(analysisResults.quantity.mean).toBeCloseTo(116.67);
    expect(analysisResults.quantity.max).toBe(200);
    expect(analysisResults.quantity.min).toBe(50);

    // Test analysis results for 'cost' attribute.
    expect(analysisResults.cost.mean).toBeCloseTo(14333.33);
    expect(analysisResults.cost.max).toBe(18000);
    expect(analysisResults.cost.min).toBe(10000);
  });
});
