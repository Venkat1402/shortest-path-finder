export function startUp(startNodeRow, startNodeCol, setStartNodeRow) {
  if (startNodeRow > 1 && startNodeRow < 20) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeRow(startNodeRow - 1);
    document.getElementById(
      `node-${startNodeRow - 1}-${startNodeCol}`
    ).className = "node node-start";
  }
}
export function startDown(startNodeRow, startNodeCol, setStartNodeRow) {
  if (startNodeRow > 0 && startNodeRow < 19) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeRow(startNodeRow + 1);
    document.getElementById(
      `node-${startNodeRow + 1}-${startNodeCol}`
    ).className = "node node-start";
  }
}
export function startLeft(startNodeRow, startNodeCol, setStartNodeCol) {
  if (startNodeCol > 1 && startNodeCol < 50) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeCol(startNodeCol - 1);
    document.getElementById(
      `node-${startNodeRow}-${startNodeCol - 1}`
    ).className = "node node-start";
  }
}

export function startRight(startNodeRow, startNodeCol, setStartNodeCol) {
  if (startNodeCol > 0 && startNodeCol < 49) {
    document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
      "node";
    setStartNodeCol(startNodeCol + 1);
    document.getElementById(
      `node-${startNodeRow}-${startNodeCol + 1}`
    ).className = "node node-start";
  }
}
///////////////////////////////////////////////////////////////////////////////
export function finishUp(finishNodeRow, finishNodeCol, setFinishNodeRow) {
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
export function finishDown(finishNodeRow, finishNodeCol, setFinishNodeRow) {
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
export function finishLeft(finishNodeRow, finishNodeCol, setFinishNodeCol) {
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

export function finishRight(finishNodeRow, finishNodeCol, setFinishNodeCol) {
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
