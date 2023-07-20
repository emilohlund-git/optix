/**
 * @namespace StringUtils
 * 
 * Capitalize the first letter of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 * 
 * @example
 * const originalString = "hello, world!";
 * const capitalizedString = capitalizeFirstLetter(originalString);
 * console.log(capitalizedString); // Output: "Hello, world!"
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}