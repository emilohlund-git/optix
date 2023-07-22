"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphNodes = void 0;
const __1 = require("..");
/**
 * @namespace InternalUtils
 *
 * Creates and connects graph nodes based on the given connections array.
 * @function
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @returns {GraphNode<T>[]} An array of connected graph nodes.
 */
function createGraphNodes(connections, createDataFn) {
    const nodes = new Map();
    connections.forEach(([fromId, toId]) => {
        if (!nodes.get(fromId)) {
            const fromData = createDataFn(fromId);
            nodes.set(fromId, __1.InternalUtils.createGraphNode(fromId, fromData));
        }
        if (!nodes.get(toId)) {
            const toData = createDataFn(toId);
            nodes.set(toId, __1.InternalUtils.createGraphNode(toId, toData));
        }
        const fromNode = nodes.get(fromId);
        const toNode = nodes.get(toId);
        if (toNode && fromNode)
            fromNode.neighbors.set(toId, toNode);
        if (fromNode && toNode)
            toNode.neighbors.set(fromId, fromNode);
    });
    return nodes;
}
exports.createGraphNodes = createGraphNodes;
//# sourceMappingURL=createGraphNodes.js.map