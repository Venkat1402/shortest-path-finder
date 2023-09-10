export function startUp(startNodeRow, setStartNodeRow, startNodeCol) {
  if (startNodeRow > 1 && startNodeRow < 28) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeRow(startNodeRow - 1);
    document.getElementById(
      `node-${startNodeRow - 1}-${startNodeCol}`
    ).className = "node node-start";
  }
}
export function startDown(startNodeRow, setStartNodeRow, startNodeCol) {
  if (startNodeRow > 0 && startNodeRow < 27) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeRow(startNodeRow + 1);
    document.getElementById(
      `node-${startNodeRow + 1}-${startNodeCol}`
    ).className = "node node-start";
  }
}
export function startLeft(startNodeCol, setStartNodeCol, startNodeRow) {
  if (startNodeCol > 1 && startNodeCol < 60) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeCol(startNodeCol - 1);
    document.getElementById(
      `node-${startNodeRow}-${startNodeCol - 1}`
    ).className = "node node-start";
  }
}

export function startRight(startNodeCol, setStartNodeCol, startNodeRow) {
  if (startNodeCol > 0 && startNodeCol < 59) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeCol(startNodeCol + 1);
    document.getElementById(
      `node-${startNodeRow}-${startNodeCol + 1}`
    ).className = "node node-start";
  }
}
///////////////////////////////////////////////////////////////////////////////
export function finishUp(finishNodeRow, setFinishNodeRow, finishNodeCol) {
  if (finishNodeRow > 1 && finishNodeRow < 28) {
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol}`
    ).className = "node";
    setFinishNodeRow(finishNodeRow - 1);
    document.getElementById(
      `node-${finishNodeRow - 1}-${finishNodeCol}`
    ).className = "node node-finish";
  }
}
export function finishDown(finishNodeRow, setFinishNodeRow, finishNodeCol) {
  if (finishNodeRow > 0 && finishNodeRow < 27) {
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol}`
    ).className = "node";
    setFinishNodeRow(finishNodeRow + 1);
    document.getElementById(
      `node-${finishNodeRow + 1}-${finishNodeCol}`
    ).className = "node node-finish";
  }
}
export function finishLeft(finishNodeCol, setFinishNodeCol, finishNodeRow) {
  if (finishNodeCol > 1 && finishNodeCol < 60) {
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol}`
    ).className = "node";
    setFinishNodeCol(finishNodeCol - 1);
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol - 1}`
    ).className = "node node-finish";
  }
}

export function finishRight(finishNodeCol, setFinishNodeCol, finishNodeRow) {
  if (finishNodeCol > 0 && finishNodeCol < 59) {
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol}`
    ).className = "node";
    setFinishNodeCol(finishNodeCol + 1);
    document.getElementById(
      `node-${finishNodeRow}-${finishNodeCol + 1}`
    ).className = "node node-finish";
  }
}
