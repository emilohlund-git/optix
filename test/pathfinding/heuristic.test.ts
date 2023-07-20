import { PathfindingUtils } from '../../src/pathfinding';
import { GraphNode, Point } from "../../src/types";

describe("PathfindingUtils.heuristic", () => {
  it("should calculate the default heuristic correctly", () => {
    // Test with points (0,0) and (3,4)
    const nodeA: GraphNode<Point> = { id: "A", data: { x: 0, y: 0 }, neighbors: [], parent: null };
    const nodeB: GraphNode<Point> = { id: "B", data: { x: 3, y: 4 }, neighbors: [], parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeA, nodeB);
    expect(estimatedCost).toBe(5);
  });

  it("should handle negative coordinates correctly", () => {
    // Test with points (-2, -3) and (5, 6)
    const nodeC: GraphNode<Point> = { id: "C", data: { x: -2, y: -3 }, neighbors: [], parent: null };
    const nodeD: GraphNode<Point> = { id: "D", data: { x: 5, y: 6 }, neighbors: [], parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeC, nodeD);

    const expectedCost = 11.4301;
    const precisionThreshold = 0.0001;

    expect(estimatedCost).toBeCloseTo(expectedCost, precisionThreshold);
  });

  it("should handle non-integer coordinates correctly", () => {
    // Test with points (1.5, 2.5) and (4.5, 5.5)
    const nodeE: GraphNode<Point> = { id: "E", data: { x: 1.5, y: 2.5 }, neighbors: [], parent: null };
    const nodeF: GraphNode<Point> = { id: "F", data: { x: 4.5, y: 5.5 }, neighbors: [], parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeE, nodeF);
    expect(estimatedCost).toBeCloseTo(4.2426, 4);
  });

  it("should handle identical coordinates correctly", () => {
    // Test with points (0, 0) and (0, 0)
    const nodeG: GraphNode<Point> = { id: "G", data: { x: 0, y: 0 }, neighbors: [], parent: null };
    const nodeH: GraphNode<Point> = { id: "H", data: { x: 0, y: 0 }, neighbors: [], parent: null };
    const estimatedCost = PathfindingUtils.heuristic(nodeG, nodeH);
    expect(estimatedCost).toBe(0);
  });
});
