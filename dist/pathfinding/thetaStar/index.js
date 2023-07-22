"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thetaStar = void 0;
const __1 = require("..");
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
function thetaStar(start, goal, obstacles, heuristic) {
    const cameFrom = new Map();
    const openSet = [];
    const closedSet = new Set();
    const allPoints = [...obstacles, start.data, goal.data];
    const width = Math.max(...allPoints.map(point => point.x)) + 1;
    const height = Math.max(...allPoints.map(point => point.y)) + 1;
    const obstacleGrid = Array.from({ length: height }, () => Array(width).fill(false));
    // Mark obstacle cells in the grid
    obstacles.forEach(({ x, y }) => {
        obstacleGrid[y][x] = true;
    });
    /**
     * Checks if there is a line of sight between two nodes, i.e., if the path between them is unobstructed by obstacles.
     *
     * @param {GraphNode<T>} current - The current node.
     * @param {GraphNode<T>} neighbor - The neighboring node to check for line of sight.
     * @returns {boolean} - Returns true if there is a line of sight between the current node and the neighbor, false otherwise.
     */
    function lineOfSightCheck(current, neighbor) {
        const x0 = current.data.x;
        const y0 = current.data.y;
        const x1 = neighbor.data.x;
        const y1 = neighbor.data.y;
        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let x = x0;
        let y = y0;
        let err = dx - dy;
        let blocked = false;
        while (true) {
            if (x === x1 && y === y1) {
                break;
            }
            // Check if the current cell is outside the obstacle grid or if it's an obstacle
            if (x < 0 || x >= obstacleGrid[0].length || y < 0 || y >= obstacleGrid.length || obstacleGrid[y][x]) {
                blocked = true;
                break;
            }
            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x += sx;
            }
            if (e2 < dx) {
                err += dx;
                y += sy;
            }
        }
        return !blocked;
    }
    /**
     * Calculates the cost to move from the current node to a neighbor node.
     * If there is a line of sight to the neighbor, the Euclidean distance is used.
     * Otherwise, the actual cost (e.g., Manhattan distance) is used to account for obstacles.
     *
     * @param {GraphNode<T>} current - The current node.
     * @param {GraphNode<T>} neighbor - The neighbor node to calculate the cost for.
     * @returns {number} - The cost to move from the current node to the neighbor node.
     */
    function calculateCost(current, neighbor) {
        // If there is a line of sight to the neighbor, return the Euclidean distance.
        if (lineOfSightCheck(current, neighbor)) {
            return Math.sqrt(Math.pow(current.data.x - neighbor.data.x, 2) + Math.pow(current.data.y - neighbor.data.y, 2));
        }
        // Otherwise, use the actual cost (e.g., Manhattan distance) to account for obstacles.
        return Math.abs(current.data.x - neighbor.data.x) + Math.abs(current.data.y - neighbor.data.y);
    }
    // Start the search with the starting node
    const startNode = {
        node: start,
        f: heuristic(start, goal),
        g: 0,
        h: heuristic(start, goal),
        parent: null,
    };
    openSet.push(startNode);
    while (openSet.length > 0) {
        // Sort the open list by f value (lowest f value first)
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift().node;
        closedSet.add(current.id);
        if (current === goal) {
            return __1.PathfindingUtils.reconstructPath(current, cameFrom);
        }
        for (const [neighborId, neighbor] of current.neighbors) {
            if (closedSet.has(neighborId)) {
                continue;
            }
            // Check if the neighbor is an obstacle and skip it
            if (obstacleGrid[neighbor.data.x][neighbor.data.y]) {
                continue;
            }
            const gFromStart = calculateCost(start, neighbor);
            const neighborNode = {
                node: neighbor,
                f: gFromStart + heuristic(neighbor, goal),
                g: gFromStart,
                h: heuristic(neighbor, goal),
                parent: null,
            };
            const openNeighbor = openSet.find((node) => node.node.id === neighborId);
            if (!openNeighbor || gFromStart < openNeighbor.g) {
                cameFrom.set(neighborId, current);
                if (!openNeighbor) {
                    openSet.push(neighborNode);
                }
                else {
                    openNeighbor.g = gFromStart;
                    openNeighbor.f = gFromStart + openNeighbor.h;
                }
            }
        }
    }
    // Path not found
    return [];
}
exports.thetaStar = thetaStar;
//# sourceMappingURL=index.js.map