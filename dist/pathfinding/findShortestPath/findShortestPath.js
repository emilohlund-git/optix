"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShortestPath = void 0;
const utils_1 = require("../../utils");
const aStar_1 = require("../aStar/aStar");
const heuristic_1 = require("../heuristic/heuristic");
const thetaStar_1 = require("../thetaStar/thetaStar");
const PathfindingAlgorithm_1 = require("./interfaces/PathfindingAlgorithm");
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
 * @param {Point} start - The data for the starting point of the pathfinding.
 * @param {Point} goal - The data for the goal point to reach.
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @param {Point[]} obstacles - An array of points representing the positions of obstacles. Only used for the Theta* algorithm.
 * @param {PathfindingOptions<T>} [options] - An optional object containing pathfinding options.
 * @param {HeuristicFunction<T>} [options.heuristic=defaultHeuristic] - The heuristic function to estimate the cost from a node to the goal node. Default is the Euclidean distance.
 * @param {PathfindingAlgorithm} [options.algorithm=PathfindingAlgorithm.Astar] - The pathfinding algorithm to use. Default is A*.
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
 * const connections: Connection[] = [
 *   ["0,0", "1,0"],
 *   ["1,0", "1,1"],
 *   ["1,1", "2,1"],
 *   ["0,1", "0,2"],
 *   ["1,2", "2,2"],
 *   ["0,2", "1,2"],
 * ];
 *
 * const obstacles: Point[] = [
 *   { x: 1, y: 1 }, // Example obstacle at (1, 1)
 *   // Add other obstacles as needed
 * ];
 *
 * const startingPoint: Point = { x: 0, y: 0 };
 * const goal: Point = { x: 2, y: 2 };
 *
 * // Perform A* pathfinding algorithm using the custom heuristic function
 * const path = findShortestPath(startingPoint, goal, connections, obstacles, { heuristic: manhattanHeuristic });
 *
 * console.log(path);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 *
 * // Perform Theta* pathfinding algorithm with default heuristic
 * const pathThetaStar = findShortestPath(startingPoint, goal, connections, obstacles, { algorithm: PathfindingAlgorithm.ThetaStar });
 */
function findShortestPath(start, goal, connections, obstacles, options = {}) {
    const { heuristic = heuristic_1.heuristic, algorithm = PathfindingAlgorithm_1.PathfindingAlgorithm.Astar } = options;
    const createDataFn = (id) => {
        const [x, y] = id.split(",").map(Number);
        return { x, y };
    };
    const nodes = utils_1.InternalUtils.createGraphNodes(connections, createDataFn);
    const startId = utils_1.InternalUtils.generatePointId(start);
    const goalId = utils_1.InternalUtils.generatePointId(goal);
    const startNode = nodes.get(startId);
    const goalNode = nodes.get(goalId);
    if (!startNode || !goalNode) {
        return [];
    }
    return algorithm === PathfindingAlgorithm_1.PathfindingAlgorithm.Astar
        ? (0, aStar_1.aStar)(startNode, goalNode, heuristic)
        : (0, thetaStar_1.thetaStar)(startNode, goalNode, obstacles, heuristic);
}
exports.findShortestPath = findShortestPath;
//# sourceMappingURL=findShortestPath.js.map