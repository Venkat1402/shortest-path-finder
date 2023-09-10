export function createMaze(
  grid,
  startNodeRow,
  startNodeCol,
  setStartNodeRow,
  setStartNodeCol,
  finishNodeRow,
  finishNodeCol,
  setFinishNodeRow,
  setFinishNodeCol
) {
  document.getElementById(`node-${startNodeRow}-${startNodeCol}`).className =
    "node node";
  document.getElementById(`node-${finishNodeRow}-${finishNodeCol}`).className =
    "node node";
  setStartNodeRow(1);
  setStartNodeCol(1);
  setFinishNodeRow(25);
  setFinishNodeCol(57);
  console.log(startNodeRow, startNodeCol);
  console.log(finishNodeRow, finishNodeCol);
  document.getElementById(`node-${1}-${1}`).className = "node node-start";
  document.getElementById(`node-${25}-${57}`).className = "node node-finish";
  ////////////////////////////////////////////////////////////////
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === grid.length - 1 ||
        j === grid[0].length - 1 ||
        (j === 10 && i >= 1 && i <= 5) ||
        (j === 26 && i >= 1 && i <= 5) ||
        (j === 4 && i >= 3 && i <= 7) ||
        (j === 8 && i >= 8 && i <= 11) ||
        (j === 13 && i >= 10 && i <= 13) ||
        (j === 13 && i >= 14 && i <= 17) ||
        (j === 25 && i >= 15 && i <= 18) ||
        (j === 34 && i >= 11 && i <= 14) ||
        (j === 34 && i >= 15 && i <= 18) ||
        (j === 45 && i >= 15 && i <= 18) ||
        (j === 18 && i >= 4 && i <= 8) ||
        (j === 22 && i >= 8 && i <= 11) ||
        (j === 30 && i >= 6 && i <= 9) ||
        (j === 37 && i >= 6 && i <= 9) ||
        (j === 43 && i >= 10 && i <= 13) ||
        (i === 7 && j >= 5 && j <= 9) ||
        (i === 7 && j >= 10 && j <= 13) ||
        (i === 7 && j >= 14 && j <= 17) ||
        (i === 10 && j >= 37 && j <= 40) ||
        (i === 10 && j >= 41 && j <= 42) ||
        (i === 13 && j >= 1 && j <= 5) ||
        (i === 17 && j >= 9 && j <= 12) ||
        (i === 13 && j >= 1 && j <= 5) ||
        (i === 6 && j >= 26 && j <= 29) ||
        (i === 4 && j >= 41 && j <= 44) ||
        (i === 4 && j >= 45 && j <= 48) ||
        (i === 10 && j >= 27 && j <= 30) ||
        (i === 22 && j >= 35 && j <= 40) ||
        (i === 15 && j >= 50 && j <= 58) ||
        (i === 20 && j >= 50 && j <= 58) ||
        (i === 7 && j >= 54 && j <= 58) ||
        (j === 48 && i >= 5 && i <= 10) ||
        (j === 48 && i >= 23 && i <= 26) ||
        (i === 24 && j >= 9 && j <= 17) ||
        (j === 17 && i >= 12 && i <= 17) ||
        (j === 29 && i >= 15 && i <= 23) ||
        (j === 40 && i >= 15 && i <= 21) ||
        (j === 32 && i >= 20 && i <= 26) ||
        (i === 24 && j >= 9 && j <= 12) ||
        (j === 8 && i >= 17 && i <= 24) ||
        (i === 23 && j >= 21 && j <= 29)
      ) {
        grid[i][j].isWall = true;
      }
    }
  }
}
