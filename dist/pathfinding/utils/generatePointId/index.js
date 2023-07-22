"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePointId = void 0;
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
function generatePointId(data) {
    return `${data.x},${data.y}`;
}
exports.generatePointId = generatePointId;
//# sourceMappingURL=index.js.map