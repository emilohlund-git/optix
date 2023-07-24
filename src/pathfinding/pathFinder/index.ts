import { createPathFindingNode } from "../createPathFindingNode";
import { HeuristicType } from "../heuristic/interfaces/HeuristicType";
import { GraphNode } from "../interfaces/GraphNode";
import { GraphNodeId } from "../interfaces/GraphNodeId";
import { GraphNodeMap } from "../interfaces/GraphNodeMap";
import { PathfindingNode } from "../interfaces/PathfindingNode";
import { Point } from "../interfaces/Point";
import { reconstructPath } from "../reconstructPath";

/**
 * @abstract
 * @class PathFinder
 * 
 * An abstract class representing a pathfinding algorithm for finding the shortest path between two points on a grid.
 * Extend this class to implement specific pathfinding algorithms (e.g., A*, Dijkstra).
 *
 * @template T - The type representing a point on the grid.
 */
export abstract class PathFinder<T extends Point> {
  protected start: GraphNode<T>;
  protected goal: GraphNode<T>;
  private width: number;
  private height: number;
  protected heuristicType: HeuristicType;
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
    heuristicType: HeuristicType,
  ) {
    this.start = start;
    this.goal = goal;
    this.width = width;
    this.height = height;
    this.heuristicType = heuristicType;

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
   * @abstract
   * @function algorithmSpecificCalculation
   * 
   * Abstract method for algorithm-specific calculations.
   * This method takes an array of parameters that can be of any type.
   *
   * @param {any[]} params - An array of parameters required for the algorithm-specific calculations.
   * @returns {any} - The result of the algorithm-specific calculations.
   */
  abstract algorithmSpecificCalculation(...params: any[]): any;

  /**
   * @abstract
   * @function calculateCost
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

  /**
   * @public
   * @function performSearch
   * 
   * Performs the pathfinding search to find the shortest path between the start and goal nodes.
   * Uses the A* algorithm with the specified heuristic.
   *
   * @returns {Point[]} - An array of points representing the shortest path from the start node to the goal node,
   *                     or an empty array if no path is found.
  */
  public performSearch(): Point[] {
    this.addToOpenSet(this.start, this.goal, 0);

    while (this.openSet.length > 0) {
      const current = this.getNextNodeFromOpenSet();

      if (current === this.goal) {
        const path = reconstructPath(current, this.cameFrom);
        return path;
      }

      this.closedSet.add(current.id);

      for (const [neighborId, neighbor] of current.neighbors) {
        if (this.closedSet.has(neighborId) || this.isObstacle(neighbor.data.x, neighbor.data.y)) {
          continue;
        }

        const gFromStart = this.calculateCost(this.start, neighbor);

        this.processNeighborNode(neighbor, current, neighborId, gFromStart);
      }
    }

    // Path not found
    return [];
  }

  /**
   * @protected
   * @function isValidPoint
   * 
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
   * @protected
   * @function isObstacle
   * 
   * Checks if a cell at the given coordinates is an obstacle.
   *
   * @param {number} x - The x-coordinate of the cell.
   * @param {number} y - The y-coordinate of the cell.
   * @returns {boolean} - Returns true if the cell is an obstacle, false otherwise.
   */
  protected isObstacle(x: number, y: number): boolean {
    return this.isValidPoint(x, y) && this.obstacleGrid[y][x];
  }

  /**
   * @protected
   * @function addToOpenSet
   * 
   * Adds a node to the open set for further exploration during the pathfinding search.
   * Calculates the heuristic value (h) for the node and adds it to the open set.
   *
   * @param {GraphNode<T>} node - The node to be added to the open set.
   * @param {GraphNode<T>} goal - The goal node used to calculate the heuristic value (h).
   * @param {number} g - The cost to reach the node from the start node (g value).
   * @returns {void}
   */
  protected addToOpenSet(node: GraphNode<T>, goal: GraphNode<T>, g: number): void {
    const pathfindingNode = createPathFindingNode(node, goal, g, this.heuristicType);
    this.openSet.push(pathfindingNode);
  }

  /**
   * @protected
   * @function getNextNodeFromOpenSet
   * 
   * Retrieves the node with the lowest f value from the open set.
   * The open set is sorted based on the f values of its nodes.
   *
   * @returns {GraphNode<T>} - The node with the lowest f value from the open set.
   */
  protected getNextNodeFromOpenSet(): GraphNode<T> {
    this.openSet.sort((a, b) => a.f - b.f);
    return this.openSet.shift()!.node;
  }

  /**
   * @protected
   * @function processNeighborNode
   * 
   * Processes a neighbor node of the current node during the pathfinding search.
   * Calculates the cost to move to the neighbor from the start node (g value).
   * If the neighbor is not in the open set or has a lower g value, it is added to the open set.
   *
   * @param {GraphNode<T>} neighbor - The neighbor node to be processed.
   * @param {GraphNode<T>} current - The current node in the search.
   * @param {GraphNodeId} neighborId - The ID of the neighbor node.
   * @param {number} gFromStart - The cost to move from the start node to the neighbor node (g value).
   * @returns {void}
   */
  protected processNeighborNode(neighbor: GraphNode<T>, current: GraphNode<T>, neighborId: GraphNodeId, gFromStart: number): void {
    const neighborNode: PathfindingNode<T> = createPathFindingNode(neighbor, this.goal, gFromStart, this.heuristicType);

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