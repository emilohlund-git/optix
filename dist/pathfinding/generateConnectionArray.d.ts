import { Connection, Point } from "../types";
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
export declare function generateConnectionArray(width: number, height: number, obstacles: Point[]): Connection[];
