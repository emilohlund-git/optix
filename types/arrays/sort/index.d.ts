import { SortOrder } from "../../utils/compareValues/interfaces/SortOrder";
/**
 * @namespace ArrayUtils
 *
 * Sort an array in ascending or descending order.
 *
 * @function sortArray<T>
 * @template T The type of elements in the array.
 * @param {T[]} array An array of elements to sort.
 * @param {SortOrder} sortOrder The sorting order, either 'ASC' for ascending or 'DESC' for descending.
 * @returns {T[]} Returns a new sorted array without modifying the original array.
 *
 * @example
 * const numbers = [5, 10, 2, 8];
 * const sortedArray = sortArray(numbers, SortOrder.ASC);
 * console.log(sortedArray); // Output: [2, 5, 8, 10]
 *
 * @example
 * const strings = ['banana', 'apple', 'orange'];
 * const sortedStrings = sortArray(strings, SortOrder.DESC);
 * console.log(sortedStrings); // Output: ['orange', 'banana', 'apple']
 */
export declare function sortArray<T>(array: T[], sortOrder?: SortOrder): T[];
