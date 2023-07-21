import { PathfindingUtils } from "../../src";
import { Connection, Point } from "../../src/types";

describe("PathfindingUtils.findShortestPath.aStar", () => {
  it("should find a valid path in a complex graph with obstacles", () => {
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 4, y: 4 };

    const connections: Connection[] = [
      ["0,0", "0,1"],
      ["0,1", "0,2"],
      ["0,2", "0,3"],
      ["0,3", "0,4"],
      ["0,4", "1,4"],
      ["1,4", "2,4"],
      ["2,4", "2,3"],
      ["2,3", "3,3"],
      ["3,3", "4,3"],
      ["4,3", "4,4"],
      // Adding obstacles to block direct path
      ["1,1", "1,2"],
      ["1,2", "1,3"],
      ["2,1", "3,1"],
      ["3,1", "3,2"],
      ["3,2", "3,3"],
    ];

    const expectedPath = [
      { "x": 0, "y": 0 },
      { "x": 0, "y": 1 },
      { "x": 0, "y": 2 },
      { "x": 0, "y": 3 },
      { "x": 0, "y": 4 },
      { "x": 1, "y": 4 },
      { "x": 2, "y": 4 },
      { "x": 2, "y": 3 },
      { "x": 3, "y": 3 },
      { "x": 4, "y": 3 },
      { "x": 4, "y": 4 },
    ];

    const result = PathfindingUtils.findShortestPath(startData, goalData, connections, []);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(11); // The path should contain 11 points (start and goal with 9 intermediate points)
    expect(result).toEqual(expectedPath);
  });

  it("should find a valid path in a more complex graph", () => {
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 2, y: 2 };

    const connections: Connection[] = [
      ["0,0", "1,0"],
      ["0,0", "0,1"],
      ["0,1", "1,1"],
      ["1,0", "1,1"],
      ["1,1", "1,1"],
      ["1,1", "2,1"],
      ["0,1", "0,2"],
      ["0,2", "1,2"],
      ["1,1", "1,2"],
      ["1,1", "2,2"],
      ["1,2", "2,2"],
    ];

    const expectedPath = [
      { "x": 0, "y": 0 },
      { "x": 1, "y": 0 },
      { "x": 1, "y": 1 },
      { "x": 2, "y": 2 }
    ];

    const result = PathfindingUtils.findShortestPath(startData, goalData, connections, []);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(4); // The path should contain 4 points (start, 2 intermediate points, goal)
    expect(result).toEqual(expectedPath);
  });

  it("should find a valid path between start and goal", () => {
    // Create test data
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 2, y: 2 };

    // Define the connections between nodes (edges in the graph)
    const connections: Connection[] = [
      ["0,0", "1,1"],
      ["1,1", "2,2"],
    ];

    // Call the findPath method to get the result
    const result = PathfindingUtils.findShortestPath(startData, goalData, connections, []);

    // Expect the result to be an array of points representing the path
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result).toEqual([startData, { x: 1, y: 1 }, goalData]);
  });

  it("should return an empty array if no path is found", () => {
    // Create test data
    const startData: Point = { x: 0, y: 0 };
    const goalData: Point = { x: 3, y: 3 }; // A goal that is not connected to the start node

    // Define the connections between nodes (edges in the graph)
    const connections: Connection[] = [
      // No connections between start and goal
      // Add other connections if needed for more complex tests
    ];

    // Call the findPath method to get the result
    const result = PathfindingUtils.findShortestPath(startData, goalData, connections, []);

    // Expect the result to be an empty array since there is no valid path
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
  });
});
