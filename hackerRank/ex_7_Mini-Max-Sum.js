/*
  link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

  Somar os items do array execeto o index, por exemplo
  const array = [1, 2, 3, 4, 5] 
  Somar tudo exceto 1, a soma é 2 + 3 + 4 + 5 = 14.
  Somar tudo exceto 2, a soma é 1 + 3 + 4 + 5 = 13.
  Somar tudo exceto 3, a soma é 1 + 2 + 4 + 5 = 12.
  Somar tudo exceto 4, a soma é 1 + 2 + 3 + 5 = 11.
  Somar tudo exceto 5, a soma é 1 + 2 + 4 + 4 = 10.  

  2- retornar o valor máximo e o minimo, neste caso seria max 14 e min 10
*/

const array = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    minSum += arr[i]
  }

  return minSum
}

console.log(miniMaxSum(array))



// resultado tem que ser min 10 - max 14