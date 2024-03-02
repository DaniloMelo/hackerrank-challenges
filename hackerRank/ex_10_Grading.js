/*
  Link https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

  Se a nota for menor que 38, nada será feito.

  Se a nota for maior ou iagual a 38, e a diferença entre a nota e o proximo multiplo de 5
  for menor que 3, a nota será arredondada para o proximo multiplo de 5
  ex: nota 48, proximo multiplo de 5 é 50, entao 50 - 48 = 2 (resultado menor que 3)
      A nota será arrendodada para 50. 
  
*/

const grades1 = [73, 67, 38, 33]


// Exemplo com for
function gradingStudents1(grades) {
  const roundedGrades = []

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 === 3) {
        roundedGrades.push(grades[i] += 2)
      } else if (grades[i] % 5 === 4) {
        roundedGrades.push(grades[i] += 1)
      } else {
        roundedGrades.push(grades[i])
      }
    } else {
      roundedGrades.push(grades[i])
    }

  }

  return roundedGrades
}
console.log(gradingStudents1(grades1))


// Exemplo com map
function gradingStudents2(grades) {
  let roundedGrades = grades.map(grade => {
    if (grade >= 38) {
      if (grade % 5 === 3) {
        return grade += 2
      } else if (grade % 5 === 4) {
        return grade += 1
      } else {
        return grade
      }
    } else {
      return grade
    }
  })

  return roundedGrades
}
console.log(gradingStudents2(grades1))