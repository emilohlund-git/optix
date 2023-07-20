/**
 * Enum representing the sorting order.
 */
export type SortOrder = 'ASC' | 'DESC';

/**
 * Represents the result of data analysis, providing various statistical measures and transformations.
 * @property {number} average - The average value of the data, representing the central tendency.
 * @property {number} max - The maximum value in the data, representing the highest recorded value.
 * @property {number} min - The minimum value in the data, representing the lowest recorded value.
 * @property {number} median - The median value of the data, representing the middle value.
 * @property {number[]} range - The range of the data, represented as an array of numbers within the range.
 * @property {number[]} normalized - The data normalized to the range [0, 1], for comparative analysis.
 * @property {number} standardDeviation - The standard deviation of the data, representing data dispersion.
 * @property {number} sum - The sum of all values in the data, useful for total accumulation.
 * @property {number[]} sorted - The data sorted in ascending order, for better visualization.
 * @property {number[]} shuffled - The data shuffled randomly, useful for randomization needs.
 * @property {number[]} outliers - Any outliers found in the data, indicating unusual observations.
 */
export type AnalyzeDataResult = {
  average: number;
  max: number;
  min: number;
  median: number;
  range: number[];
  normalized: number[];
  standardDeviation: number;
  sum: number;
  sorted: number[];
  shuffled: number[];
  outliers: number[];
};