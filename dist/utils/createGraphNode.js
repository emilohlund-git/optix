"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphNode = void 0;
/**
 * @namespace InternalUtils
 *
 * Create a graph node for a given point.
 * @param {T} data - The data associated with the node.
 */
function createGraphNode(id, data) {
    return { id, data, neighbors: new Map(), parent: null };
}
exports.createGraphNode = createGraphNode;
