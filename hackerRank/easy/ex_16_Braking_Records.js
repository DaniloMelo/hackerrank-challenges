/*
  Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem

  Dado um array, verificar quantas vezes quebrou o recorde máximo e mínimo

  * O primeiro elemento do array vai ser o valor inicial dos recordes max e min
  * Iterar sobre o array e verificar se o valor é maior que o max ou menor que min
      Caso valor maior que o max, guardar o valor de 1 em outra var e somar + 1 sempre que for maior
      Caso valor menor que min, guardar o valor de 1 em outra var e somar + 1 sempre que for menor
*/

function breakingRecords(scores) {
  let maxScore = scores[0]
  let minScore = scores[0]
  let breakMaxScore = 0
  let breakMinScore = 0

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i]
      breakMaxScore += 1
    } else if (scores[i] < minScore) {
      minScore = scores[i]
      breakMinScore += 1
    }
  }

  return [breakMaxScore, breakMinScore]
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // 2 4

