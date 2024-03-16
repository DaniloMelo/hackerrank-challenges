/*
  Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

  Comparar os 2 arrays com valores inteiros. 
  Cada array representa notas de pesoas diferentes
  Array a são as notas da Alice
  Array b são as notas do Bob

  Percorrer os arrays e verificar quem tem as melhores notas
  const a = [5, 6, 7]
  const b = [3, 6, 10]

  O indice 0 do array é refennte a primeira nota, indice 1 referente a segunda nota, indice 2 referente a terceira nota.

  No indice 0 (primeira nota) Alice teve nota 5 enquanto Bob teve nota 3
  Entao neste caso Alice pontua 1

  Quem tiver nota maior, ganha 1 ponto.
  Notas iguais, ninguem pontua.

  Armazenar os pontos de cada um (Alice e Bob) em variáveis. 

  O resultado deve ser um array com os pontos que cada um obteve.
  ex:
  [1, 1]
*/

const a = [5, 6, 7]
const b = [3, 6, 10]

function compareTriplets(ar1, ar2) {
  let alice = 0
  let bob = 0

  for (let i = 0; i < 3; i++) {
    if (ar1[i] > ar2[i]) {
      alice += 1
    } else if (ar1[i] < ar2[i]) {
      bob += 1
    }
  }

  return [alice, bob]
}


console.log(compareTriplets(a, b))
// Resultado = [1, 1]