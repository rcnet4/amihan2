//
// Ryan "Rcnet" Cristobal
//
import { COLOR_RED, COLOR_WHITE } from "constants/constants";

/**
 * Generate block data 10x10
 * @returns
 */
export function generateBlockData() {
  var data = [];
  for (let row = 0; row < 10; row++) {
    data[row] = [];
    for (let col = 0; col < 10; col++) {
      data[row].push({ color: COLOR_WHITE });
    }
  }

  return data;
}

export function getRowAndColBlockRange(start, end) {
  let row = _getSelectionPoints(start.split("-")[0], end.split("-")[0]);
  let col = _getSelectionPoints(start.split("-")[1], end.split("-")[1]);

  return {
    rowStart: row.selStart,
    rowEnd: row.selEnd,
    colStart: col.selStart,
    colEnd: col.selEnd,
  };
}

export function fillBlock(selectionPoints, data, color) {
  for (
    let row = selectionPoints.rowStart;
    row <= selectionPoints.rowEnd;
    row++
  ) {
    for (
      let col = selectionPoints.colStart;
      col <= selectionPoints.colEnd;
      col++
    ) {
      data[row][col] = { color };
    }
  }
}

export function getAndSetNextColor(start, data) {
  if (!isValidStartBlock(start)) return;

  let startBlock = start.split("-");

  let nextColor =
    data[parseInt(startBlock[0])][parseInt(startBlock[1])].color === COLOR_RED
      ? COLOR_WHITE
      : COLOR_RED;

  data[parseInt(startBlock[0])][parseInt(startBlock[1])].color = nextColor;

  return nextColor;
}

export function isValidStartBlock(start) {
  return ![undefined, "root", ""].includes(start);
}

function _getSelectionPoints(start, end) {
  return parseInt(start) > parseInt(end)
    ? { selStart: parseInt(end), selEnd: parseInt(start) }
    : { selStart: parseInt(start), selEnd: parseInt(end) };
}
