"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateString = void 0;
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
function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
exports.truncateString = truncateString;
//# sourceMappingURL=index.js.map