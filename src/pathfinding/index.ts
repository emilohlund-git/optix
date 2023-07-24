import { findShortestPath as _findShortestPath } from "./findShortestPath";
import { generateConnectionArray } from "./generateConnectionArray";
import { ThetaStar as _thetaStar } from './thetaStar';

/**
 * @namespace PathfindingUtils
 * 
 * Pathfinding utilities for TypeScript
 * 
 * A collection of pathfinding utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export namespace PathfindingUtils {
  export const findShortestPath = _findShortestPath;
  export const thetaStar = _thetaStar;
  export const generateConnections = generateConnectionArray;
}