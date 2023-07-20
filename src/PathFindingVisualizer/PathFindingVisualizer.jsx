import React from "react";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithm/dijkstra";

const PathFindingVisualizer = () => {
  const [startNodeRow, setStartNodeRow] = useState(10);
  const [startNodeCol, setStartNodeCol] = useState(15);
  const [finishNodeRow, setFinishNodeRow] = useState(10);
  const [finishNodeCol, setFinishNodeCol] = useState(35);

  const START_NODE_ROW = startNodeRow;
  const START_NODE_COL = startNodeCol;
  const FINISH_NODE_ROW = finishNodeRow;
  const FINISH_NODE_COL = finishNodeCol;

  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    const grid = getInitailaGrid();
    setGrid(grid);
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) {
      return;
    }
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const getInitailaGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };

  const createNode = (col, row) => {
    return {
      col: col,
      row: row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    // wall is created only to other nodes, not to start and finish nodes
    if (
      node !== grid[START_NODE_ROW][START_NODE_COL] &&
      node !== grid[FINISH_NODE_ROW][FINISH_NODE_COL]
    ) {
      const newNode = {
        ...node,
        isWall: !node.isWall,
      };
      newGrid[row][col] = newNode;
      return newGrid;
    }
    newGrid[row][col] = node;
    return newGrid;
  };

  function animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        // dont animate start and finish node
        if (
          node !== grid[START_NODE_ROW][START_NODE_COL] &&
          node !== grid[FINISH_NODE_ROW][FINISH_NODE_COL]
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path";
        }
      }, 50 * i);
    }
  }

  function animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        // dont animate start and finish node
        if (
          node !== grid[START_NODE_ROW][START_NODE_COL] &&
          node !== grid[FINISH_NODE_ROW][FINISH_NODE_COL]
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }
      }, 10 * i);
    }
  }

  function visualizeDijkstra() {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  function resetGrid() {
    const grid = getInitailaGrid();
    setGrid(grid);
  }

  function clearBoard() {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 50; j++) {
        if (grid[i][j] === grid[startNodeRow][startNodeCol]) {
          setStartNodeRow(10);
          setStartNodeCol(15);
          document.getElementById(
            `node-${startNodeRow}-${startNodeCol}`
          ).className = "node node-start";
        } else if (grid[i][j] === grid[finishNodeRow][finishNodeCol]) {
          setFinishNodeRow(10);
          setFinishNodeCol(35);
          document.getElementById(
            `node-${finishNodeRow}-${finishNodeCol}`
          ).className = "node node-finish";
        } else {
          const grid = getInitailaGrid;
          setGrid(grid);
          document.getElementById(`node-${i}-${j}`).className = "node";
        }
      }
    }
  }
  //////////////////////////// Start and Finish Nodes Movement /////////////////////////////////////////////////////////////
  function startUp() {
    if (startNodeRow > 1 && startNodeRow < 20) {
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol}`
      ).className = "node";
      setStartNodeRow(startNodeRow - 1);
      document.getElementById(
        `node-${startNodeRow - 1}-${startNodeCol}`
      ).className = "node node-start";
    }
  }
  function startDown() {
    if (startNodeRow > 0 && startNodeRow < 19) {
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol}`
      ).className = "node";
      setStartNodeRow(startNodeRow + 1);
      document.getElementById(
        `node-${startNodeRow + 1}-${startNodeCol}`
      ).className = "node node-start";
    }
  }
  function startLeft() {
    if (startNodeCol > 1 && startNodeCol < 50) {
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol}`
      ).className = "node";
      setStartNodeCol(startNodeCol - 1);
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol - 1}`
      ).className = "node node-start";
    }
  }

  function startRight() {
    if (startNodeCol > 0 && startNodeCol < 49) {
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol}`
      ).className = "node";
      setStartNodeCol(startNodeCol + 1);
      document.getElementById(
        `node-${startNodeRow}-${startNodeCol + 1}`
      ).className = "node node-start";
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  function finishUp() {
    if (finishNodeRow > 1 && finishNodeRow < 20) {
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol}`
      ).className = "node";
      setFinishNodeRow(finishNodeRow - 1);
      document.getElementById(
        `node-${finishNodeRow - 1}-${finishNodeCol}`
      ).className = "node node-finish";
    }
  }
  function finishDown() {
    if (finishNodeRow > 0 && finishNodeRow < 19) {
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol}`
      ).className = "node";
      setFinishNodeRow(finishNodeRow + 1);
      document.getElementById(
        `node-${finishNodeRow + 1}-${finishNodeCol}`
      ).className = "node node-finish";
    }
  }
  function finishLeft() {
    if (finishNodeCol > 1 && finishNodeCol < 50) {
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol}`
      ).className = "node";
      setFinishNodeCol(finishNodeCol - 1);
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol - 1}`
      ).className = "node node-finish";
    }
  }

  function finishRight() {
    if (finishNodeCol > 0 && finishNodeCol < 49) {
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol}`
      ).className = "node";
      setFinishNodeCol(finishNodeCol + 1);
      document.getElementById(
        `node-${finishNodeRow}-${finishNodeCol + 1}`
      ).className = "node node-finish";
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function createMaze() {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node node";
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol}`
    ).className = "node node";
    setStartNodeRow(1);
    setStartNodeCol(1);
    setFinishNodeRow(18);
    setFinishNodeCol(48);
    document.getElementById(
      `node-${startNodeRow - 9}-${startNodeCol - 14}`
    ).className = "node node-start";
    document.getElementById(
      `node-${finishNodeRow + 8}-${finishNodeCol + 13}`
    ).className = "node node-finish";
    ////////////////////////////////////////////////////////////////
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (
          i === 0 ||
          j === 0 ||
          i === grid.length - 1 ||
          j === grid[0].length - 1 ||
          (j === 10 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5)) ||
          (j === 26 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5)) ||
          (j === 4 && (i === 3 || i === 4 || i === 5 || i === 6 || i === 7)) ||
          (j === 8 && (i === 8 || i === 9 || i === 10 || i === 11)) ||
          (j === 13 && (i === 10 || i === 11 || i === 12 || i === 13)) ||
          (j === 13 && (i === 14 || i === 15 || i === 16 || i === 17)) ||
          (j === 25 && (i === 15 || i === 16 || i === 17 || i === 18)) ||
          (j === 34 && (i === 11 || i === 12 || i === 13 || i === 14)) ||
          (j === 34 && (i === 15 || i === 16 || i === 17 || i === 18)) ||
          (j === 45 && (i === 15 || i === 16 || i === 17 || i === 18)) ||
          (j === 18 && (i === 4 || i === 5 || i === 6 || i === 7 || i === 8)) ||
          (j === 22 && (i === 8 || i === 9 || i === 10 || i === 11)) ||
          (j === 30 && (i === 6 || i === 7 || i === 8 || i === 9)) ||
          (j === 37 && (i === 6 || i === 7 || i === 8 || i === 9)) ||
          (j === 43 && (i === 10 || i === 11 || i === 12 || i === 13)) ||
          (i === 7 && (j === 5 || j === 6 || j === 7 || j === 8 || j === 9)) ||
          (i === 7 && (j === 10 || j === 11 || j === 12 || j === 13)) ||
          (i === 7 && (j === 14 || j === 15 || j === 16 || j === 17)) ||
          (i === 10 && (j === 37 || j === 38 || j === 39 || j === 40)) ||
          (i === 10 && (j === 41 || j === 42)) ||
          (i === 13 && (j === 1 || j === 2 || j === 3 || j === 4 || j === 5)) ||
          (i === 17 && (j === 9 || j === 10 || j === 11 || j === 12)) ||
          (i === 13 && (j === 1 || j === 2 || j === 3 || j === 4 || j === 5)) ||
          (i === 6 && (j === 26 || j === 27 || j === 28 || j === 29)) ||
          (i === 4 && (j === 41 || j === 42 || j === 43 || j === 44)) ||
          (i === 4 && (j === 45 || j === 46 || j === 47 || j === 48)) ||
          (i === 10 && (j === 27 || j === 28 || j === 29 || j === 30))
        ) {
          grid[i][j].isWall = true;
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div>
        <Header
          visualizeDijkstra={visualizeDijkstra}
          resetGrid={resetGrid}
          startUp={startUp}
          startDown={startDown}
          startLeft={startLeft}
          startRight={startRight}
          finishUp={finishUp}
          finishDown={finishDown}
          finishLeft={finishLeft}
          finishRight={finishRight}
          createMaze={createMaze}
          clearBoard={clearBoard}
        />
      </div>
      <div className="main">
        <div className="grid">
          {grid.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const { row, col, isStart, isFinish, isWall } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      row={row}
                      col={col}
                      isStart={isStart}
                      isFinish={isFinish}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                      onMouseUp={() => handleMouseUp()}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PathFindingVisualizer;
