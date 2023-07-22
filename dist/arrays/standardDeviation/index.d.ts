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
export declare function standardDeviationArray(numbers: number[]): number;
