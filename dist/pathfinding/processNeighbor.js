"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processNeighbor = void 0;
/**
 * @namespace PathfindingUtils
 *
 * Process a neighbor node in the A* algorithm.
 *
 * This function checks if the neighbor node is already in the closed set. If not, it calculates the g score
 * (distance from the start node) and checks if the neighbor is in the open set or has a higher g score. If
 * the neighbor is not in the open set or has a lower g score, the neighbor is updated with the new scores and
 * the current node is set as its parent. If the neighbor is not already in the open set, it is added to the open set.
 *
 * @param {PathfindingNode<T>} currentNode - The current node being processed.
 * @param {GraphNode<T>} neighbor - The neighbor node to process.
 * @param {GraphNode<T>} goal - The goal node for the A* algorithm.
 * @param {PathfindingNode<T>[]} openSet - The open set of nodes to be explored.
 * @param {GraphNode<T>[]} closedSet - The closed set of nodes that have already been explored.
 * @param {(node: GraphNode<T>) => number} heuristic - The heuristic function to estimate the cost from the neighbor node to the goal node.
 *
 * @returns {void}
 *
 * @example
 * const startNode = createGraphNode('A', { x: 0, y: 0 });
 * const goalNode = createGraphNode('B', { x: 5, y: 5 });
 * const openSet = [{ node: startNode, f: 0, g: 0, h: 0, parent: null }];
 * const closedSet = [];
 * const heuristic = (node) => Math.abs(node.data.x - goalNode.data.x) + Math.abs(node.data.y - goalNode.data.y);
 *
 * processNeighbor(openSet[0], goalNode, openSet, closedSet, heuristic);
 * console.log(openSet[0].g); // Output: Distance from startNode to goalNode
 * console.log(openSet[0].h); // Output: Heuristic cost from startNode to goalNode
 * console.log(openSet[0].f); // Output: Total cost from startNode to goalNode (g + h)
 * console.log(openSet[0].parent); // Output: null (startNode has no parent)
 *
 * @example
 * const startNode = createGraphNode('A', { x: 0, y: 0 });
 * const neighborNode = createGraphNode('B', { x: 1, y: 1 });
 * const openSet = [];
 * const closedSet = [];
 * const heuristic = (node) => Math.abs(node.data.x - goalNode.data.x) + Math.abs(node.data.y - goalNode.data.y);
 *
 * processNeighbor(startNode, neighborNode, openSet, closedSet, heuristic);
 * console.log(openSet.length); // Output: 1 (neighborNode added to openSet)
 * console.log(openSet[0].parent); // Output: startNode (neighborNode's parent is startNode)
 */
function processNeighbor(currentNode, neighbor, goal, openSet, closedSet, heuristic) {
    if (closedSet.includes(neighbor)) {
        return;
    }
    const gScore = currentNode.g + 1;
    const neighborNode = openSet.find((node) => node.node === neighbor);
    if (!neighborNode || gScore < neighborNode.g) {
        const hScore = heuristic(neighbor);
        if (neighborNode) {
            neighborNode.g = gScore;
            neighborNode.h = hScore;
            neighborNode.f = gScore + hScore;
            neighborNode.parent = currentNode;
        }
        else {
            openSet.push({
                node: neighbor,
                f: gScore + hScore,
                g: gScore,
                h: hScore,
                parent: currentNode,
            });
        }
    }
}
exports.processNeighbor = processNeighbor;
