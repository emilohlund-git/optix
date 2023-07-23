import { PathfindingUtils } from "..";
import { GraphNode } from "../interfaces/GraphNode";
import { GraphNodeId } from "../interfaces/GraphNodeId";
import { GraphNodeMap } from "../interfaces/GraphNodeMap";
import { HeuristicType } from "../interfaces/HeuristicType";
import { PathfindingNode } from "../interfaces/PathfindingNode";
import { Point } from "../interfaces/Point";

export abstract class PathFinder<T extends Point> {
  private start: GraphNode<T>;
  private goal: GraphNode<T>;
  private width: number;
  private height: number;
  protected heuristic: HeuristicType;
  private callback?: (currentPath: Point[]) => void;
  protected obstacleGrid: boolean[][];
  private cameFrom: GraphNodeMap<T> = new Map<GraphNodeId, GraphNode<T>>();
  private openSet: PathfindingNode<T>[] = [];
  private closedSet: Set<GraphNodeId> = new Set();

  constructor(
    start: GraphNode<T>,
    goal: GraphNode<T>,
    width: number,
    height: number,
    obstacles: Point[],
    heuristic: HeuristicType,
    callback?: (currentPath: Point[]) => void,
  ) {
    this.start = start;
    this.goal = goal;
    this.width = width;
    this.height = height;
    this.heuristic = heuristic;
    this.callback = callback;

    this.obstacleGrid = Array.from({ length: width }, () => Array(height).fill(false));

    // Mark obstacle cells in the grid
    obstacles.forEach(({ x, y }) => {
      // Check if the obstacle coordinates are within the grid bounds
      if (x >= 0 && x < width && y >= 0 && y < height) {
        this.obstacleGrid[y][x] = true;
      }
    });
  }

  /**
   * Abstract method for algorithm-specific calculations.
   * This method takes an array of parameters that can be of any type.
   *
   * @param {any[]} params - An array of parameters required for the algorithm-specific calculations.
   * @returns {any} - The result of the algorithm-specific calculations.
   */
  abstract algorithmSpecificCalculation(...params: any[]): any;

  /**
   * @abstract
   * @function
   * 
   * Calculates the cost to move from the current node to a neighbor node.
   * If there is a line of sight to the neighbor, the Euclidean distance is used.
   * Otherwise, the actual cost (e.g., Manhattan distance) is used to account for obstacles.
   *
   * @param {GraphNode<T>} current - The current node.
   * @param {GraphNode<T>} neighbor - The neighbor node to calculate the cost for.
   * @returns {number} - The cost to move from the current node to the neighbor node.
   */
  abstract calculateCost(current: GraphNode<T>, neighbor: GraphNode<T>): number;

  public performSearch() {
    // Start the search with the starting node
    const startNode: PathfindingNode<T> = {
      node: this.start,
      f: PathfindingUtils.heuristic(this.start, this.goal, this.heuristic),
      g: 0,
      h: PathfindingUtils.heuristic(this.start, this.goal, this.heuristic),
      parent: null,
    };
    this.openSet.push(startNode);

    while (this.openSet.length > 0) {
      // Sort the open list by f value (lowest f value first)
      this.openSet.sort((a, b) => a.f - b.f);

      const current = this.openSet.shift()!.node;
      this.closedSet.add(current.id);

      if (current === this.goal) {
        const path = PathfindingUtils.reconstructPath(current, this.cameFrom);

        if (this.callback) {
          this.callback(path);
        }

        return path;
      }

      for (const [neighborId, neighbor] of current.neighbors) {
        if (this.closedSet.has(neighborId)) {
          continue;
        }

        // Check if the neighbor is an obstacle and skip it
        if (
          neighbor.data.x < 0 ||
          neighbor.data.x >= this.width ||
          neighbor.data.y < 0 ||
          neighbor.data.y >= this.height ||
          this.obstacleGrid[neighbor.data.y][neighbor.data.x]
        ) {
          continue;
        }

        const gFromStart = this.calculateCost(this.start, neighbor);

        const neighborNode: PathfindingNode<T> = {
          node: neighbor,
          f: gFromStart + PathfindingUtils.heuristic(neighbor, this.goal, this.heuristic),
          g: gFromStart,
          h: PathfindingUtils.heuristic(neighbor, this.goal, this.heuristic),
          parent: null,
        };

        const openNeighbor = this.openSet.find((node) => node.node.id === neighborId);

        if (!openNeighbor || gFromStart < openNeighbor.g) {
          this.cameFrom.set(neighborId, current);

          if (!openNeighbor) {
            this.openSet.push(neighborNode);
          } else {
            openNeighbor.g = gFromStart;
            openNeighbor.f = gFromStart + openNeighbor.h;
          }
        }
      }
    }

    // Path not found
    return [];
  }

  /**
   * Checks if a point is within the grid bounds.
   *
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   * @returns {boolean} - Returns true if the point is within the grid bounds, false otherwise.
   */
  protected isValidPoint(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  /**
   * Checks if a cell at the given coordinates is an obstacle.
   *
   * @param {number} x - The x-coordinate of the cell.
   * @param {number} y - The y-coordinate of the cell.
   * @returns {boolean} - Returns true if the cell is an obstacle, false otherwise.
   */
  protected isObstacle(x: number, y: number): boolean {
    return this.isValidPoint(x, y) && this.obstacleGrid[y][x];
  }
}