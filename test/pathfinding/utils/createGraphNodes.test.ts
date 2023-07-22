import { Connection, PathfindingUtils, Point } from "../../../src";
import { createGraphNodes } from "../../../src/pathfinding/utils/createGraphNodes";

describe("PathfindingUtils.utils.createGraphNodes", () => {
  it("should set the correct dimensions for the obstacleGrid", () => {
    const obstacles: Point[] = [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 4, y: 5 }
    ];

    const connections: Connection[] = PathfindingUtils.generateConnections(20, 20, obstacles);

    const dimensions: number[] = [0, 0];
    const createDataFn = (id: string) => {
      const [x, y] = id.split(",").map(Number) as [number, number];
      return { x, y } as Point;
    };

    createGraphNodes(connections, createDataFn, dimensions);

    // Assert the dimensions array contains the correct values
    expect(dimensions).toEqual([19, 19]);
  });
});