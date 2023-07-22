import { Connection, PathfindingUtils, Point } from "../../src";
import { generateConnectionArray } from "../../src/pathfinding/generateConnectionArray";

describe("PathfindingUtils.findShortestPath.thetaStar", () => {
  it("should find a valid path in a complex graph with obstacles", () => {
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 19, y: 19 };

    const connections: Connection[] = generateConnectionArray(20, 20, []);

    const obstacles: Point[] = [
      { x: 14, y: 14 },
      { x: 15, y: 15 },
      { x: 16, y: 16 },
      { x: 4, y: 5 },
      { x: 3, y: 4 },
      { x: 2, y: 3 },
    ]

    const result = PathfindingUtils.findShortestPath(startData, goalData, connections, obstacles, {
      algorithm: 'Theta*'
    });

    console.log(result);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(39); // The path should contain 39 points (start and goal with 37 intermediate points)
    for (const point of result) {
      expect(obstacles).not.toContainEqual(point);
    }
  });
});
