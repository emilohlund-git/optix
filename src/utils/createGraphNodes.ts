import { InternalUtils } from ".";
import { Connection, GraphNode, GraphNodeId, GraphNodeMap } from "../types";

/**
 * @namespace InternalUtils
 * 
 * Creates and connects graph nodes based on the given connections array.
 * @function
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @returns {GraphNode<T>[]} An array of connected graph nodes.
 */
export function createGraphNodes<T>(connections: Connection[], createDataFn: (id: GraphNodeId) => T): GraphNodeMap<T> {
  const nodes: GraphNodeMap<T> = new Map<GraphNodeId, GraphNode<T>>();

  connections.forEach(([fromId, toId]) => {
    if (!nodes.get(fromId)) {
      const fromData = createDataFn(fromId);
      nodes.set(fromId, InternalUtils.createGraphNode(fromId, fromData));
    }
    if (!nodes.get(toId)) {
      const toData = createDataFn(toId);
      nodes.set(toId, InternalUtils.createGraphNode(toId, toData));
    }

    const fromNode = nodes.get(fromId);
    const toNode = nodes.get(toId);

    if (toNode && fromNode) fromNode.neighbors.set(toId, toNode);
    if (fromNode && toNode) toNode.neighbors.set(fromId, fromNode);
  });

  return nodes;
}