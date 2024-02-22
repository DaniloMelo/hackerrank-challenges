const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]


function diagonalDifference(mtrx) {
  let leftToRightDiagonal = 0
  let rightToLeftDiagonal = 0

  for (let i = 0; i < mtrx.length; i++) {
    leftToRightDiagonal += mtrx[i][i]
    rightToLeftDiagonal += mtrx[i][mtrx.length - 1 - i]
  }

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}

console.log(diagonalDifference(matrix))