"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardDeviationArray = void 0;
const sum_1 = require("../sum/sum");
/**
 * @namespace ArrayUtils
 *
 * Calculates the standard deviation of an array of numbers.
 * The standard deviation measures the amount of variation or dispersion in a set of values.
 * It indicates how much individual values in the array differ from the average (mean) value.
 * A higher standard deviation suggests greater variability, while a lower value indicates less variability.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The standard deviation of the numbers
 *
 * @example
 * const numbers = [2, 4, 4, 4, 5, 5, 7, 9];
 * const standardDeviationValue = standardDeviationArray(numbers);
 * console.log(standardDeviationValue); // Output: 2
 */
function standardDeviationArray(numbers) {
    if (numbers.length === 0)
        return 0;
    const mean = (0, sum_1.sumArray)(numbers) / numbers.length;
    const squaredDifferences = numbers.map((num) => {
        const diff = num - mean;
        return diff * diff;
    });
    const variance = (0, sum_1.sumArray)(squaredDifferences) / numbers.length;
    return Math.sqrt(variance);
}
exports.standardDeviationArray = standardDeviationArray;
//# sourceMappingURL=standardDeviation.js.map