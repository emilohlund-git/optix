"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateString = exports.tokenizeSentence = exports.titleCase = exports.sumArray = exports.standardDeviationArray = exports.sortArray = exports.shuffleArray = exports.reverseString = exports.rangeArray = exports.normalizeArray = exports.minArray = exports.medianArray = exports.maxArray = exports.getWordFrequency = exports.findOutliers = exports.extractSubstringsByPattern = exports.compareValues = exports.chunkArray = exports.capitalizeFirstLetter = exports.averageArray = exports.analyzeDataArray = void 0;
const arrays_1 = require("./arrays");
Object.defineProperty(exports, "analyzeDataArray", { enumerable: true, get: function () { return arrays_1.analyzeDataArray; } });
Object.defineProperty(exports, "averageArray", { enumerable: true, get: function () { return arrays_1.averageArray; } });
Object.defineProperty(exports, "chunkArray", { enumerable: true, get: function () { return arrays_1.chunkArray; } });
Object.defineProperty(exports, "findOutliers", { enumerable: true, get: function () { return arrays_1.findOutliers; } });
Object.defineProperty(exports, "maxArray", { enumerable: true, get: function () { return arrays_1.maxArray; } });
Object.defineProperty(exports, "medianArray", { enumerable: true, get: function () { return arrays_1.medianArray; } });
Object.defineProperty(exports, "minArray", { enumerable: true, get: function () { return arrays_1.minArray; } });
Object.defineProperty(exports, "normalizeArray", { enumerable: true, get: function () { return arrays_1.normalizeArray; } });
Object.defineProperty(exports, "rangeArray", { enumerable: true, get: function () { return arrays_1.rangeArray; } });
Object.defineProperty(exports, "shuffleArray", { enumerable: true, get: function () { return arrays_1.shuffleArray; } });
Object.defineProperty(exports, "sortArray", { enumerable: true, get: function () { return arrays_1.sortArray; } });
Object.defineProperty(exports, "standardDeviationArray", { enumerable: true, get: function () { return arrays_1.standardDeviationArray; } });
Object.defineProperty(exports, "sumArray", { enumerable: true, get: function () { return arrays_1.sumArray; } });
const strings_1 = require("./strings");
Object.defineProperty(exports, "capitalizeFirstLetter", { enumerable: true, get: function () { return strings_1.capitalizeFirstLetter; } });
Object.defineProperty(exports, "extractSubstringsByPattern", { enumerable: true, get: function () { return strings_1.extractSubstringsByPattern; } });
Object.defineProperty(exports, "getWordFrequency", { enumerable: true, get: function () { return strings_1.getWordFrequency; } });
Object.defineProperty(exports, "reverseString", { enumerable: true, get: function () { return strings_1.reverseString; } });
Object.defineProperty(exports, "titleCase", { enumerable: true, get: function () { return strings_1.titleCase; } });
Object.defineProperty(exports, "tokenizeSentence", { enumerable: true, get: function () { return strings_1.tokenizeSentence; } });
Object.defineProperty(exports, "truncateString", { enumerable: true, get: function () { return strings_1.truncateString; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "compareValues", { enumerable: true, get: function () { return utils_1.compareValues; } });
