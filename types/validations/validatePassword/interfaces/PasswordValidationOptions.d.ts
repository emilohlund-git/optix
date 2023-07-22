/**
 * Password validation options to customize the criteria for password strength.
 * @interface PasswordValidationOptions
 * @property {number} [minLength] - Minimum allowed password length.
 * @property {number} [maxLength] - Maximum allowed password length.
 * @property {boolean} [requireUppercase] - Whether to require at least one uppercase letter.
 * @property {boolean} [requireLowercase] - Whether to require at least one lowercase letter.
 * @property {boolean} [requireNumbers] - Whether to require at least one number.
 * @property {boolean} [requireSpecialCharacters] - Whether to require at least one special character (e.g., !@#$%^&*).
 * @property {boolean} [disallowRepeatedCharacters] - Whether to disallow repeated characters.
 * @property {boolean} [allowedNumberOfRepeatingCharacters] - Number of repeating characters allowed (e.g. 2)
 * @property {boolean} [disallowSequentialCharacters] - Whether to disallow sequential characters (e.g., abc, 123).
 * @property {Object} [customMessages] - An object containing custom error messages for each validation rule.
 * @property {string} [customMessages.minLength] - Custom error message for minimum length validation.
 * @property {string} [customMessages.maxLength] - Custom error message for maximum length validation.
 * @property {string} [customMessages.requireUppercase] - Custom error message for requiring uppercase letter validation.
 * @property {string} [customMessages.requireLowercase] - Custom error message for requiring lowercase letter validation.
 * @property {string} [customMessages.requireNumbers] - Custom error message for requiring number validation.
 * @property {string} [customMessages.requireSpecialCharacters] - Custom error message for requiring special character validation.
 * @property {string} [customMessages.disallowRepeatedCharacters] - Custom error message for disallowing repeated characters validation.
 * @property {string} [customMessages.disallowSequentialCharacters] - Custom error message for disallowing sequential characters validation.
 */
export interface PasswordValidationOptions {
    minLength?: number;
    maxLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumbers?: boolean;
    requireSpecialCharacters?: boolean;
    disallowRepeatedCharacters?: boolean;
    allowedNumberOfRepeatingCharacters?: number;
    disallowSequentialCharacters?: boolean;
    customMessages?: {
        minLength?: string;
        maxLength?: string;
        requireUppercase?: string;
        requireLowercase?: string;
        requireNumbers?: string;
        specialCharacters?: string;
        repeatedCharacters?: string;
        sequentialCharacters?: string;
    };
}
