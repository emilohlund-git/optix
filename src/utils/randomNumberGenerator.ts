import { Point, UUID } from "../types";

/**
 * @namespace InternalUtils
 * 
 * Represents a composable random number generator.
 * @class RNG
 * @example
 * // Generate a random integer between 1 and 100 (inclusive)
 * const randomInteger = RNG.integer(1, 100);
 * console.log(randomInteger); // Output: e.g., 42
 * 
 * // Generate a random floating-point number between 0 and 1 (inclusive)
 * const randomFloat = RNG.float(0, 1);
 * console.log(randomFloat); // Output: e.g., 0.12345
 * 
 * // Pick a random element from an array
 * const colors = ['red', 'blue', 'green', 'yellow'];
 * const randomColor = RNG.element(colors);
 * console.log(randomColor); // Output: e.g., "blue"
 */
export class RNG {
  private static seedGenerator: IterableIterator<number> = RNG.seedSequence();

  private static *seedSequence(): IterableIterator<number> {
    let seed = Date.now();
    while (true) {
      seed = (seed * 9301 + 49297) % 233280;
      yield seed;
    }
  }

  /**
   * Generate a random integer within a specified range (inclusive).
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @returns {number} A random integer within the specified range.
   * @example
   * const randomInteger = RNG.integer(1, 100);
   * console.log(randomInteger); // Output: e.g., 42
   */
  static integer(min: number, max: number): number {
    const range = max - min + 1;
    const nextSeed = RNG.seedGenerator.next().value;
    return Math.floor((nextSeed / 233280) * range) + min;
  }

  /**
   * Generate a random floating-point number within a specified range.
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @returns {number} A random floating-point number within the specified range.
   * @example
   * const randomFloat = RNG.float(0, 1);
   * console.log(randomFloat); // Output: e.g., 0.12345
   */
  static float(min: number, max: number): number {
    const nextSeed = RNG.seedGenerator.next().value;
    return (nextSeed / 233280) * (max - min) + min;
  }

  /**
   * Generate a random element from an array.
   * @template T
   * @param {T[]} array - The array from which to select a random element.
   * @returns {T} A random element from the array.
   * @example
   * const colors = ['red', 'blue', 'green', 'yellow'];
   * const randomColor = RNG.element(colors);
   * console.log(randomColor); // Output: e.g., "blue"
   */
  static element<T>(array: T[]): T {
    const index = RNG.integer(0, array.length - 1);
    return array[index];
  }

  /**
   * Generate a Universally Unique Identifier (UUID) using random hexadecimal characters.
   * The UUID follows the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', where 'x' represents a random hexadecimal digit (0-9, a-f),
   * and 'y' represents a random hexadecimal digit (8, 9, a, or b).
   * @returns {UUID} A randomly generated UUID.
   * @example
   * const uuid = RNG.UUID();
   * console.log(uuid); // Output: e.g., "f47ac10b-58cc-4372-a567-0e02b2c3d479"
   */
  static UUID(): UUID {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = RNG.integer(0, 15);
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }) as UUID;
  }

  /**
   * Generate a random 2D coordinate within a specified range.
   * @param {number} minX - The minimum x value of the range.
   * @param {number} maxX - The maximum x value of the range.
   * @param {number} minY - The minimum y value of the range.
   * @param {number} maxY - The maximum y value of the range.
   * @returns {Point} A random 2D coordinate within the specified range.
   * @example
   * const coordinate = RNG.coordinate(0, 100, -50, 50);
   * console.log(coordinate); // Output: e.g., { x: 75.123, y: 23.456 }
   */
  static coordinates(minX: number, maxX: number, minY: number, maxY: number): Point {
    const x = this.integer(minX, maxX);
    const y = this.integer(minY, maxY);
    return { x, y };
  }
}