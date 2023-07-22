"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
const clamp_1 = require("./clamp");
const degToRad_1 = require("./degToRad");
const lerp_1 = require("./lerp");
const radToDeg_1 = require("./radToDeg");
/**
 * @namespace MathUtils
 *
 * Math utilities for TypeScript
 *
 * A collection of math utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
var MathUtils;
(function (MathUtils) {
    MathUtils.clamp = clamp_1.clamp;
    MathUtils.degToRad = degToRad_1.degToRad;
    MathUtils.lerp = lerp_1.lerp;
    MathUtils.radToDeg = radToDeg_1.radToDeg;
})(MathUtils || (exports.MathUtils = MathUtils = {}));
//# sourceMappingURL=index.js.map