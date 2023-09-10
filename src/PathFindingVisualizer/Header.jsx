import React from "react";
import "./Header.css";

const Header = (props) => {
  const {
    visualizeDijkstra,
    resetGrid,
    startUp,
    startDown,
    startLeft,
    startRight,
    finishUp,
    finishDown,
    finishLeft,
    finishRight,
    createMaze,
    clearBoard,
    help,
    buttonsDisabled,
  } = props;
  return (
    <div className="header">
      <div className="top-box">
        <h2>Shortest Path Visualizer</h2>
        <div className="movement-buttons">
          <button disabled={buttonsDisabled} onClick={startLeft}>{`<`}</button>
          <div className="vertical-movement-buttons">
            <button disabled={buttonsDisabled} onClick={startUp}>
              ^
            </button>
            <span>Start Node</span>
            <button disabled={buttonsDisabled} onClick={startDown}>
              v
            </button>
          </div>
          <button disabled={buttonsDisabled} onClick={startRight}>{`>`}</button>
        </div>
        <div className="movement-buttons">
          <button disabled={buttonsDisabled} onClick={finishLeft}>{`<`}</button>
          <div className="vertical-movement-buttons">
            <button disabled={buttonsDisabled} onClick={finishUp}>
              ^
            </button>
            <span>Finish Node</span>
            <button disabled={buttonsDisabled} onClick={finishDown}>
              v
            </button>
          </div>
          <button
            disabled={buttonsDisabled}
            onClick={finishRight}
          >{`>`}</button>
        </div>
        <div className="buttons-box">
          <button disabled={buttonsDisabled} onClick={createMaze}>
            Create Maze
          </button>
          <button disabled={buttonsDisabled} onClick={visualizeDijkstra}>
            Visualize Dijkstra's Algorithm
          </button>
          <button disabled={buttonsDisabled} onClick={clearBoard}>
            Clear Board
          </button>
          <button disabled={buttonsDisabled} onClick={help}>
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
