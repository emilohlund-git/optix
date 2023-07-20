import { StringUtils } from "../strings";
import { PasswordValidationOptions } from "../types";

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
export function validatePassword(password: string, options?: PasswordValidationOptions): string[] {
  // Set default options if not provided
  const {
    minLength = 8,
    maxLength = 100,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialCharacters = true,
    disallowRepeatedCharacters = true,
    allowedNumberOfRepeatingCharacters = 2,
    disallowSequentialCharacters = true,
    customMessages = {},
  } = options || {};

  const validationFailures: string[] = [];

  if (password.length < minLength) {
    const minLengthMessage = customMessages.minLength || `Password must be at least ${minLength} characters.`;
    validationFailures.push(minLengthMessage);
  }

  if (password.length > maxLength) {
    const maxLengthMessage = customMessages.maxLength || `Password must not exceed ${maxLength} characters.`;
    validationFailures.push(maxLengthMessage);
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    const requireUppercaseMessage = customMessages.requireUppercase || "Password must contain at least one uppercase letter.";
    validationFailures.push(requireUppercaseMessage);
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    const requireLowercaseMessage = customMessages.requireLowercase || "Password must contain at least one lowercase letter.";
    validationFailures.push(requireLowercaseMessage);
  }

  if (requireNumbers && !/\d/.test(password)) {
    const requireNumbersMessage = customMessages.requireNumbers || "Password must contain at least one number.";
    validationFailures.push(requireNumbersMessage);
  }

  if (requireSpecialCharacters && !/[^a-zA-Z0-9]/.test(password)) {
    const requireSpecialCharactersMessage = customMessages.specialCharacters || "Password must contain at least one special character.";
    validationFailures.push(requireSpecialCharactersMessage);
  }

  if (disallowRepeatedCharacters && StringUtils.isRepeating(password, allowedNumberOfRepeatingCharacters)) {
    const disallowRepeatedCharactersMessage = customMessages.repeatedCharacters || "Password must not contain repeated characters.";
    validationFailures.push(disallowRepeatedCharactersMessage);
  }

  if (disallowSequentialCharacters && StringUtils.hasSequential(password)) {
    const disallowSequentialCharactersMessage = customMessages.sequentialCharacters || "Password must not contain sequential characters.";
    validationFailures.push(disallowSequentialCharactersMessage);
  }

  return validationFailures;
}