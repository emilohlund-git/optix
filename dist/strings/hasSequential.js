"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSequentialCharacters = void 0;
/**
 * @namespace StringUtils
 *
 * Checks if the given input string contains any sequential characters (three consecutive letters or numbers in alphabetical or numerical order) regardless of the case.
 *
 * @param {string} input - The string to check for sequential characters.
 * @returns {boolean} True if the string contains sequential characters, false otherwise.
 *
 * @example
 * const stringWithSequential = "Abc123!";
 * const hasSequential = StringUtils.sequential(stringWithSequential);
 * console.log(hasSequential); // Output: true (The string contains sequential characters 'Abc')
 *
 * @example
 * const stringWithoutSequential = "SecurePass123!";
 * const hasSequential = StringUtils.sequential(stringWithoutSequential);
 * console.log(hasSequential); // Output: false (The string does not contain sequential characters)
 */
function hasSequentialCharacters(input) {
    return /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789|890)/i.test(input);
}
exports.hasSequentialCharacters = hasSequentialCharacters;
