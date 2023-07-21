"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
const analyzeData_1 = require("./analyzeData");
const average_1 = require("./average");
const chunk_1 = require("./chunk");
const findOutliers_1 = require("./findOutliers");
const max_1 = require("./max");
const median_1 = require("./median");
const min_1 = require("./min");
const normalize_1 = require("./normalize");
const range_1 = require("./range");
const shuffle_1 = require("./shuffle");
const sort_1 = require("./sort");
const standardDeviation_1 = require("./standardDeviation");
const sum_1 = require("./sum");
/**
 * @namespace ArrayUtils
 *
 * Array utilities for TypeScript
 *
 * A collection of array utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
var ArrayUtils;
(function (ArrayUtils) {
    ArrayUtils.sort = sort_1.sortArray;
    ArrayUtils.median = median_1.medianArray;
    ArrayUtils.deviation = standardDeviation_1.standardDeviationArray;
    ArrayUtils.sum = sum_1.sumArray;
    ArrayUtils.shuffle = shuffle_1.shuffleArray;
    ArrayUtils.range = range_1.rangeArray;
    ArrayUtils.normalize = normalize_1.normalizeArray;
    ArrayUtils.min = min_1.minArray;
    ArrayUtils.max = max_1.maxArray;
    ArrayUtils.analyze = analyzeData_1.analyzeNumericObjectArray;
    ArrayUtils.mean = average_1.averageArray;
    ArrayUtils.chunk = chunk_1.chunkArray;
    ArrayUtils.outliers = findOutliers_1.findOutliers;
})(ArrayUtils || (exports.ArrayUtils = ArrayUtils = {}));
