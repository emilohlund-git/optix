/**
 * @namespace StringUtils
 * 
 * Checks if the given string contains repeated characters consecutively based on the specified limit.
 * 
 * @param {string} input - The string to check for repeated characters.
 * @param {number} limit - The maximum number of consecutive repeated characters allowed.
 * @returns {boolean} True if the string contains repeated characters within the specified limit, false otherwise.
 * 
 * @example
 * const stringWithRepeated = "P@sswwoorrd";
 * const hasRepeated = StringUtils.repeating(stringWithRepeated, 2);
 * console.log(hasRepeated); // Output: true (The string contains 'ss', 'oo', 'rr' which are repeated characters within the limit)
 * 
 * @example
 * const stringWithoutRepeated = "SecurePass123!";
 * const hasRepeated = StringUtils.repeating(stringWithoutRepeated, 2);
 * console.log(hasRepeated); // Output: false (The string does not contain repeated characters within the limit)
 */
export function hasRepeatedCharacters(input: string, limit: number): boolean {
  return new RegExp(`(.)\\1{${limit}}`).test(input);
}