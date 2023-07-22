import { GraphNode } from "../../interfaces/GraphNode";
import { GraphNodeId } from "../../interfaces/GraphNodeId";
import { GraphNodeMap } from "../../interfaces/GraphNodeMap";

/**
 * @namespace InternalUtils
 * 
 * Create a graph node for a given point.
 * @param {T} data - The data associated with the node.
 */
export function createGraphNode<T>(id: GraphNodeId, data: T): GraphNode<T> {
  return { id, data, neighbors: new Map() as GraphNodeMap<T>, parent: null };
}