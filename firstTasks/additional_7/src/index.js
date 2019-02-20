function lookUp(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) return [i, j];
    }
  }
  return false;
}

function rowNumbers(matrix, i) {
  return matrix[i];
}
function columnNumbers(matrix, j) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i][j]);
  }
  return arr;
}

function numberBlock(matrix, coord) {
  if (coord[0] <= 2) {
    if (coord[1] <= 2) return arrBlock(0, 0, matrix);
    else if (coord[1] > 5) return arrBlock(0, 6, matrix);
    else return arrBlock(0, 3, matrix);
  } else if (coord[0] > 5) {
    if (coord[1] <= 2) return arrBlock(6, 0, matrix);
    else if (coord[1] > 5) return arrBlock(6, 6, matrix);
    else return arrBlock(6, 3, matrix);
  } else {
    if (coord[1] <= 2) return arrBlock(3, 0, matrix);
    else if (coord[1] > 5) return arrBlock(3, 6, matrix);
    else return arrBlock(3, 3, matrix);
  }
}

function arrBlock(y, x, matrix) {
  var arr = [];
  var arr1 = matrix[y].slice(x, x + 3);
  var arr2 = matrix[y + 1].slice(x, x + 3);
  var arr3 = matrix[y + 2].slice(x, x + 3);
  arr = arr1.concat(arr2, arr3);
  return arr;
}

function makeSet(rowNumbers, columnNumbers, blockNumber) {
  return Array.from(
    new Set([...rowNumbers, ...columnNumbers, ...blockNumber])
  ).filter(num => num !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getSuitableNumbers(notValidNumbers) {
  return [...numbers, ...notValidNumbers].filter(
    (value, index, arr) => arr.indexOf(value) === arr.lastIndexOf(value)
  );
}

function setNumberInCell(matrix, i, j, number) {
  matrix[i][j] = number;
}

function isSolved(initial, sudoku) {
  for (let i = 0; i < 9; i++) {
    let [r, c] = [Math.floor(i / 3) * 3, (i % 3) * 3];
    if (
      sudoku[i].reduce((s, v) => s.add(v), new Set()).size != 9 ||
      sudoku.reduce((s, v) => s.add(v[i]), new Set()).size != 9 ||
      sudoku
        .slice(r, r + 3)
        .reduce(
          (s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s),
          new Set()
        ).size != 9
    )
      return false;
  }
  return initial.every((row, rowIndex) => {
    return row.every((num, colIndex) => {
      return num === 0 || sudoku[rowIndex][colIndex] === num;
    });
  });
}

module.exports = function S(initial) {
  return solveSudoku(initial);
  function solveSudoku(matrix) {
    let finalMatrix = matrix;
    const emptyCell = lookUp(matrix);
    if (emptyCell === false) return matrix;
    const [i, j] = emptyCell;
    const row = rowNumbers(matrix, i);
    const column = columnNumbers(matrix, j);
    const block = numberBlock(matrix, [i, j]);
    const suitableNumbers = getSuitableNumbers(makeSet(row, column, block));

    for (let a = 0; a < suitableNumbers.length; a++) {
      const number = suitableNumbers[a];
      setNumberInCell(matrix, i, j, number);
      finalMatrix = solveSudoku(matrix);
      if (isSolved(initial, finalMatrix)) {
        break;
      }
      setNumberInCell(matrix, i, j, 0);
    }
    return finalMatrix;
  }
};
