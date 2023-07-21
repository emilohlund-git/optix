import { Connection, GraphNodeId, GraphNodeMap } from "../types";
/**
 * @namespace InternalUtils
 *
 * Creates and connects graph nodes based on the given connections array.
 * @function
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @returns {GraphNode<T>[]} An array of connected graph nodes.
 */
export declare function createGraphNodes<T>(connections: Connection[], createDataFn: (id: GraphNodeId) => T): GraphNodeMap<T>;