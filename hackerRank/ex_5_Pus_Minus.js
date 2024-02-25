/*
 link: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

  Verificar quantos números positivos, negativos e zeros tem no array.

  Calcular essas quantidades divididos pelo tamanho do array, ex:
  Em um array [1, 1, 0, -1], temos 2 positivos, 1 negativo e 1 zero entao os calculos serão
    2/4 = 0,5  
    1/4 = 0,25
    1/4 = 0,25
  
  O resultado tem que ter 6 casas decimais por ex: 2/4 = 0.500000
*/

const array = [-4, 3, -9, 0, 4, 1]

// Exemplo com for
function plusMinus1(arr) {
  let positives = 0
  let negatives = 0
  let zeros = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      positives += 1 / arr.length
    } else if (arr[i] < 0) {
      negatives += 1 / arr.length
    } else if (arr[i] == 0) {
      zeros += 1 / arr.length
    }
  }

  console.log(positives.toFixed(6))
  console.log(negatives.toFixed(6))
  console.log(zeros.toFixed(6))
}

plusMinus1(array)

// Exemplo com forEach
function plusMinus2(arr) {
  let positives = 0
  let negatives = 0
  let zeros = 0

  arr.forEach((item) => {
    if (item >= 1) {
      positives += 1 / arr.length
    } else if (item < 0) {
      negatives += 1 / arr.length
    } else if (item == 0) {
      zeros += 1 / arr.length
    }
  })

  console.log(positives.toFixed(6))
  console.log(negatives.toFixed(6))
  console.log(zeros.toFixed(6))
}

plusMinus2(array)
// Resultado:
// 0.500000
// 0.333333
// 0.166667
// 0.500000
// 0.333333
// 0.166667
