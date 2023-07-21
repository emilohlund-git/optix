"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkArray = void 0;
/**
 * @namespace ArrayUtils
 *
 * Split an array into smaller arrays of a specified size.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} An array of smaller arrays (chunks).
 *
 * @example
 * const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const chunkedArray = chunkArray(originalArray, 3);
 * console.log(chunkedArray);
 * // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 *
 * @example
 * const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
 * const nameChunks = chunkArray(names, 2);
 * console.log(nameChunks);
 * // Output: [["Alice", "Bob"], ["Charlie", "David"], ["Eve"]]
 */
function chunkArray(arr, size) {
    if (size <= 0) {
        throw new Error("Size must be a positive number.");
    }
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
exports.chunkArray = chunkArray;
