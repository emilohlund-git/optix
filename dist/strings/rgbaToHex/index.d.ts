/**
 * @namespace StringUtils
 *
 * Convert an RGBA color code to hexadecimal format.
 *
 * @param {string} rgba - The RGBA color code (e.g., "rgba(255, 0, 0, 0.5)").
 * @returns {string} The hexadecimal color code (e.g., "#RRGGBB" or "#RRGGBBAA").
 *
 * @example
 * const rgbaColor = "rgba(255, 0, 0, 0.5)";
 * const hexColor = rgbaToHex(rgbaColor); // Output: "#FF000080"
 */
export declare function rgbaToHex(rgba: string): string;
