import { GraphNode } from "../../interfaces/GraphNode";
import { GraphNodeId } from "../../interfaces/GraphNodeId";
/**
 * @namespace InternalUtils
 *
 * Create a graph node for a given point.
 * @param {T} data - The data associated with the node.
 */
export declare function createGraphNode<T>(id: GraphNodeId, data: T): GraphNode<T>;
