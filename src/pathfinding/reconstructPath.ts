import { GraphNode, Point } from "../types";

/**
 * @namespace PathfindingUtils
 * 
 * Reconstructs the path from the end node to the start node using the parent links.
 * This function is typically used after applying the A* pathfinding algorithm to obtain the
 * final path from the start node to the goal node.
 * 
 * @param {GraphNode<Point>} node - The end node of the pathfinding.
 * @param {Object.<string, GraphNode<Point> | null>} cameFrom - An object that stores the parent links for each node.
 * @returns {Point[]} An array of nodes representing the path from start to end.
 * 
 * @example
 * // Define nodes and connections for the graph
 * const connections: [string, string][] = [
 *   ["0,0", "1,0"],
 *   ["1,0", "1,1"],
 *   ["1,1", "2,1"],
 *   ["0,1", "0,2"],
 *   ["1,2", "2,2"],
 *   ["0,2", "1,2"],
 * ];
 * 
 * const startData: Point = { x: 0, y: 0 };
 * const goalData: Point = { x: 2, y: 2 };
 * 
 * // Perform A* pathfinding algorithm
 * const pathNodes = findPath(startData, goalData, connections);
 * 
 * // Reconstruct the path from the end node to the start node
 * const path = reconstructPath(pathNodes[pathNodes.length - 1], cameFrom);
 * 
 * console.log(path);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 */
export function reconstructPath<T extends Point>(node: GraphNode<T>, cameFrom: { [id: string]: GraphNode<T> | null }): Point[] {
  const path: Point[] = [];
  let currentNode: GraphNode<T> | null = node;

  while (currentNode) {
    path.unshift(currentNode.data);
    currentNode = cameFrom[currentNode.id];
  }

  return path;
}