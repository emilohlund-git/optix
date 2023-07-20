import { PathfindingUtils } from "../../src/pathfinding";
import { GraphNode, Point } from "../../src/types";

function createGraphNode(id: string, data: Point): GraphNode<Point> {
  return { id, data, neighbors: [], parent: null };
}

describe('PathfindingUtils.reconstructPath', () => {
  test('should reconstruct path correctly', () => {
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 2, y: 2 };

    // Convert startData and goalData into GraphNode<Point> instances
    const startNode: GraphNode<Point> = createGraphNode('0,0', startData);
    const goalNode: GraphNode<Point> = createGraphNode('2,2', goalData);

    // Perform A* pathfinding algorithm
    const cameFrom: { [id: string]: GraphNode<Point> | null } = {
      '1,0': startNode,
      '1,1': createGraphNode('1,0', { x: 1, y: 0 }),
      '2,1': createGraphNode('1,1', { x: 1, y: 1 }),
      '0,1': createGraphNode('0,2', { x: 0, y: 2 }),
      '1,2': createGraphNode('0,1', { x: 0, y: 1 }),
      '2,2': createGraphNode('1,2', { x: 1, y: 2 }),
    };

    const path = PathfindingUtils.reconstructPath(goalNode, cameFrom);

    expect(path).toEqual([
      { x: 0, y: 2 },
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
    ]);
  });

  test('should return empty path if no path is found', () => {
    const goalData: Point = { x: 2, y: 2 };
    const goalNode: GraphNode<Point> = createGraphNode('2,2', goalData);

    // Empty cameFrom object indicates no path is found
    const cameFrom: { [id: string]: GraphNode<Point> | null } = {};

    const path = PathfindingUtils.reconstructPath(goalNode, cameFrom);

    expect(path).toEqual([{ x: 2, y: 2 }]);
  });
});