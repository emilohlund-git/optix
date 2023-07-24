import { HeuristicType } from "../../heuristic/interfaces/HeuristicType";
import { PathfindingAlgorithm } from "./PathfindingAlgorithm";

/**
 * Represents options for the pathfinding algorithm.
 *
 * @template T - A generic type representing the data associated with the graph nodes. It must extend the `Point` interface.
 * @property {HeuristicFunction<T>} [heuristic] - The heuristic function used to estimate the cost from a node to the goal.
 * It guides the pathfinding algorithm to explore the most promising paths first, leading to faster and more efficient pathfinding. Optional if using the Theta* algorithm.
 * @property {PathfindingAlgorithm} [algorithm] - The pathfinding algorithm to be used for finding the shortest path.
 * The available options are defined in the `PathfindingAlgorithm` enum. If not specified, the default algorithm is A*.
 */
export interface PathfindingOptions<T> {
  /**
   * The heuristic function used to estimate the cost from a node to the goal.
   * It guides the pathfinding algorithm to explore the most promising paths first,
   * leading to faster and more efficient pathfinding. Optional if using the Theta* algorithm.
   *
   * @param {GraphNode<T>} node - The current graph node.
   * @param {GraphNode<T>} goal - The goal graph node.
   * @returns {number} - The estimated cost from the current node to the goal.
   */
  heuristic?: HeuristicType,
  /**
   * The pathfinding algorithm to be used for finding the shortest path.
   * The available options are defined in the `PathfindingAlgorithm` enum.
   * If not specified, the default algorithm is A*.
   */
  algorithm?: PathfindingAlgorithm
}