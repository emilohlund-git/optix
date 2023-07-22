"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = void 0;
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
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
exports.shuffleArray = shuffleArray;
//# sourceMappingURL=index.js.map