/**
 * @namespace StringUtils
 *
 * Convert a hexadecimal color code to RGBA format.
 *
 * @param {string} hex - The hexadecimal color code (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns {string} The RGBA color code (e.g., "rgba(255, 0, 0, 0.5)").
 *
 * @example
 * const hexColor = "#FF0000";
 * const rgbaColor = hexToRgba(hexColor); // Output: "rgba(255, 0, 0, 1)"
 */
export declare function hexToRgba(hex: string): string;
