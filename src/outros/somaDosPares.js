/*
  Escreva uma função que recebe dois números e retorna a soma de todos os números pares entre eles.
*/


function sumPairs(num1, num2) {
  let res = 0

  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      res += i
    }
  }

  return res
}

console.log(sumPairs(1, 10))