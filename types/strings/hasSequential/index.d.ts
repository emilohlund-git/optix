/**
 * @namespace StringUtils
 *
 * Checks if the given input string contains any sequential characters (three consecutive letters or numbers in alphabetical or numerical order) regardless of the case.
 *
 * @param {string} input - The string to check for sequential characters.
 * @returns {boolean} True if the string contains sequential characters, false otherwise.
 *
 * @example
 * const stringWithSequential = "Abc123!";
 * const hasSequential = StringUtils.sequential(stringWithSequential);
 * console.log(hasSequential); // Output: true (The string contains sequential characters 'Abc')
 *
 * @example
 * const stringWithoutSequential = "SecurePass123!";
 * const hasSequential = StringUtils.sequential(stringWithoutSequential);
 * console.log(hasSequential); // Output: false (The string does not contain sequential characters)
 */
export declare function hasSequentialCharacters(input: string): boolean;
