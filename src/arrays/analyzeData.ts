import { AnalyzeDataResult } from '../types';
import {
  averageArray,
  findOutliers,
  maxArray,
  medianArray,
  minArray,
  normalizeArray,
  rangeArray,
  shuffleArray,
  sortArray,
  standardDeviationArray,
  sumArray,
} from './';

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
  const average = averageArray(data);
  const max = maxArray(data);
  const min = minArray(data);
  const median = medianArray(data);
  const range = rangeArray(min, max);
  const normalized = normalizeArray(data, 0, 1);
  const standardDeviation = standardDeviationArray(data);
  const sum = sumArray(data);
  const sorted = sortArray(data);
  const shuffled = shuffleArray(data);
  const outliers = findOutliers(data);

  return {
    average,
    max,
    min,
    median,
    range,
    normalized,
    standardDeviation,
    sum,
    sorted,
    shuffled,
    outliers,
  };
}
