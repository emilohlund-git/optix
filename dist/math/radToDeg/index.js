"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radToDeg = void 0;
/**
 * @namespace MathUtils
 *
 * Convert radians to degrees.
 *
 * @param {number} radians - The value in radians.
 * @returns {number} The value in degrees.
 *
 * @example
 * const degrees = radToDeg(Math.PI);
 * console.log(degrees); // Output: 180 (approximately 180 degrees)
 */
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}
exports.radToDeg = radToDeg;
//# sourceMappingURL=index.js.map