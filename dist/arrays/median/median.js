"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medianArray = void 0;
const sort_1 = require("../sort/sort");
/**
 * @namespace ArrayUtils
 *
 * Finds the median value in an array of numbers.
 * The median is the middle value of a sorted list of numbers. If the list has an odd number of elements,
 * the median is the middle number. If the list has an even number of elements, the median is the average
 * of the two middle numbers.
 *
 * @param {number[]} numbers An array of numbers
 * @returns {number} The median value in the array
 *
 * @example
 * const numbers = [5, 10, 2, 8, 4];
 * const medianValue = medianArray(numbers);
 * console.log(medianValue); // Output: 5
 *
 * @example
 * const numbers2 = [1, 2, 3, 4];
 * const medianValue2 = medianArray(numbers2);
 * console.log(medianValue2); // Output: 2.5
 */
function medianArray(numbers) {
    const sortedNumbers = (0, sort_1.sortArray)(numbers);
    const middle = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    }
    else {
        return sortedNumbers[middle];
    }
}
exports.medianArray = medianArray;
//# sourceMappingURL=median.js.map