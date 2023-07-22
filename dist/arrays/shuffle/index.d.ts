/**
 * @namespace ArrayUtils
 *
 * Shuffles the elements of an array randomly.
 *
 * @template T The type of elements in the array.
 * @param {T[]} array The array to be shuffled.
 * @returns {T[]} A new array with the elements randomly shuffled.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffledNumbers = shuffleArray(numbers);
 * console.log(shuffledNumbers); // Output: [3, 5, 1, 2, 4] (randomly shuffled)
 *
 * @example
 * const names = ['Alice', 'Bob', 'Charlie', 'David'];
 * const shuffledNames = shuffleArray(names);
 * console.log(shuffledNames); // Output: ['Bob', 'Charlie', 'Alice', 'David'] (randomly shuffled)
 */
export declare function shuffleArray<T>(array: T[]): T[];
