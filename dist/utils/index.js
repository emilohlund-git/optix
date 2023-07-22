"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalUtils = void 0;
const createGraphNode_1 = require("../pathfinding/utils/createGraphNode");
const createGraphNodes_1 = require("../pathfinding/utils/createGraphNodes");
const generatePointId_1 = require("../pathfinding/utils/generatePointId");
const compareValues_1 = require("./compareValues");
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
//# sourceMappingURL=index.js.map