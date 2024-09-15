/*
  Link: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

  Percorrer o array de forma diagonal da esquerda para a direita. E da direita para a esquerda. 
  Diagonal esquerda = 11, 5, -12
  Diagonal direita = 4, 5, 10

  Somar os valores das diagonais
  Diagonal esquerda 11 + 5 + -12 = 4
  Diagnoal direita 4 + 5 + 10 = 19

  Subrair os valores e transformalos em valores absolutos (em vlr positivo)
    4 - 19 = -15 abs = 15

  Para percorrer uma matriz, o primeiro [] percorre a coluna, e o segundo [] percorre a linha referente aquela coluna
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    ex: matrix[2][1] é o valor 8. (terceira linha, segundo valor)
        matrix[0][2] é o valor 3. (primeira linha, terceiro valor)
        matrix[1][1] é o valor 5. (segunda linha, segundo valor)
  
*/

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
// Resultado: 15