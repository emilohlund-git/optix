"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathfindingUtils = void 0;
const aStar_1 = require("./aStar");
const findShortestPath_1 = require("./findShortestPath");
const generateConnectionArray_1 = require("./generateConnectionArray");
const heuristic_1 = require("./heuristic");
const reconstructPath_1 = require("./reconstructPath");
const thetaStar_1 = require("./thetaStar");
/**
 * @namespace PathfindingUtils
 *
 * Pathfinding utilities for TypeScript
 *
 * A collection of pathfinding utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
var PathfindingUtils;
(function (PathfindingUtils) {
    PathfindingUtils.reconstructPath = reconstructPath_1.reconstructPath;
    PathfindingUtils.findShortestPath = findShortestPath_1.findShortestPath;
    PathfindingUtils.heuristic = heuristic_1.heuristic;
    PathfindingUtils.aStar = aStar_1.aStar;
    PathfindingUtils.thetaStar = thetaStar_1.thetaStar;
    PathfindingUtils.generateConnections = generateConnectionArray_1.generateConnectionArray;
})(PathfindingUtils || (exports.PathfindingUtils = PathfindingUtils = {}));
