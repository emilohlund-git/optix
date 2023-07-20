/**
 * @namespace StringUtils
 * 
 * Truncate a string to a specified maximum length and append an ellipsis if needed.
 *
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 *
 * @example
 * const originalString = "hello, world!";
 * const truncatedString = StringUtils.truncateString(originalString, 5);
 * console.log(truncatedString); // Output: "hello..."
 */
export function truncateString(str: string, maxLength: number): string {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
