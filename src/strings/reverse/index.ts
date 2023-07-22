/**
* @namespace StringUtils
*
* Reverse the characters of a string.
*
* @param {string} str - The input string.
* @returns {string} The reversed string.
*
* @example
* const originalString = "hello, world!";
* const reversedString = StringUtils.reverseString(originalString);
* console.log(reversedString); // Output: "!dlrow ,olleh"
*/
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
