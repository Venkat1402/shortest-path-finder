import React from "react";
import "./Node.css";

const Node = (props) => {
  const {
    row,
    col,
    isStart,
    isFinish,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
  } = props;
  const extractClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div
      className={`node ${extractClassName}`}
      id={`node-${row}-${col}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {/* <p>Node</p> */}
    </div>
  );
};

export default Node;
