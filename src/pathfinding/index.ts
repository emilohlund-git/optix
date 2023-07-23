import { AStar as _aStar } from "./aStar/AStar";
import { findShortestPath as _findShortestPath } from "./findShortestPath";
import { generateConnectionArray } from "./generateConnectionArray";
import { heuristic as _heuristic } from "./heuristic";
import { reconstructPath as _reconstructPath } from "./reconstructPath";
import { ThetaStar as _thetaStar } from './thetaStar/ThetaStar';

/**
 * @namespace PathfindingUtils
 * 
 * Pathfinding utilities for TypeScript
 * 
 * A collection of pathfinding utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export namespace PathfindingUtils {
  export const reconstructPath = _reconstructPath;
  export const findShortestPath = _findShortestPath;
  export const heuristic = _heuristic;
  export const aStar = _aStar;
  export const thetaStar = _thetaStar;
  export const generateConnections = generateConnectionArray;
}