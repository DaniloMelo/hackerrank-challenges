/*
  Link https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

  Se a nota for menor que 38, nada será feito.

  Se a nota for maior ou iagual a 38, e a diferença entre a nota e o proximo multiplo de 5
  for menor que 3, a nota será arredondada para o proximo multiplo de 5
  ex: nota 48, proximo multiplo de 5 é 50, entao 50 - 48 = 2 (resultado menor que 3)
      A nota será arrendodada para 50. 

  
*/

const grades1 = [73, 67, 38, 38, 33]

function gradingStudents(arr) {
  for (let i = 0; i < arr.length; i++) {

  }
}

console.log(gradingStudents(grades1))
//[75, 67, 40, 33]