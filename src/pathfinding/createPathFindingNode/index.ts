import { heuristic } from "../heuristic";
import { HeuristicType } from "../heuristic/interfaces/HeuristicType";
import { GraphNode } from "../interfaces/GraphNode";
import { PathfindingNode } from "../interfaces/PathfindingNode";
import { Point } from "../interfaces/Point";

export function createPathFindingNode<T extends Point>(
  node: GraphNode<T>,
  goal: GraphNode<T>,
  gFromStart: number,
  heuristicType: HeuristicType,
): PathfindingNode<T> {
  return {
    node,
    f: gFromStart + heuristic(node, goal, heuristicType),
    g: gFromStart,
    h: heuristic(node, goal, heuristicType),
    parent: null,
  };
}