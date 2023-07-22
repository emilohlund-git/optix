import { GraphNodeId } from "./GraphNodeId";
import { GraphNodeMap } from "./GraphNodeMap";
/**
 * Represents a node in a graph.
 * @interface GraphNode
 * @template T The type of data associated with the node.
 *
 * @property {GraphNodeId} id - The unique identifier for the node.
 * @property {T} data - The data associated with the node.
 * @property {GraphNodeMap<T>} neighbors - An array of neighboring nodes connected to this node.
 *
 * @example
 * const node: GraphNode<number> = {
 *   id: "node1",
 *   data: 42,
 *   neighbors: { "0,1": node2, "0,2": node3, "0,3": node4 },
 * };
 */
export interface GraphNode<T> {
    id: GraphNodeId;
    data: T;
    neighbors: GraphNodeMap<T>;
    parent: GraphNode<T> | null;
}
