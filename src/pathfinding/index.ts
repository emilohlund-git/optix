import { aStar as _aStar } from "./aStar"
import { addNeighbors as _addNeighbors } from "./addNeighbors"
import { findShortestPath as _findShortestPath } from "./findShortestPath"
import { heuristic as _heuristic } from "./heuristic"
import { processNeighbor as _processNeighbor } from "./processNeighbor"
import { reconstructPath as _reconstructPath } from "./reconstructPath"

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
  export const processNeighbor = _processNeighbor;
  export const addNeighbors = _addNeighbors;
  export const aStar = _aStar;
}