/**
 * Enum representing the sorting order.
 */
export type SortOrder = 'ASC' | 'DESC';

/**
 * Represents the result of data analysis, providing various statistical measures and transformations.
 * 
 * @property {number} average - The average value of the data, representing the central tendency.
 * @property {number} max - The maximum value in the data, representing the highest recorded value.
 * @property {number} min - The minimum value in the data, representing the lowest recorded value.
 * @property {number} median - The median value of the data, representing the middle value.
 * @property {number[]} normalized - The data normalized to the range [0, 1], for comparative analysis.
 * @property {number} standardDeviation - The standard deviation of the data, representing data dispersion.
 * @property {number} sum - The sum of all values in the data, useful for total accumulation.
 * @property {number[]} sorted - The data sorted in ascending order, for better visualization.
 * @property {number[]} shuffled - The data shuffled randomly, useful for randomization needs.
 * @property {number[]} outliers - Any outliers found in the data, indicating unusual observations.
 */
export type AnalyzeDataResult = {
  average: number;
  max: number;
  min: number;
  median: number;
  normalized: number[];
  standardDeviation: number;
  sum: number;
  sorted: number[];
  shuffled: number[];
  outliers: number[];
};

/**
 * Represents a node in a graph.
 * @interface GraphNode
 * @template T The type of data associated with the node.
 * 
 * @property {string} id - The unique identifier for the node.
 * @property {T} data - The data associated with the node.
 * @property {Array<GraphNode<T>>} neighbors - An array of neighboring nodes connected to this node.
 *
 * @example
 * const node: GraphNode<number> = {
 *   id: "node1",
 *   data: 42,
 *   neighbors: [node2, node3, node4],
 * };
 */
export interface GraphNode<T> {
  id: string; // Unique identifier for the node
  data: T; // Data associated with the node (can be any type)
  neighbors: Array<GraphNode<T>>; // Array of neighboring nodes
  parent: GraphNode<T> | null;
}

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
  f: number; // Total cost from start node to this node (g + h)
  g: number; // Cost from start node to this node
  h: number; // Heuristic cost from this node to the goal node
  parent: PathfindingNode<T> | null;
}

/**
 * Represents a point in 2D space.
 * @interface Point
 * 
 * @property {number} x - The horizontal location in space.
 * @property {number} y - The vertical location in space.
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Heuristic Function type.
 * @param current - The current node in the graph.
 * @param goal - The goal node to reach.
 * @returns The estimated cost from the current node to the goal node.
 */
export type HeuristicFunction<T> = (current: GraphNode<T>, goal: GraphNode<T>) => number;