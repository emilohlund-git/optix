import { ArrayUtils } from "../../src";
import { AnalyzeDataResult } from "../../src/types";

describe('analyzeDataArray', () => {
  it('should analyze an array of numbers and return the correct analysis result', () => {
    const temperatureData = [25.6, 26.2, 24.8, 23.5, 27.3, 26.8, 27.9, 24.5, 25.2, 26.1];
    const analysisResults: AnalyzeDataResult = ArrayUtils.analyze(temperatureData);

    const roundToPrecision = (value: number, precision: number): number => {
      const factor = 10 ** precision;
      return Math.round(value * factor) / factor;
    };

    expect(analysisResults.average).toBeCloseTo(25.79, 2);
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
});
