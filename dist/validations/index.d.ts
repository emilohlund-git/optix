import { isValidEmail } from "./isValidEmail";
import { validatePassword } from './validatePassword';
/**
 * @namespace ValidationUtils
 *
 * Validation utilities for TypeScript
 *
 * A collection of validation utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export declare namespace ValidationUtils {
    const email: typeof isValidEmail;
    const password: typeof validatePassword;
}
