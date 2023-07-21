import { compareValues } from "./compareValues";
import { createGraphNode as _createGraphNode } from "./createGraphNode";
import { createGraphNodes as _createGraphNodes } from "./createGraphNodes";
import { generatePointId as _generatePointId } from "./generatePointId";

/**
 * @namespace InternalUtils
 * 
 * Utilities used internally for the library
 * 
 * A collection of utility functions to simplify internal tasks and improve code quality in TypeScript projects.
 */
export namespace InternalUtils {
  export const compare = compareValues;
  export const createGraphNode = _createGraphNode;
  export const generatePointId = _generatePointId;
  export const createGraphNodes = _createGraphNodes;
}