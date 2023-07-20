import { GraphNode, Point } from "../types";

/**
 * Create a graph node for a given point.
 */
export function createGraphNode(id: string, data: Point): GraphNode<Point> {
  return { id, data, neighbors: [], parent: null };
}