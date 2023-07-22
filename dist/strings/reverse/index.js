"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
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
function reverseString(str) {
    return str.split("").reverse().join("");
}
exports.reverseString = reverseString;
//# sourceMappingURL=index.js.map