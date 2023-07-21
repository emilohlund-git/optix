import { PathfindingUtils } from "../../src";
import { generateConnectionArray } from "../../src/pathfinding/generateConnectionArray";
import { Connection, GraphNode, Point } from "../../src/types";

function getExecutionTime(start: [number, number], end: [number, number]): number {
  const [startSeconds, startNanoseconds] = start;
  const [endSeconds, endNanoseconds] = end;
  const elapsedTimeMilliseconds =
    (endSeconds - startSeconds) * 1000 + (endNanoseconds - startNanoseconds) / 1000000;

  return Math.max(0, elapsedTimeMilliseconds);
}

function euclideanHeuristic<T extends Point>(node: GraphNode<T>, goal: GraphNode<T>): number {
  const dx = Math.abs(node.data.x - goal.data.x);
  const dy = Math.abs(node.data.y - goal.data.y);
  return Math.sqrt(dx * dx + dy * dy);
}

function manhattanHeuristic<T extends Point>(node: GraphNode<T>, goal: GraphNode<T>): number {
  const dx = Math.abs(node.data.x - goal.data.x);
  const dy = Math.abs(node.data.y - goal.data.y);
  return dx + dy;
}

test("A* performance test", async () => {
  const start = { x: 1, y: 1 }
  const goal = { x: 399, y: 399 };

  console.log(start, goal);

  const obstacles: Point[] = [];

  const connections: Connection[] = generateConnectionArray(20, 20, obstacles);

  const performanceData: { [key: string]: number } = {};

  // Measure the execution time with Manhattan Heuristic
  const startManhattan = process.hrtime();
  const pathManhattan = PathfindingUtils.findShortestPath(start, goal, connections, [], {
    heuristic: manhattanHeuristic
  });
  const endManhattan = process.hrtime(startManhattan);
  const executionTimeManhattan = getExecutionTime(startManhattan, endManhattan);
  performanceData["Manhattan Heuristic"] = executionTimeManhattan;

  // Measure the execution time with Euclidean Heuristic
  const startEuclidean = process.hrtime();
  const pathEuclidean = PathfindingUtils.findShortestPath(start, goal, connections, [], {
    heuristic: euclideanHeuristic,
  });
  const endEuclidean = process.hrtime(startEuclidean);
  const executionTimeEuclidean = getExecutionTime(startEuclidean, endEuclidean);
  performanceData["Euclidean Heuristic"] = executionTimeEuclidean;

  // Centralized console.log for the performance report
  console.log("\nPerformance Report:");
  for (const [heuristic, executionTime] of Object.entries(performanceData)) {
    console.log(`${heuristic}: ${executionTime}ms`);
  }

  // Check if a valid path was found with Manhattan Heuristic
  if (pathManhattan.length > 0) {
    console.log("Path found with Manhattan Heuristic:", pathManhattan);
  } else {
    console.log("No path found with Manhattan Heuristic.");
  }

  // Check if a valid path was found with Euclidean Heuristic
  if (pathEuclidean.length > 0) {
    console.log("Path found with Euclidean Heuristic:", pathEuclidean);
  } else {
    console.log("No path found with Euclidean Heuristic.");
  }

  await new Promise((resolve) => setTimeout(resolve, 100));
}, 300000);