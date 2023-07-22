/**
 * @namespace smoothie.ts
 * 
 * Utility Library for TypeScript
 * 
 * A collection of utility functions to simplify common tasks and improve code quality in TypeScript projects.
 * 
 * @version 1.0.0
 * @license ISC
 * @author Emil Ölund
 * @see {@link https://github.com/emilohlund-git/smoothie-ts}
 */
import { ArrayUtils } from "./arrays";
import type { AnalyzeDataResult } from "./arrays/analyzeData/interfaces/AnalyzeDataResult";
import { MathUtils } from "./math";
import { PathfindingUtils } from "./pathfinding";
import type { PathfindingAlgorithm } from "./pathfinding/findShortestPath/interfaces/PathfindingAlgorithm";
import type { PathfindingOptions } from "./pathfinding/findShortestPath/interfaces/PathfindingOptions";
import type { Connection } from "./pathfinding/interfaces/Connection";
import type { GraphNode } from "./pathfinding/interfaces/GraphNode";
import type { GraphNodeId } from "./pathfinding/interfaces/GraphNodeId";
import type { GraphNodeMap } from "./pathfinding/interfaces/GraphNodeMap";
import type { HeuristicFunction } from "./pathfinding/interfaces/HeuristicFunction";
import type { Point } from "./pathfinding/interfaces/Point";
import { StringUtils } from "./strings";
import { InternalUtils } from "./utils";
import type { SortOrder } from "./utils/compareValues/interfaces/SortOrder";
import { RNG } from "./utils/randomNumberGenerator";
import { ValidationUtils } from "./validations";
import type { PasswordValidationOptions } from "./validations/validatePassword/interfaces/PasswordValidationOptions";

export { ArrayUtils, InternalUtils, MathUtils, PathfindingUtils, RNG, StringUtils, ValidationUtils };
export type { AnalyzeDataResult, Connection, GraphNode, GraphNodeId, GraphNodeMap, HeuristicFunction, PasswordValidationOptions, PathfindingAlgorithm, PathfindingOptions, Point, SortOrder };

