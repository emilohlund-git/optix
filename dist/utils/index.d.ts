import { createGraphNode as _createGraphNode } from "../pathfinding/utils/createGraphNode";
import { createGraphNodes as _createGraphNodes } from "../pathfinding/utils/createGraphNodes";
import { generatePointId as _generatePointId } from "../pathfinding/utils/generatePointId";
import { compareValues } from "./compareValues";
/**
 * @namespace InternalUtils
 *
 * Utilities used internally for the library
 *
 * A collection of utility functions to simplify internal tasks and improve code quality in TypeScript projects.
 */
export declare namespace InternalUtils {
    const compare: typeof compareValues;
    const createGraphNode: typeof _createGraphNode;
    const generatePointId: typeof _generatePointId;
    const createGraphNodes: typeof _createGraphNodes;
}
