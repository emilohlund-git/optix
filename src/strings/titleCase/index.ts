/**
 * @namespace StringUtils
 * 
 * Convert a string to title case, capitalizing the first letter of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The string in title case.
 *
 * @example
 * const originalString = "hello, world!";
 * const titleCasedString = StringUtils.titleCase(originalString);
 * console.log(titleCasedString); // Output: "Hello, World!"
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}