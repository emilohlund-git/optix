/**
 * @namespace MathUtils
 * 
 * Perform linear interpolation between two values.
 *
 * @param {number} from - The starting value.
 * @param {number} to - The ending value.
 * @param {number} t - The interpolation factor (0 to 1).
 * @returns {number} The interpolated value.
 * 
 * @example
 * const interpolatedValue = lerp(0, 100, 0.5);
 * console.log(interpolatedValue); // Output: 50 (midway between 0 and 100)
 */
export function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}
