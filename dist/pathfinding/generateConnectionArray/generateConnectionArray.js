"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateConnectionArray = void 0;
/**
 * @namespace PathfindingUtils
 *
 * Generates a connection array for a grid-based map with obstacles.
 * The map has dimensions specified by the `width` and `height` parameters,
 * and the obstacles are defined by an array of points representing their positions.
 *
 * @param {number} width - The width of the grid map.
 * @param {number} height - The height of the grid map.
 * @param {Point[]} obstacles - An array of points representing the positions of obstacles.
 * @returns {Connection[]} The connection array representing the grid-based map with obstacles.
 */
function generateConnectionArray(width, height, obstacles) {
    const connectionArray = [];
    const obstacleGrid = Array.from({ length: width }, () => Array(height).fill(false));
    // Mark obstacle cells in the grid
    obstacles.forEach(({ x, y }) => {
        obstacleGrid[x][y] = true;
    });
    /// Helper function to check if a neighbor is valid (within grid boundaries and not an obstacle)
    function validNeighbor(x, y) {
        return x >= 0 && x < width && y >= 0 && y < height && !obstacleGrid[x][y];
    }
    // Helper function to generate connection array for a chunk of rows
    function generateChunkConnectionArray(startY, endY) {
        const chunkConnectionArray = [];
        for (let x = 0; x < width; x++) {
            for (let y = startY; y < endY; y++) {
                if (validNeighbor(x - 1, y)) {
                    chunkConnectionArray.push([`${x},${y}`, `${x - 1},${y}`]);
                }
                if (validNeighbor(x + 1, y)) {
                    chunkConnectionArray.push([`${x},${y}`, `${x + 1},${y}`]);
                }
                if (validNeighbor(x, y - 1)) {
                    chunkConnectionArray.push([`${x},${y}`, `${x},${y - 1}`]);
                }
                if (validNeighbor(x, y + 1)) {
                    chunkConnectionArray.push([`${x},${y}`, `${x},${y + 1}`]);
                }
            }
        }
        return chunkConnectionArray;
    }
    // Split the grid generation process into chunks for parallel processing
    const CHUNK_SIZE = 15; // Adjust the chunk size as needed
    for (let startY = 0; startY < height; startY += CHUNK_SIZE) {
        const endY = Math.min(startY + CHUNK_SIZE, height);
        const chunkConnectionArray = generateChunkConnectionArray(startY, endY);
        connectionArray.push(...chunkConnectionArray);
    }
    return connectionArray;
}
exports.generateConnectionArray = generateConnectionArray;
//# sourceMappingURL=generateConnectionArray.js.map