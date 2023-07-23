import { PathfindingUtils } from "..";
import { GraphNode } from "../interfaces/GraphNode";
import { Point } from "../interfaces/Point";
import { PathFinder } from "../pathFinder/PathFinder";

export class AStar<T extends Point> extends PathFinder<T> {
  algorithmSpecificCalculation(...params: any[]) {
    return;
  }

  calculateCost(current: GraphNode<T>, neighbor: GraphNode<T>): number {
    return PathfindingUtils.heuristic(current, neighbor, this.heuristic);
  }
}