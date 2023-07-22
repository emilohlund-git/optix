import { GraphNode } from "../interfaces/GraphNode";
import { HeuristicFunction } from "../interfaces/HeuristicFunction";
import { Point } from "../interfaces/Point";
/**
 * @namespace PathfindingUtils
 *
 * Finds the shortest path from a starting node to a goal node using the Theta* algorithm.
 *
 * @template T - The type of the nodes' data, which must extend the Point interface.
 * @param {GraphNode<T>} start - The starting node of the pathfinding.
 * @param {GraphNode<T>} goal - The goal node to reach.
 * @param {Point[]} obstacles - An array of points representing the coordinates of obstacles on the grid.
 * @param {HeuristicFunction<T>} heuristic - The heuristic function used to estimate the cost from a node to the goal.
 * @returns {Point[]} - An array of points representing the shortest path from the start to the goal.
 *
 * @example
 * const startNode: GraphNode<Point> = { id: 'start', data: { x: 0, y: 0 }, neighbors: new Map() };
 * const goalNode: GraphNode<Point> = { id: 'goal', data: { x: 5, y: 5 }, neighbors: new Map() };
 * const obstacles: Point[] = [
 *   { x: 1, y: 0 },
 *   { x: 1, y: 1 },
 *   { x: 1, y: 2 },
 *   { x: 2, y: 2 },
 *   { x: 2, y: 3 },
 *   { x: 3, y: 3 },
 *   { x: 3, y: 4 },
 *   { x: 4, y: 4 },
 *   { x: 4, y: 5 }
 * ];
 *
 * // Define a Euclidean distance heuristic function
 * function euclideanHeuristic(nodeA: GraphNode<Point>, nodeB: GraphNode<Point>): number {
 *   return Math.sqrt(Math.pow(nodeA.data.x - nodeB.data.x, 2) + Math.pow(nodeA.data.y - nodeB.data.y, 2));
 * }
 *
 * // Find the shortest path using Theta* algorithm
 * const shortestPath = thetaStar(startNode, goalNode, obstacles, euclideanHeuristic);
 * console.log(shortestPath); // Output: [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 } ]
 *
 * @example
 * const startNode: GraphNode<Point> = { id: 'start', data: { x: 0, y: 0 }, neighbors: new Map() };
 * const goalNode: GraphNode<Point> = { id: 'goal', data: { x: 5, y: 5 }, neighbors: new Map() };
 * const obstacles: Point[] = [
 *   { x: 1, y: 0 },
 *   { x: 1, y: 1 },
 *   { x: 1, y: 2 },
 *   { x: 2, y: 2 },
 *   { x: 2, y: 3 },
 *   { x: 3, y: 3 },
 *   { x: 3, y: 4 },
 *   { x: 4, y: 4 },
 *   { x: 4, y: 5 }
 * ];
 *
 * // Define a Manhattan distance heuristic function
 * function manhattanHeuristic(nodeA: GraphNode<Point>, nodeB: GraphNode<Point>): number {
 *   return Math.abs(nodeA.data.x - nodeB.data.x) + Math.abs(nodeA.data.y - nodeB.data.y);
 * }
 *
 * // Find the shortest path using Theta* algorithm with Manhattan distance heuristic
 * const shortestPath = thetaStar(startNode, goalNode, obstacles, manhattanHeuristic);
 * console.log(shortestPath); // Output: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 } ]
 */
export declare function thetaStar<T extends Point>(start: GraphNode<T>, goal: GraphNode<T>, obstacles: Point[], heuristic: HeuristicFunction<T>): Point[];
