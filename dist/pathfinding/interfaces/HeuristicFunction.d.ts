import { GraphNode } from "./GraphNode";
/**
 * Heuristic Function type.
 * @param current - The current node in the graph.
 * @param goal - The goal node to reach.
 * @returns The estimated cost from the current node to the goal node.
 */
export type HeuristicFunction<T> = (current: GraphNode<T>, goal: GraphNode<T>) => number;
