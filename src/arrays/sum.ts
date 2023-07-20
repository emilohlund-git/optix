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
export function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}