"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalUtils = void 0;
const compareValues_1 = require("./compareValues");
const createGraphNode_1 = require("./createGraphNode");
const createGraphNodes_1 = require("./createGraphNodes");
const generatePointId_1 = require("./generatePointId");
/**
 * @namespace InternalUtils
 *
 * Utilities used internally for the library
 *
 * A collection of utility functions to simplify internal tasks and improve code quality in TypeScript projects.
 */
var InternalUtils;
(function (InternalUtils) {
    InternalUtils.compare = compareValues_1.compareValues;
    InternalUtils.createGraphNode = createGraphNode_1.createGraphNode;
    InternalUtils.generatePointId = generatePointId_1.generatePointId;
    InternalUtils.createGraphNodes = createGraphNodes_1.createGraphNodes;
})(InternalUtils || (exports.InternalUtils = InternalUtils = {}));
