"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Finds the maximum value in an array of numbers.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The maximum value in the array
 *
 * @example
 * const numbers = [5, 10, 2, 8];
 * const maxValue = maxArray(numbers);
 * console.log(maxValue); // Output: 10
 */
function maxArray(numbers) {
    if (numbers.length === 0)
        return 0;
    return Math.max(...numbers);
}
exports.maxArray = maxArray;
