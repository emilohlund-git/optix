import { PasswordValidationOptions } from "./interfaces/PasswordValidationOptions";
/**
 * @namespace ValidationUtils
 *
 * Validates a password based on the provided options.
 * @param {string} password - The password to validate.
 * @param {PasswordValidationOptions} [options] - The options to customize the password validation criteria.
 * @returns {string[]} An array of strings representing validation failures. An empty array means the password is valid.
 *
 * @example
 * const password = "SecurePass123!";
 * const options = {
 *   minLength: 8,
 *   maxLength: 20,
 *   requireUppercase: true,
 *   requireLowercase: true,
 *   requireNumbers: true,
 *   requireSpecialCharacters: true,
 *   disallowRepeatedCharacters: true,
 *   allowedNumberOfRepeatingCharacters: 2,
 *   disallowSequentialCharacters: true,
 *   customMessages: {
 *     minLength: "";
 *     maxLength: "";
 *     requireUppercase: "";
 *     requireLowercase: "";
 *     requireNumbers: "";
 *     specialCharacters: "";
 *     repeatedCharacters: "";
 *     sequentialCharacters: "";
 *   }
 * };
 *
 * const isValid = validatePassword(password, options);
 * console.log(isValid); // Output: true (The password meets all the criteria)
 *
 * @example
 * const weakPassword = "password";
 * const optionsWeakPassword = {
 *   minLength: 8,
 *   customMessages: {
 *     minLength: "Your password must be at least 8 characters.",
 *   },
 * };
 * const validationFailuresWeakPassword = validatePassword(weakPassword, optionsWeakPassword);
 * console.log(validationFailuresWeakPassword);
 * // Output: ["Your password must be at least 8 characters."] (The password is too weak)
 */
export declare function validatePassword(password: string, options?: PasswordValidationOptions): string[];
