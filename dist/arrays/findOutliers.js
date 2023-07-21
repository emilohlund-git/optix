"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOutliers = void 0;
const sort_1 = require("./sort");
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
function findOutliers(numbers) {
    const sortedNumbers = (0, sort_1.sortArray)(numbers);
    const q1Index = Math.floor(sortedNumbers.length * 0.25);
    const q3Index = Math.floor(sortedNumbers.length * 0.75);
    const q1 = sortedNumbers[q1Index];
    const q3 = sortedNumbers[q3Index];
    const iqr = q3 - q1;
    const threshold = 1.5 * iqr;
    return sortedNumbers.filter((number) => number < q1 - threshold || number > q3 + threshold);
}
exports.findOutliers = findOutliers;
