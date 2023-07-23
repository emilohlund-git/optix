import { GraphNode } from "../interfaces/GraphNode";
import { HeuristicType } from "../interfaces/HeuristicType";
import { Point } from "../interfaces/Point";

/**
 * @namespace PathfindingUtils
 * 
 * @function
 * Heuristic Function.
 *
 * This function calculates the heuristic (estimated) cost from a given node to the goal node.
 * The heuristic guides the A* pathfinding algorithm to explore the most promising paths first,
 * leading to faster and more efficient pathfinding.
 *
 * The default heuristic implementation provided here uses the Euclidean distance between the
 * current node and the goal node as the estimated cost. You can provide your own custom heuristic
 * function for more specialized behavior in the pathfinding algorithm.
 *
 * Additionally, the "euclidean_with_terrain" heuristic considers the terrain cost while estimating
 * the distance. The terrain is represented as a grid of weights, where higher weights indicate
 * more difficult terrain to traverse. The heuristic takes into account the terrain cost when
 * calculating the distance between nodes.
 *
 * @param {GraphNode<Point>} node - The current node for which the heuristic cost is calculated.
 * @param {GraphNode<Point>} goal - The goal node to reach.
 * @param {HeuristicType} [heuristicType="euclidean"] - The type of heuristic to use. Options: "euclidean" (default), "manhattan", "chebyshev", "octile", "diagonal", "euclidean_squared", "weighted_euclidean", "euclidean_with_terrain".
 * @param {number[][]} [terrainGrid] - The grid representing the terrain with different weights. Only required if using the "euclidean_with_terrain" heuristic.
 * @returns {number} The estimated cost from the current node to the goal node.
 *
 * @template T - The type of the point (e.g., { x: number, y: number }) used in the graph.
 *
 * @example
 * // Using the "euclidean_with_terrain" heuristic to calculate the estimated cost from nodeA to nodeB.
 * const nodeA: GraphNode<Point> = { id: "A", data: { x: 0, y: 0 }, neighbors: [], parent: null };
 * const nodeB: GraphNode<Point> = { id: "B", data: { x: 3, y: 4 }, neighbors: [], parent: null };
 * const terrainGrid = [
 *   [1, 1, 2, 2],
 *   [1, 1, 3, 3],
 *   [2, 2, 3, 3],
 *   [2, 2, 3, 4],
 * ];
 * const estimatedCost = heuristic(nodeA, nodeB, "euclidean_with_terrain", terrainGrid); // Output: 5 (distance between (0,0) and (3,4) with terrain cost is 5)
 *
 * @example
 * // Using the "euclidean_with_terrain" heuristic with default terrain grid (assumes all terrain has weight 1).
 * const estimatedCostDefaultTerrain = heuristic(nodeA, nodeB, "euclidean_with_terrain"); // Output: 5 (distance between (0,0) and (3,4) with default terrain cost is 5)
 *
 * @example
 * // Implementing a custom heuristic function.
 * function customHeuristic(node: GraphNode<Point>, goal: GraphNode<Point>): number {
 *   // Your custom heuristic calculation logic here
 *   // Return the estimated cost from the current node to the goal node
 * }
 *
 * // Using the custom heuristic function.
 * const nodeC: GraphNode<Point> = { id: "C", data: { x: 1, y: 1 }, neighbors: [], parent: null };
 * const nodeD: GraphNode<Point> = { id: "D", data: { x: 5, y: 9 }, neighbors: [], parent: null };
 * const estimatedCost = customHeuristic(nodeC, nodeD);
 */
export function heuristic<T extends Point>(
  node: GraphNode<T>,
  goal: GraphNode<T>,
  heuristicType: HeuristicType = "euclidean",
  terrainGrid?: number[][]): number {
  // Define the heuristic functions for different types
  const heuristicFunctions = {
    "euclidean": (dx: number, dy: number) => Math.sqrt(dx * dx + dy * dy),
    "manhattan": (dx: number, dy: number) => dx + dy,
    "chebyshev": (dx: number, dy: number) => Math.max(dx, dy),
    "octile": (dx: number, dy: number) => {
      const F = Math.SQRT2 - 1;
      return (dx < dy) ? F * dx + dy : F * dy + dx;
    },
    "diagonal": (dx: number, dy: number) => {
      const D = 1;
      const D2 = Math.sqrt(2);
      return D * (dx + dy) + (D2 - 2 * D) * Math.min(dx, dy);
    },
    "euclidean_squared": (dx: number, dy: number) => dx * dx + dy * dy,
    "weighted_euclidean": (dx: number, dy: number) => Math.sqrt(2 * dx * dx + 3 * dy * dy),
    "euclidean_with_terrain": (dx: number, dy: number) => {
      if (!terrainGrid) {
        // If no terrainGrid is provided, fallback to regular Euclidean distance
        return Math.sqrt(dx * dx + dy * dy);
      }

      // Check if the node and goal are within the bounds of the terrainGrid
      if (
        node.data.x >= 0 && node.data.x < terrainGrid[0].length &&
        node.data.y >= 0 && node.data.y < terrainGrid.length &&
        goal.data.x >= 0 && goal.data.x < terrainGrid[0].length &&
        goal.data.y >= 0 && goal.data.y < terrainGrid.length
      ) {
        const terrainWeight = terrainGrid[node.data.y][node.data.x];
        const goalTerrainWeight = terrainGrid[goal.data.y][goal.data.x];
        const terrainFactor = terrainWeight + goalTerrainWeight;
        return Math.sqrt(dx * dx + dy * dy) + terrainFactor;
      } else {
        // If the node or goal is outside the terrainGrid, fallback to regular Euclidean distance
        return Math.sqrt(dx * dx + dy * dy);
      }
    }
  };

  const dx = Math.abs(node.data.x - goal.data.x);
  const dy = Math.abs(node.data.y - goal.data.y);

  // Get the corresponding heuristic function based on the heuristicType
  const heuristicFunction = heuristicFunctions[heuristicType];

  if (heuristicFunction) {
    return heuristicFunction(dx, dy);
  }

  // If the specified heuristicType is not found, default to Euclidean distance
  return Math.sqrt(dx * dx + dy * dy);
}