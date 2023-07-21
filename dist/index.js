"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.ValidationUtils = exports.StringUtils = exports.RNG = exports.PathfindingUtils = exports.MathUtils = exports.InternalUtils = exports.ArrayUtils = void 0;
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
const types = __importStar(require("./types"));
exports.types = types;
const utils_1 = require("./utils");
Object.defineProperty(exports, "InternalUtils", { enumerable: true, get: function () { return utils_1.InternalUtils; } });
const randomNumberGenerator_1 = require("./utils/randomNumberGenerator");
Object.defineProperty(exports, "RNG", { enumerable: true, get: function () { return randomNumberGenerator_1.RNG; } });
const validations_1 = require("./validations");
Object.defineProperty(exports, "ValidationUtils", { enumerable: true, get: function () { return validations_1.ValidationUtils; } });
