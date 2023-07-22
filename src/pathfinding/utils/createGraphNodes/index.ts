import { InternalUtils } from "../../../utils";
import { Connection } from "../../interfaces/Connection";
import { GraphNode } from "../../interfaces/GraphNode";
import { GraphNodeId } from "../../interfaces/GraphNodeId";
import { GraphNodeMap } from "../../interfaces/GraphNodeMap";
import { Point } from "../../interfaces/Point";

/**
 * @namespace InternalUtils
 * 
 * @function
 * 
 * Creates and connects graph nodes based on the given connections array.
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @param {Function} createDataFn - A function that takes a graph node ID and returns its associated data.
 * @param {number[]} dimensions - An array to store the dimensions [width, height] of the graph while creating nodes.
 * @returns {GraphNodeMap<T>} A map of graph nodes, where the node ID is mapped to the graph node.
 */
export function createGraphNodes<T extends Point>(connections: Connection[], createDataFn: (id: GraphNodeId) => T, dimensions: number[]): GraphNodeMap<T> {
  const nodes: GraphNodeMap<T> = new Map<GraphNodeId, GraphNode<T>>();

  connections.forEach(([fromId, toId]) => {
    if (!nodes.get(fromId)) {
      const fromData = createDataFn(fromId);
      nodes.set(fromId, InternalUtils.createGraphNode(fromId, fromData));

      // Update width and height if necessary
      dimensions[0] = Math.max(dimensions[0], fromData.x);
      dimensions[1] = Math.max(dimensions[1], fromData.y);
    }
    if (!nodes.get(toId)) {
      const toData = createDataFn(toId);
      nodes.set(toId, InternalUtils.createGraphNode(toId, toData));

      dimensions[0] = Math.max(dimensions[0], toData.x);
      dimensions[1] = Math.max(dimensions[1], toData.y);
    }

    const fromNode = nodes.get(fromId);
    const toNode = nodes.get(toId);

    if (toNode && fromNode) fromNode.neighbors.set(toId, toNode);
    if (fromNode && toNode) toNode.neighbors.set(fromId, fromNode);
  });

  return nodes;
}