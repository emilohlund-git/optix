"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgba = void 0;
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
function hexToRgba(hex) {
    // Extract RGB values from the hexadecimal code
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    // Check if the hexadecimal code contains alpha (RGBA format)
    if (hex.length === 9) {
        const a = (parseInt(hex.slice(7, 9), 16) / 255).toFixed(2);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    // If no alpha, use RGB format
    return `rgba(${r}, ${g}, ${b}, 1)`;
}
exports.hexToRgba = hexToRgba;
//# sourceMappingURL=hexToRgba.js.map