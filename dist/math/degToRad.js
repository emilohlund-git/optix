"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.degToRad = void 0;
/**
 * @namespace MathUtils
 *
 * Convert degrees to radians.
 *
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 *
 * @example
 * const radians = degToRad(180);
 * console.log(radians); // Output: 3.141592653589793 (approximately π)
 */
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
exports.degToRad = degToRad;
