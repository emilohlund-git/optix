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
export function minArray(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}