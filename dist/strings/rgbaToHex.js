"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHex = void 0;
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
function rgbaToHex(rgba) {
    // Extract RGB values and alpha from the RGBA code
    const match = rgba.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
    if (match) {
        const r = parseInt(match[1], 10).toString(16).padStart(2, "0");
        const g = parseInt(match[2], 10).toString(16).padStart(2, "0");
        const b = parseInt(match[3], 10).toString(16).padStart(2, "0");
        const a = Math.round(parseFloat(match[4]) * 255).toString(16).padStart(2, "0");
        return `#${r}${g}${b}${a}`.toUpperCase();
    }
    // If invalid format, return the original string
    return rgba;
}
exports.rgbaToHex = rgbaToHex;
