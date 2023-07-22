"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aStar = void 0;
const utils_1 = require("../../utils");
const reconstructPath_1 = require("../reconstructPath");
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
function aStar(start, goal, heuristic) {
    const openSet = new Map();
    openSet.set(start.id, start);
    const cameFrom = new Map();
    const gScore = { [start.id]: 0 };
    gScore[start.id] = 0;
    const fScore = { [start.id]: heuristic(start, goal) };
    fScore[start.id] = heuristic(start, goal);
    while (openSet.size > 0) {
        let current;
        for (const node of openSet.values()) {
            const nodeId = utils_1.InternalUtils.generatePointId(node.data);
            if (!current || fScore[nodeId] < fScore[current.id]) {
                current = node;
            }
        }
        if (!current) {
            break;
        }
        if (current === goal) {
            return (0, reconstructPath_1.reconstructPath)(current, cameFrom);
        }
        openSet.delete(current.id);
        for (const [neighborId, neighbor] of current.neighbors) {
            const tentativeGScore = gScore[current.id] + 1;
            if (tentativeGScore < gScore[neighborId] || !gScore.hasOwnProperty(neighborId)) {
                cameFrom.set(neighborId, current);
                gScore[neighborId] = tentativeGScore;
                fScore[neighborId] = tentativeGScore + heuristic(neighbor, goal);
                if (!openSet.has(neighborId)) {
                    openSet.set(neighborId, neighbor);
                }
            }
        }
    }
    return [];
}
exports.aStar = aStar;
//# sourceMappingURL=index.js.map