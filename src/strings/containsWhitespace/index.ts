/**
 * @namespace StringUtils
 * 
 * Check if a string contains whitespace.
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string contains whitespace, false otherwise.
 * 
 * @example
 * const inputString1 = "Hello, world!"; // No whitespace
 * const inputString2 = "Hello, world! "; // Contains whitespace
 *
 * console.log(containsWhitespace(inputString1)); // Output: false
 * console.log(containsWhitespace(inputString2)); // Output: true
 */
export function containsWhitespace(str: string) {
  // Regular expression to match any whitespace character (\s).
  const whitespaceRegex = /\s/;

  return whitespaceRegex.test(str);
}