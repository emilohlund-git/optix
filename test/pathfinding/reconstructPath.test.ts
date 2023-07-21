import { PathfindingUtils } from "../../src/pathfinding";
import { GraphNode, GraphNodeId, Point } from "../../src/types";

function createGraphNode(id: GraphNodeId, data: Point): GraphNode<Point> {
  return { id, data, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
}

describe('PathfindingUtils.reconstructPath', () => {
  test('should reconstruct path correctly', () => {
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 2, y: 2 };

    // Convert startData and goalData into GraphNode<Point> instances
    const startNode: GraphNode<Point> = createGraphNode('0,0', startData);
    const goalNode: GraphNode<Point> = createGraphNode('2,2', goalData);

    // Perform A* pathfinding algorithm
    let cameFrom = new Map<GraphNodeId, GraphNode<Point>>();
    const node1 = createGraphNode('1,0', { x: 1, y: 0 })
    const node2 = createGraphNode('1,1', { x: 1, y: 1 })
    const node3 = createGraphNode('0,2', { x: 0, y: 2 })
    const node4 = createGraphNode('0,1', { x: 0, y: 1 })
    const node5 = createGraphNode('1,2', { x: 1, y: 2 })

    // Set the parent node correctly for each node
    cameFrom.set(node1.id, startNode); // node1's parent is startNode
    cameFrom.set(node2.id, node1); // node2's parent is node1
    cameFrom.set(node3.id, node2); // node3's parent is node2
    cameFrom.set(node4.id, node3); // node4's parent is node3
    cameFrom.set(node5.id, node4); // node5's parent is node4
    cameFrom.set(goalNode.id, node5); // goalNode's parent is node5

    const path = PathfindingUtils.reconstructPath(goalNode, cameFrom);
    console.log(path);

    expect(path).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 }
    ]);
  });

  test('should return empty path if no path is found', () => {
    const goalData: Point = { x: 2, y: 2 };
    const goalNode: GraphNode<Point> = createGraphNode('2,2', goalData);

    // Empty cameFrom object indicates no path is found
    let cameFrom = new Map<GraphNodeId, GraphNode<Point>>();

    const path = PathfindingUtils.reconstructPath(goalNode, cameFrom);

    expect(path).toEqual([{ x: 2, y: 2 }]);
  });
});