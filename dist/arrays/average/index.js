"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Finds the average value in an array of numbers.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The average value in the array
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const averageValue = averageArray(numbers);
 * console.log(averageValue); // Output: 2.5
 */
function averageArray(numbers) {
    if (numbers.length === 0)
        return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
exports.averageArray = averageArray;
//# sourceMappingURL=index.js.map