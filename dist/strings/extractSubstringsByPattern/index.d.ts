/**
 * @namespace StringUtils
 *
 * Extract all substrings from a string that match a given pattern.
 *
 * @param {string} str - The input string.
 * @param {RegExp} pattern - The regular expression pattern to match substrings.
 * @returns {string[]} An array containing all substrings that match the pattern.
 *
 * @example
 * const originalString = "The quick brown fox jumps over the lazy dog";
 * const pattern = /[aeiou]{2}/g; // Match two consecutive vowels
 * const matchedSubstrings = extractSubstringsByPattern(originalString, pattern);
 * console.log(matchedSubstrings);
 * // Output: ["ui", "ow", "um", "ps", "eo", "er", "az"]
 */
export declare function extractSubstringsByPattern(str: string, pattern: RegExp): string[];
