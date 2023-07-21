"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const capitalizeFirstLetter_1 = require("./capitalizeFirstLetter");
const containsWhitespace_1 = require("./containsWhitespace");
const extractSubstringsByPattern_1 = require("./extractSubstringsByPattern");
const getWordFrequency_1 = require("./getWordFrequency");
const hasSequential_1 = require("./hasSequential");
const hexToRgba_1 = require("./hexToRgba");
const isRepeating_1 = require("./isRepeating");
const reverse_1 = require("./reverse");
const rgbaToHex_1 = require("./rgbaToHex");
const titleCase_1 = require("./titleCase");
const tokenize_1 = require("./tokenize");
const truncate_1 = require("./truncate");
/**
 * @namespace StringUtils
 *
 * String utilities for TypeScript
 *
 * A collection of string utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
var StringUtils;
(function (StringUtils) {
    StringUtils.capitalize = capitalizeFirstLetter_1.capitalizeFirstLetter;
    StringUtils.extract = extractSubstringsByPattern_1.extractSubstringsByPattern;
    StringUtils.frequency = getWordFrequency_1.getWordFrequency;
    StringUtils.reverse = reverse_1.reverseString;
    StringUtils.title = titleCase_1.titleCase;
    StringUtils.tokenize = tokenize_1.tokenizeSentence;
    StringUtils.truncate = truncate_1.truncateString;
    StringUtils.containsWhitespace = containsWhitespace_1.containsWhitespace;
    StringUtils.hexToRgba = hexToRgba_1.hexToRgba;
    StringUtils.rgbaToHex = rgbaToHex_1.rgbaToHex;
    StringUtils.hasSequential = hasSequential_1.hasSequentialCharacters;
    StringUtils.isRepeating = isRepeating_1.hasRepeatedCharacters;
})(StringUtils || (exports.StringUtils = StringUtils = {}));
