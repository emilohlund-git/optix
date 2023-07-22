/**
 * @namespace ArrayUtils
 *
 * Find outliers in an array of numbers.
 *
 * An outlier is an observation that lies an abnormal distance from other values in a dataset.
 * This function calculates the average and standard deviation of the array, and then finds the values
 * that are beyond the threshold (threshold = average + 2 * standard deviation).
 *
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} An array containing the outliers.
 *
 * @example
 * const data = [10, 15, 12, 14, 8, 100, 9];
 * const outliers = findOutliers(data);
 * console.log(outliers); // Output: [100]
 */
export declare function findOutliers(numbers: number[]): number[];
