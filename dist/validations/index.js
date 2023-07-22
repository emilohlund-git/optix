"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = void 0;
const isValidEmail_1 = require("./isValidEmail");
const validatePassword_1 = require("./validatePassword");
/**
 * @namespace ValidationUtils
 *
 * Validation utilities for TypeScript
 *
 * A collection of validation utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
var ValidationUtils;
(function (ValidationUtils) {
    ValidationUtils.email = isValidEmail_1.isValidEmail;
    ValidationUtils.password = validatePassword_1.validatePassword;
})(ValidationUtils || (exports.ValidationUtils = ValidationUtils = {}));
//# sourceMappingURL=index.js.map