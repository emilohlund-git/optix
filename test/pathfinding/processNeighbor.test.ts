import { PathfindingUtils } from '../../src/pathfinding';
import { GraphNode, PathfindingNode, Point } from '../../src/types';

describe('PathfindingUtils.processNeighbor', () => {
  const startNode: GraphNode<Point> = { id: 'A', data: { x: 0, y: 0 }, neighbors: [], parent: null };
  const goalNode: GraphNode<Point> = { id: 'B', data: { x: 5, y: 5 }, neighbors: [], parent: null };

  const heuristic = (node: GraphNode<Point>) => Math.abs(node.data.x - goalNode.data.x) + Math.abs(node.data.y - goalNode.data.y);

  test('should process neighbor with lower g score', () => {
    const neighborNode: GraphNode<Point> = { id: 'C', data: { x: 1, y: 1 }, neighbors: [], parent: null };
    const openSet: PathfindingNode<Point>[] = [];
    const closedSet: GraphNode<Point>[] = [];
    const currentNode: PathfindingNode<Point> = { node: startNode, f: 0, g: 0, h: 0, parent: null };

    PathfindingUtils.processNeighbor(currentNode, neighborNode, createPathfindingNode(goalNode), openSet, closedSet, heuristic);

    expect(openSet.length).toBe(1);
    expect(openSet[0].node).toBe(neighborNode);
    expect(openSet[0].g).toBe(1);
    expect(openSet[0].h).toBe(8); // Heuristic value for (1, 1) to (5, 5)
    expect(openSet[0].f).toBe(9); // g + h
    expect(openSet[0].parent).toBe(currentNode);
  });

  test('should not add neighbor already in closed set', () => {
    const neighborNode: GraphNode<Point> = { id: 'D', data: { x: 2, y: 2 }, neighbors: [], parent: null };
    const openSet: PathfindingNode<Point>[] = [];
    const closedSet: GraphNode<Point>[] = [neighborNode];
    const currentNode: PathfindingNode<Point> = { node: startNode, f: 0, g: 0, h: 0, parent: null };

    PathfindingUtils.processNeighbor(currentNode, neighborNode, createPathfindingNode(goalNode), openSet, closedSet, heuristic);

    expect(openSet.length).toBe(0);
  });

  test('should update neighbor with lower g score', () => {
    const neighborNode: GraphNode<Point> = { id: 'E', data: { x: 3, y: 3 }, neighbors: [], parent: null };
    const openSet: PathfindingNode<Point>[] = [{ node: neighborNode, f: 10, g: 5, h: 5, parent: createPathfindingNode(startNode) }];
    const closedSet: GraphNode<Point>[] = [];
    const currentNode: PathfindingNode<Point> = { node: startNode, f: 0, g: 0, h: 0, parent: null };

    PathfindingUtils.processNeighbor(currentNode, neighborNode, createPathfindingNode(goalNode), openSet, closedSet, heuristic);

    expect(openSet.length).toBe(1);
    expect(openSet[0].g).toBe(1);
    expect(openSet[0].f).toBe(5);
    expect(openSet[0].parent).toStrictEqual(createPathfindingNode(startNode));
  });
});

function createPathfindingNode<T extends Point>(node: GraphNode<T>): PathfindingNode<T> {
  return {
    node,
    f: 0,
    g: 0,
    h: 0,
    parent: null,
  };
}