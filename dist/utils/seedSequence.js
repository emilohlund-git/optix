"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSequence = void 0;
/**
 * Generates a pseudo-random number sequence using a seed value.
 * The sequence is an infinite iterator that produces pseudo-random numbers
 * based on the linear congruential generator (LCG) algorithm.
 *
 * @method seedSequence
 * @memberof RNG
 * @returns {IterableIterator<number>} An infinite iterator that generates pseudo-random numbers.
 *
 * @example
 * // Create an iterator for the seed sequence
 * const seedGenerator: IterableIterator<number> = RNG.seedSequence();
 *
 * // Get the next pseudo-random number from the sequence
 * const randomNumber1 = seedGenerator.next().value;
 * console.log(randomNumber1); // Output: e.g., 24571
 *
 * const randomNumber2 = seedGenerator.next().value;
 * console.log(randomNumber2); // Output: e.g., 16829
 *
 * // The sequence continues indefinitely, producing a new random number on each iteration.
 */
function* seedSequence() {
    let seed = Date.now();
    while (true) {
        seed = (seed * 9301 + 49297) % 233280;
        yield seed;
    }
}
exports.seedSequence = seedSequence;
