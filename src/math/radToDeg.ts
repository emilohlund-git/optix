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
export function radToDeg(radians: number): number {
  return radians * (180 / Math.PI);
}
