import { GraphNode } from "./GraphNode";
/**
 * Represents a node used in pathfinding algorithms.
 * @interface PathfindingNode
 * @template T The type of data associated with the node.
 *
 * @property {GraphNode<T>} node - The original graph node represented by this pathfinding node.
 * @property {number} f - The total estimated cost from the start node to this node (g + h).
 * @property {number} g - The cost from the start node to this node.
 * @property {number} h - The heuristic cost from this node to the goal node.
 * @property {PathfindingNode<T> | null} parent - The parent node in the path leading to this node.
 *
 * @example
 * const pathNode: PathfindingNode<number> = {
 *   node: graphNode,
 *   f: 10,
 *   g: 5,
 *   h: 5,
 *   parent: null,
 * };
 */
export interface PathfindingNode<T> {
    node: GraphNode<T>;
    f: number;
    g: number;
    h: number;
    parent: PathfindingNode<T> | null;
}
