"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heuristic = void 0;
/**
 * @namespace PathfindingUtils
 *
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
 * @param {GraphNode<Point>} node - The current node for which the heuristic cost is calculated.
 * @param {GraphNode<Point>} goal - The goal node to reach.
 * @returns {number} The estimated cost from the current node to the goal node.
 *
 * @template T - The type of the point (e.g., { x: number, y: number }) used in the graph.
 *
 * @example
 * // Using the default heuristic to calculate the estimated cost from nodeA to nodeB.
 * const nodeA: GraphNode<Point> = { id: "A", data: { x: 0, y: 0 }, neighbors: [], parent: null };
 * const nodeB: GraphNode<Point> = { id: "B", data: { x: 3, y: 4 }, neighbors: [], parent: null };
 * const estimatedCost = heuristic(nodeA, nodeB); // Output: 5 (distance between (0,0) and (3,4) is 5)
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
function heuristic(node, goal) {
    const dx = Math.abs(node.data.x - goal.data.x);
    const dy = Math.abs(node.data.y - goal.data.y);
    return Math.sqrt(dx * dx + dy * dy);
}
exports.heuristic = heuristic;
//# sourceMappingURL=heuristic.js.map