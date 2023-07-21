import { aStar as _aStar } from "./aStar";
import { findShortestPath as _findShortestPath } from "./findShortestPath";
import { generateConnectionArray } from "./generateConnectionArray";
import { heuristic as _heuristic } from "./heuristic";
import { reconstructPath as _reconstructPath } from "./reconstructPath";
import { thetaStar as _thetaStar } from './thetaStar';
/**
 * @namespace PathfindingUtils
 *
 * Pathfinding utilities for TypeScript
 *
 * A collection of pathfinding utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export declare namespace PathfindingUtils {
    const reconstructPath: typeof _reconstructPath;
    const findShortestPath: typeof _findShortestPath;
    const heuristic: typeof _heuristic;
    const aStar: typeof _aStar;
    const thetaStar: typeof _thetaStar;
    const generateConnections: typeof generateConnectionArray;
}
