import { PathfindingUtils } from '../../src/pathfinding';
import { GraphNode, GraphNodeId, Point } from "../../src/types";

describe("PathfindingUtils.heuristic", () => {
  it("should calculate the default heuristic correctly", () => {
    // Test with points (0,0) and (3,4)
    const nodeA: GraphNode<Point> = { id: "0,0", data: { x: 0, y: 0 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const nodeB: GraphNode<Point> = { id: "3,4", data: { x: 3, y: 4 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeA, nodeB);
    expect(estimatedCost).toBe(5);
  });

  it("should handle negative coordinates correctly", () => {
    // Test with points (-2, -3) and (5, 6)
    const nodeC: GraphNode<Point> = { id: '-2,-3', data: { x: -2, y: -3 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const nodeD: GraphNode<Point> = { id: "5,6", data: { x: 5, y: 6 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeC, nodeD);

    const expectedCost = 11.4301;
    const precisionThreshold = 0.0001;

    expect(estimatedCost).toBeCloseTo(expectedCost, precisionThreshold);
  });

  it("should handle non-integer coordinates correctly", () => {
    // Test with points (1.5, 2.5) and (4.5, 5.5)
    const nodeE: GraphNode<Point> = { id: "1.5,2.5", data: { x: 1.5, y: 2.5 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const nodeF: GraphNode<Point> = { id: "4.5,5.5", data: { x: 4.5, y: 5.5 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeE, nodeF);
    expect(estimatedCost).toBeCloseTo(4.2426, 4);
  });

  it("should handle identical coordinates correctly", () => {
    // Test with points (0, 0) and (0, 0)
    const nodeG: GraphNode<Point> = { id: "0,0", data: { x: 0, y: 0 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const nodeH: GraphNode<Point> = { id: "0,0", data: { x: 0, y: 0 }, neighbors: new Map<GraphNodeId, GraphNode<Point>>(), parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeG, nodeH);
    expect(estimatedCost).toBe(0);
  });
});
