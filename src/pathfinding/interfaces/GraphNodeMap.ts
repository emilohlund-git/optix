import { GraphNode } from "./GraphNode";
import { GraphNodeId } from "./GraphNodeId";

/**
 * Represents a mapping of graph node IDs to graph nodes.
 * The `GraphNodeMap` is used to efficiently store and retrieve graph nodes based on their unique IDs.
 *
 * @template T - A generic type representing the data associated with the graph nodes. It must extend the `Point` interface.
 */
export type GraphNodeMap<T> = Map<GraphNodeId, GraphNode<T>>;