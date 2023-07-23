import { InternalUtils } from "../../utils";
import { AStar } from "../aStar/AStar";
import { Connection } from "../interfaces/Connection";
import { GraphNodeId } from "../interfaces/GraphNodeId";
import { GraphNodeMap } from "../interfaces/GraphNodeMap";
import { Point } from "../interfaces/Point";
import { ThetaStar } from "../thetaStar/ThetaStar";
import { PathfindingOptions } from "./interfaces/PathfindingOptions";

/**
 * @namespace PathfindingUtils
 *
 * A* Pathfinding Algorithm (pre-defined starting point).
 *
 * This function applies the A* pathfinding algorithm to find the shortest path from the `start` point to the `goal` point
 * in a graph represented by connections between nodes. The algorithm uses a heuristic function to estimate the cost
 * from a given node to the `goal` node, guiding it to explore the most promising paths first, leading to faster and more efficient pathfinding.
 *
 * Users can provide their own heuristic function to customize the pathfinding behavior. If more control is needed over the A* algorithm,
 * users can use the `aStar` function directly.
 *
 * @param {Point} start - The data for the starting point of the pathfinding.
 * @param {Point} goal - The data for the goal point to reach.
 * @param {Connection[]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * @param {Point[]} obstacles - An array of points representing the positions of obstacles. Only used for the Theta* algorithm.
 * @param {PathfindingOptions<T>} [options] - An optional object containing pathfinding options.
 * @param {HeuristicFunction<T>} [options.heuristic=defaultHeuristic] - The heuristic function to estimate the cost from a node to the goal node. Default is the Euclidean distance.
 * @param {PathfindingAlgorithm} [options.algorithm=PathfindingAlgorithm.Astar] - The pathfinding algorithm to use. Default is A*.
 * @returns {Point[]} An array of points representing the path from `start` to `goal` (or an empty array if no path is found).
 *
 * @template T - A generic type representing the data associated with the graph nodes. It must extend the `Point` interface.
 *
 * @example
 * // Define a custom heuristic function (Manhattan distance) for the graph nodes
 * function manhattanHeuristic(node: GraphNode<Point>, goal: GraphNode<Point>): number {
 *   const dx = Math.abs(node.data.x - goal.data.x);
 *   const dy = Math.abs(node.data.y - goal.data.y);
 *   return dx + dy;
 * }
 *
 * // Define nodes and connections for the graph
 * const connections: Connection[] = [
 *   ["0,0", "1,0"],
 *   ["1,0", "1,1"],
 *   ["1,1", "2,1"],
 *   ["0,1", "0,2"],
 *   ["1,2", "2,2"],
 *   ["0,2", "1,2"],
 * ];
 *
 * const obstacles: Point[] = [
 *   { x: 1, y: 1 }, // Example obstacle at (1, 1)
 *   // Add other obstacles as needed
 * ];
 *
 * const startingPoint: Point = { x: 0, y: 0 };
 * const goal: Point = { x: 2, y: 2 };
 *
 * // Perform A* pathfinding algorithm using the custom heuristic function
 * const path = findShortestPath(startingPoint, goal, connections, obstacles, { heuristic: manhattanHeuristic });
 *
 * console.log(path);
 * // Output: [
 * //   { x: 0, y: 0 },
 * //   { x: 1, y: 0 },
 * //   { x: 1, y: 1 },
 * //   { x: 2, y: 2 }
 * // ]
 *
 * // Perform Theta* pathfinding algorithm with default heuristic
 * const pathThetaStar = findShortestPath(startingPoint, goal, connections, obstacles, { algorithm: PathfindingAlgorithm.ThetaStar });
 */
export function findShortestPath<T extends Point>(
  start: T,
  goal: T,
  connections: Connection[],
  obstacles: Point[],
  options: PathfindingOptions<T> = {},
  callback?: (currentPath: Point[]) => void,
): Point[] {
  const {
    heuristic = 'euclidean',
    algorithm = 'A*'
  } = options;

  const createDataFn = (id: GraphNodeId) => {
    const [x, y] = id.split(",").map(Number) as [number, number];
    return { x, y } as T;
  };

  const dimensions: number[] = [0, 0];
  const nodes: GraphNodeMap<T> = InternalUtils.createGraphNodes(connections, createDataFn, dimensions);

  const startId = InternalUtils.generatePointId(start);
  const goalId = InternalUtils.generatePointId(goal);

  const startNode = nodes.get(startId);
  const goalNode = nodes.get(goalId);

  if (!startNode || !goalNode) {
    return [];
  }

  const width = dimensions[0] + 1;
  const height = dimensions[1] + 1;

  // Mapping of algorithm names to pathfinding classes
  const algorithmMapping = {
    'A*': AStar,
    'Theta*': ThetaStar,
  };

  // Select the appropriate pathfinding class based on the chosen algorithm
  const PathFinderClass = algorithmMapping[algorithm] || AStar;

  // Perform the search using the selected pathfinding class
  return new PathFinderClass(startNode, goalNode, width, height, obstacles, heuristic, callback).performSearch();
}