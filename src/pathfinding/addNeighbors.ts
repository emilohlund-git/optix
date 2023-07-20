import { GraphNode, Point } from "../types";

/**
 * @namespace PathfindingUtils
 * 
 * Add neighbors to the graph nodes based on the given connections.
 *
 * This function adds neighbors to the graph nodes based on the specified connections. It iterates through the array of
 * connections, finds the corresponding nodes in the `nodes` array, and establishes neighbor relationships between them.
 * Each node in the graph will have its `neighbors` array updated with its adjacent nodes.
 *
 * @param {GraphNode<Point>[]} nodes - An array of graph nodes to which neighbors will be added.
 * @param {[string, string][]} connections - An array of tuples representing the connections between nodes (edges in the graph).
 * Each tuple contains the IDs of two nodes connected by an edge.
 * 
 * @example
 * // Define nodes and connections for the graph
 * const nodes: GraphNode<Point>[] = [
 *   { id: "0,0", data: { x: 0, y: 0 }, neighbors: [], parent: null },
 *   { id: "1,0", data: { x: 1, y: 0 }, neighbors: [], parent: null },
 *   { id: "1,1", data: { x: 1, y: 1 }, neighbors: [], parent: null },
 *   { id: "2,1", data: { x: 2, y: 1 }, neighbors: [], parent: null },
 * ];
 * 
 * const connections: [string, string][] = [
 *   ["0,0", "1,0"],
 *   ["1,0", "1,1"],
 *   ["1,1", "2,1"],
 * ];
 * 
 * addNeighbors(nodes, connections);
 *
 * console.log(nodes[0].neighbors);
 * // Output: [ { id: "1,0", data: { x: 1, y: 0 }, neighbors: [...], parent: null } ]
 *
 * console.log(nodes[1].neighbors);
 * // Output: [ { id: "0,0", data: { x: 0, y: 0 }, neighbors: [...], parent: null },
 * //           { id: "1,1", data: { x: 1, y: 1 }, neighbors: [...], parent: null } ]
 */
export function addNeighbors(nodes: GraphNode<Point>[], connections: [string, string][]): void {
  for (const [id1, id2] of connections) {
    const node1 = nodes.find((node) => node.id === id1);
    const node2 = nodes.find((node) => node.id === id2);
    if (node1 && node2) {
      node1.neighbors.push(node2);
      node2.neighbors.push(node1);
    }
  }
}