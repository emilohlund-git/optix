import { GraphNode, HeuristicFunction, Point } from "../types";
import { aStar } from "./aStar";
import { heuristic as defaultHeuristic } from "./heuristic";

/**
 * @namespace PathfindingUtils
 *
 * A* Pathfinding Algorithm (pre-defined starting point).
 *
 * This function applies the A* pathfinding algorithm to find the shortest path from the `start` point to the `goal` point
 * in a graph represented by connections between nodes. The algorithm uses a heuristic function to estimate the cost
 * from a given node to the `goal` node, guiding it to explore the most promising paths first, leading to faster and more efficient pathfinding.
 *
 * Users can provide their own heuristic function to customize the pathfinding behavior. If more control is needed over the A* algorithm,
 * users can use the `aStar` function directly.
 *
 * @param {Point} startData - The data for the starting point of the pathfinding.
 * @param {Point} goalData - The data for the goal point to reach.
 * @param {[string, string][]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @param {HeuristicFunction<T>} [heuristic=defaultHeuristic] - The heuristic function to estimate the cost from a node to the goal node. Default is the Euclidean distance.
 * @returns {Point[]} An array of points representing the path from `start` to `goal` (or an empty array if no path is found).
 *
 * @template T - A generic type representing the data associated with the graph nodes. It must extend the `Point` interface.
 *
 * @example
 * // Define a custom heuristic function (Manhattan distance) for the graph nodes
 * function manhattanHeuristic(node: GraphNode<Point>, goal: GraphNode<Point>): number {
 *   const dx = Math.abs(node.data.x - goal.data.x);
 *   const dy = Math.abs(node.data.y - goal.data.y);
 *   return dx + dy;
 * }
 *
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
 * const startingPoint: Point = { x: 0, y: 0 };
 * const goal: Point = { x: 2, y: 2 };
 *
 * // Perform A* pathfinding algorithm using the custom heuristic function
 * const path = findShortestPath(startingPoint, goal, connections, manhattanHeuristic);
 *
 * console.log(path);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 *
 * // For more control over the A* algorithm, use the `aStar` function directly
 * const alternativePath = aStar(startNode, goalNode, manhattanHeuristic);
 * console.log(alternativePath);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 */
export function findShortestPath<T extends Point>(
  startData: T,
  goalData: T,
  connections: [string, string][],
  heuristic: HeuristicFunction<T> = defaultHeuristic,
): Point[] {
  const startNode: GraphNode<T> = { id: `${startData.x},${startData.y}`, data: startData, neighbors: [], parent: null };
  const goalNode: GraphNode<T> = { id: `${goalData.x},${goalData.y}`, data: goalData, neighbors: [], parent: null };

  const nodes: { [id: string]: GraphNode<T> } = {
    [startNode.id]: startNode,
    [goalNode.id]: goalNode,
  };

  connections.forEach(([fromId, toId]) => {
    if (!nodes[fromId]) {
      const [fromX, fromY] = fromId.split(",").map((n) => Number(n)) as unknown as [number, number];
      const fromData = { x: fromX, y: fromY } as T;
      nodes[fromId] = { id: fromId, data: fromData, neighbors: [], parent: null };
    }
    if (!nodes[toId]) {
      const [toX, toY] = toId.split(",").map((n) => Number(n)) as unknown as [number, number];
      const toData = { x: toX, y: toY } as T;
      nodes[toId] = { id: toId, data: toData, neighbors: [], parent: null };
    }

    const fromNode = nodes[fromId];
    const toNode = nodes[toId];

    fromNode.neighbors.push(toNode);
    toNode.neighbors.push(fromNode);
  });

  startNode.neighbors = Object.values(nodes).filter(
    (node) => node !== startNode && connections.some(([fromId, toId]) => (fromId === startNode.id && toId === node.id) || (toId === startNode.id && fromId === node.id))
  );
  goalNode.neighbors = Object.values(nodes).filter(
    (node) => node !== goalNode && connections.some(([fromId, toId]) => (fromId === goalNode.id && toId === node.id) || (toId === goalNode.id && fromId === node.id))
  );

  return aStar(startNode, goalNode, heuristic);
}