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
  } = props;
  return (
    <div className="header">
      <div className="top-box">
        <h2>Shortest Path Visualizer</h2>
        <div className="movement-buttons">
          <button onClick={startLeft}>{`<`}</button>
          <div>
            <button onClick={startUp}>^</button>
            <span>Start Node</span>
            <button onClick={startDown}>v</button>
          </div>
          <button onClick={startRight}>{`>`}</button>
        </div>
        <div className="movement-buttons">
          <button onClick={finishLeft}>{`<`}</button>
          <div>
            <button onClick={finishUp}>^</button>
            <span>Finish Node</span>
            <button onClick={finishDown}>v</button>
          </div>
          <button onClick={finishRight}>{`>`}</button>
        </div>
        <div className="buttons-box">
          <button onClick={createMaze}>Create Maze</button>
          <button onClick={visualizeDijkstra}>
            Visualize Dijkstra's Algorithm
          </button>
          <button onClick={clearBoard}>Clear Board</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
