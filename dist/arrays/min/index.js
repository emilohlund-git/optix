"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Finds the smallest value in an array of numbers.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The smallest value in the array
 *
 * @example
 * const numbers = [5, 10, 2, 8];
 * const minValue = minArray(numbers);
 * console.log(minValue); // Output: 2
 */
function minArray(numbers) {
    if (numbers.length === 0)
        return 0;
    return Math.min(...numbers);
}
exports.minArray = minArray;
//# sourceMappingURL=index.js.map