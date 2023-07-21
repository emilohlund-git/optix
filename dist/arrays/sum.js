"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Returns the combined sum of all numbers in an array.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The sum of all values in an array.
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const arraySum = sumArray(numbers);
 * console.log(arraySum); // Output: 10
 */
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
exports.sumArray = sumArray;
