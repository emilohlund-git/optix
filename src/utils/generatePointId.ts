import { GraphNodeId, Point } from "../types";

/**
 * @namespace InternalUtils
 * 
 * Generates a unique ID string from the given point data (x, y).
 * @function
 * @param {Point} data - The point data with 'x' and 'y' properties.
 * @returns {string} A unique ID string representing the point.
 * @example
 * const pointData = { x: 3, y: 5 };
 * const pointId = InternalUtils.generatePointId(pointData);
 * console.log(pointId); // Output: "3,5"
 */
export function generatePointId<T extends Point>(data: T): GraphNodeId {
  return `${data.x},${data.y}`;
}