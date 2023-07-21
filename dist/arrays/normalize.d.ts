/**
 * @namespace ArrayUtils
 *
 * Normalize an array of numbers to the specified range.
 *
 * This function takes an array of numbers and normalizes it to a specified range [min, max].
 * The normalization is performed using the formula: (x - min) / (max - min).
 * The resulting normalized value will lie between 0 and 1, inclusive, if all numbers in the
 * original array are within the range [min, max].
 *
 * @param {number[]} numbers An array of numbers to be normalized.
 * @param {number} min The minimum value of the desired range.
 * @param {number} max The maximum value of the desired range.
 * @returns {number[]} An array containing the normalized values.
 *
 * @example
 * const data = [10, 15, 12, 14, 8];
 * const normalizedData = normalizeArray(data, 0, 1);
 * console.log(normalizedData); // Output: [0.375, 0.875, 0.5, 0.75, 0]
 */
export declare function normalizeArray(numbers: number[], min: number, max: number): number[];
