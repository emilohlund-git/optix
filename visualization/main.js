window.onload = () => {
  const PathfindingUtils = window["optix.ts"].PathfindingUtils;
  console.log(PathfindingUtils);

  const startData = { x: 0, y: 0 };
  const goalData = { x: 19, y: 19 };

  const GRID_SIZE = 20;
  const CELL_SIZE = 20;
  const connections = PathfindingUtils.generateConnections(
    GRID_SIZE,
    GRID_SIZE,
    []
  );

  const gridContainer = document.getElementById("grid-container");
  const obstacles = [];

  let draggingStartNode = false;
  let draggingGoalNode = false;

  function toggleObstacle(x, y) {
    const obstacleIndex = obstacles.findIndex(
      (obstacle) => obstacle.x === x && obstacle.y === y
    );
    if (obstacleIndex === -1) {
      obstacles.push({ x, y });
    } else {
      obstacles.splice(obstacleIndex, 1);
    }
    drawGrid();
  }

  function drawGrid() {
    gridContainer.innerHTML = ""; // Clear the grid
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.width = `${CELL_SIZE}px`;
        cell.style.height = `${CELL_SIZE}px`;

        cell.addEventListener("click", () => {
          toggleObstacle(j, i);
        });

        // Set up the event listeners for dragging start and goal nodes
        cell.addEventListener("mousedown", (e) => {
          if (cell.classList.contains("start-node")) {
            draggingStartNode = true;
          } else if (cell.classList.contains("goal-node")) {
            draggingGoalNode = true;
          }
        });

        cell.addEventListener("mouseup", () => {
          draggingStartNode = false;
          draggingGoalNode = false;
        });

        cell.addEventListener("mousemove", (e) => {
          if (draggingStartNode) {
            startData.x = j;
            startData.y = i;
            drawGrid();
          } else if (draggingGoalNode) {
            goalData.x = j;
            goalData.y = i;
            drawGrid();
          }
        });

        gridContainer.appendChild(cell);
      }
    }

    // Perform the algorithm and get the current path
    const shortestPath = PathfindingUtils.findShortestPath(
      startData,
      goalData,
      connections,
      obstacles,
      { algorithm: "Theta*", heuristic: "chebyshev" }
    );

    // Draw obstacles with stylish patterns
    obstacles.length > 0 &&
      obstacles.forEach((obstacle) => {
        if (obstacle) {
          const obstacleCell =
            gridContainer.children[obstacle.y * GRID_SIZE + obstacle.x];
          obstacleCell.classList.add("obstacle");
        }
      });

    // Draw shortest path
    if (shortestPath.length > 0) {
      shortestPath.forEach((point, index) => {
        if (point) {
          const pathCell =
            gridContainer.children[point.y * GRID_SIZE + point.x];
          pathCell.classList.add("shortest-path-node");
        }
      });
    }

    // Set the start and goal points
    const startCell =
      gridContainer.children[startData.y * GRID_SIZE + startData.x];
    startCell.classList.add("start-node");

    const goalCell =
      gridContainer.children[goalData.y * GRID_SIZE + goalData.x];
    goalCell.classList.add("goal-node");
  }

  drawGrid();
};
