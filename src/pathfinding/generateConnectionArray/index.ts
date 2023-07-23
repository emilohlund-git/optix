import { Connection } from "../interfaces/Connection";
import { Point } from "../interfaces/Point";

/**
 * @namespace PathfindingUtils
 * 
 * @function
 * Generates a connection array for a grid-based map with obstacles.
 * The map has dimensions specified by the `width` and `height` parameters,
 * and the obstacles are defined by an array of points representing their positions.
 *
 * @param {number} width - The width of the grid map.
 * @param {number} height - The height of the grid map.
 * @param {Point[]} obstacles - An array of points representing the positions of obstacles.
 * @returns {Connection[]} The connection array representing the grid-based map with obstacles.
 */
export function generateConnectionArray(width: number, height: number, obstacles: Point[]): Connection[] {
  const connectionArray: Connection[] = [];

  // Create an obstacle grid using a Set for efficient lookups
  const obstacleSet: Set<string> = new Set(obstacles.map(({ x, y }) => `${x},${y}`));

  // Helper function to check if a neighbor is valid (within grid boundaries and not an obstacle)
  function isValidNeighbor(x: number, y: number): boolean {
    return x >= 0 && x < width && y >= 0 && y < height && !obstacleSet.has(`${x},${y}`);
  }

  // Helper function to generate connections for a given cell
  function generateConnectionsForCell(x: number, y: number): void {
    if (isValidNeighbor(x - 1, y)) {
      connectionArray.push([`${x},${y}`, `${x - 1},${y}`]);
    }
    if (isValidNeighbor(x + 1, y)) {
      connectionArray.push([`${x},${y}`, `${x + 1},${y}`]);
    }
    if (isValidNeighbor(x, y - 1)) {
      connectionArray.push([`${x},${y}`, `${x},${y - 1}`]);
    }
    if (isValidNeighbor(x, y + 1)) {
      connectionArray.push([`${x},${y}`, `${x},${y + 1}`]);
    }
  }

  // Generate connections for each cell in the grid
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      generateConnectionsForCell(x, y);
    }
  }

  return connectionArray;
}