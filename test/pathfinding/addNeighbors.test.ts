import { PathfindingUtils } from '../../src/pathfinding';
import { GraphNode, Point } from "../../src/types";

describe("PathfindingUtils.addNeighbors", () => {
  it("should add neighbors to graph nodes correctly", () => {
    const nodes: GraphNode<Point>[] = [
      { id: "0,0", data: { x: 0, y: 0 }, neighbors: [], parent: null },
      { id: "1,0", data: { x: 1, y: 0 }, neighbors: [], parent: null },
      { id: "1,1", data: { x: 1, y: 1 }, neighbors: [], parent: null },
      { id: "2,1", data: { x: 2, y: 1 }, neighbors: [], parent: null },
    ];

    const connections: [string, string][] = [
      ["0,0", "1,0"],
      ["1,0", "1,1"],
      ["1,1", "2,1"],
    ];

    PathfindingUtils.addNeighbors(nodes, connections);

    expect(nodes[0].neighbors.length).toBe(1);
    expect(nodes[0].neighbors[0].id).toBe("1,0");
    expect(nodes[1].neighbors.length).toBe(2);
    expect(nodes[1].neighbors[0].id).toBe("0,0");
    expect(nodes[1].neighbors[1].id).toBe("1,1");
    expect(nodes[2].neighbors.length).toBe(2);
    expect(nodes[2].neighbors[0].id).toBe("1,0");
    expect(nodes[2].neighbors[1].id).toBe("2,1");
  });

  it("should not add invalid neighbors to graph nodes", () => {
    const nodes: GraphNode<Point>[] = [
      { id: "0,0", data: { x: 0, y: 0 }, neighbors: [], parent: null },
      { id: "1,0", data: { x: 1, y: 0 }, neighbors: [], parent: null },
      { id: "1,1", data: { x: 1, y: 1 }, neighbors: [], parent: null },
    ];

    const connections: [string, string][] = [
      ["0,0", "1,0"],
      ["1,0", "2,2"], // Invalid node ID "2,2"
    ];

    PathfindingUtils.addNeighbors(nodes, connections);

    expect(nodes[0].neighbors.length).toBe(1);
    expect(nodes[0].neighbors[0].id).toBe("1,0");
    expect(nodes[1].neighbors.length).toBe(1);
    expect(nodes[1].neighbors[0].id).toBe("0,0");
    expect(nodes[2].neighbors.length).toBe(0); // Invalid node should not be added
  });
});
