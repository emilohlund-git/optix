"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = exports.StringUtils = exports.RNG = exports.PathfindingUtils = exports.MathUtils = exports.InternalUtils = exports.ArrayUtils = void 0;
/**
 * @namespace smoothie.ts
 *
 * Utility Library for TypeScript
 *
 * A collection of utility functions to simplify common tasks and improve code quality in TypeScript projects.
 *
 * @version 1.0.0
 * @license ISC
 * @author Emil Ölund
 * @see {@link https://github.com/emilohlund-git/smoothie-ts}
 */
const arrays_1 = require("./arrays");
Object.defineProperty(exports, "ArrayUtils", { enumerable: true, get: function () { return arrays_1.ArrayUtils; } });
const math_1 = require("./math");
Object.defineProperty(exports, "MathUtils", { enumerable: true, get: function () { return math_1.MathUtils; } });
const pathfinding_1 = require("./pathfinding");
Object.defineProperty(exports, "PathfindingUtils", { enumerable: true, get: function () { return pathfinding_1.PathfindingUtils; } });
const strings_1 = require("./strings");
Object.defineProperty(exports, "StringUtils", { enumerable: true, get: function () { return strings_1.StringUtils; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "InternalUtils", { enumerable: true, get: function () { return utils_1.InternalUtils; } });
const randomNumberGenerator_1 = require("./utils/randomNumberGenerator");
Object.defineProperty(exports, "RNG", { enumerable: true, get: function () { return randomNumberGenerator_1.RNG; } });
const validations_1 = require("./validations");
Object.defineProperty(exports, "ValidationUtils", { enumerable: true, get: function () { return validations_1.ValidationUtils; } });
//# sourceMappingURL=index.js.map