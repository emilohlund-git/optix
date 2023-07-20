import { ArrayUtils } from '.';
import { AnalyzeDataResult } from '../types';

/**
 * @namespace ArrayUtils
 * 
 * Analyze an array of numbers and provide various statistical measures and transformations.
 *
 * This utility function takes an input array of numerical data and performs a comprehensive analysis
 * to calculate various statistical measures and transformations on the data. The function calculates
 * the average, maximum, minimum, median, range, normalized values, standard deviation, sum, sorted data,
 * and shuffled data of the input array. Additionally, it identifies any outliers present in the data.
 *
 * @param {number[]} data - The input array of numbers to be analyzed.
 *
 * @returns {AnalyzeDataResult} An object containing the analysis results.
 *
 * @example
 * const temperatureData = [25.6, 26.2, 24.8, 23.5, 27.3, 26.8, 27.9, 24.5, 25.2, 26.1];
 * const analysisResults = analyzeDataArray(temperatureData);
 *
 * console.log('Average Temperature:', analysisResults.average);
 * console.log('Max Temperature:', analysisResults.max);
 * console.log('Min Temperature:', analysisResults.min);
 * console.log('Median Temperature:', analysisResults.median);
 * console.log('Temperature Range:', analysisResults.range);
 * console.log('Normalized Temperatures:', analysisResults.normalized);
 * console.log('Temperature Standard Deviation:', analysisResults.standardDeviation);
 * console.log('Total Temperature Sum:', analysisResults.sum);
 * console.log('Sorted Temperatures:', analysisResults.sorted);
 * console.log('Shuffled Temperatures:', analysisResults.shuffled);
 * console.log('Outliers:', analysisResults.outliers);
 */
export function analyzeDataArray(data: number[]): AnalyzeDataResult {
  const average = ArrayUtils.average(data);
  const max = ArrayUtils.max(data);
  const min = ArrayUtils.min(data);
  const median = ArrayUtils.median(data);
  const normalized = ArrayUtils.normalize(data, 0, 1);
  const standardDeviation = ArrayUtils.deviation(data);
  const sum = ArrayUtils.sum(data);
  const sorted = ArrayUtils.sort(data);
  const shuffled = ArrayUtils.shuffle(data);
  const outliers = ArrayUtils.outliers(data);

  return {
    average,
    max,
    min,
    median,
    normalized,
    standardDeviation,
    sum,
    sorted,
    shuffled,
    outliers,
  };
}
