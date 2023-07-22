"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
/**
 * @namespace MathUtils
 *
 * Clamp a value within a specified range.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The clamped value.
 *
 * @example
 * const clampedValue = clamp(15, 0, 10);
 * console.log(clampedValue); // Output: 10 (since 15 is greater than the max value of 10)
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
//# sourceMappingURL=clamp.js.map