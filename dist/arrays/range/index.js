"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangeArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Generates an array of numbers in a given range.
 *
 * @param {number} start The start value of the range
 * @param {number} end The end value of the range
 * @returns {number[]} An array of numbers in the specified range
 *
 * @example
 * const numbers = rangeArray(1, 5);
 * console.log(numbers); // Output: [1, 2, 3, 4, 5]
 */
function rangeArray(start, end) {
    const lowerBound = start < end ? start : end;
    const upperBound = start < end ? end : start;
    const length = upperBound - lowerBound + 1;
    return Array.from({ length }, (_, index) => lowerBound + index);
}
exports.rangeArray = rangeArray;
//# sourceMappingURL=index.js.map