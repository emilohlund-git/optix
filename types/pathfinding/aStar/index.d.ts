import { GraphNode } from "../interfaces/GraphNode";
import { HeuristicFunction } from "../interfaces/HeuristicFunction";
import { Point } from "../interfaces/Point";
/**
 * @namespace PathfindingUtils
 *
 * A* Pathfinding Algorithm
 *
 * This function applies the A* pathfinding algorithm to find the shortest path from the `start` node to the `goal` node
 * in a graph. The `heuristic` function estimates the cost from a given node to the `goal` node, and it guides the algorithm
 * to explore the most promising paths first, leading to faster and more efficient pathfinding.
 *
 * @param {Point} start - The starting point of the pathfinding.
 * @param {Point} goal - The goal point to reach.
 * @returns {Point[]} An array of points representing the path from `start` to `goal` (or an empty array if no path is found).
 *
 * @template T - A generic type representing the data associated with the graph nodes. It must extend the `Point` interface.
 *
 * @example
 * // Define a custom heuristic function (Euclidean distance) for the graph nodes
 * function euclideanHeuristic(node: GraphNode<Point>, goal: GraphNode<Point>): number {
 *   const dx = Math.abs(node.data.x - goal.data.x);
 *   const dy = Math.abs(node.data.y - goal.data.y);
 *   return Math.sqrt(dx * dx + dy * dy);
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
 * const startData: Point = { x: 0, y: 0 };
 * const goalData: Point = { x: 2, y: 2 };
 *
 * // Convert startData and goalData into GraphNode<Point> instances
 * const startNode: GraphNode<Point> = { id: "0,0", data: startData, neighbors: [], parent: null };
 * const goalNode: GraphNode<Point> = { id: "2,2", data: goalData, neighbors: [], parent: null };
 *
 * // Perform A* pathfinding algorithm using the custom heuristic function
 * const path = aStar(startNode, goalNode, euclideanHeuristic);
 *
 * console.log(path);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 */
export declare function aStar<T extends Point>(start: GraphNode<T>, goal: GraphNode<T>, heuristic: HeuristicFunction<T>): Point[];
