/*
  link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

  Verificar qual é o menor e o maior numero do array

  Somar o total do array menos o maior e o menor 
  A menor soma são todos os numeros menos o maior numero
  A maior soma são todos os numeros menos o menor numero

  O retorno dever ser dois numeros, a menor soma e a maior soma
*/

const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]

// Exemplo com for
function miniMaxSum1(arr) {
  let min = arr[0]
  let max = arr[0]
  let sum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i]

    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }

  return `${sum - max} ${sum - min}`
}
console.log(miniMaxSum1(array1)) // 10 14
console.log(miniMaxSum1(array2)) // 299 9271


// Exemplo com forEach
function miniMaxSum2(arr) {
  let min = arr[0]
  let max = arr[0]
  let sum = 0

  arr.forEach(num => {
    sum += num

    if (num < min) {
      min = num
    }
    if (num > max) {
      max = num
    }
  })

  return `${sum - max} ${sum - min}`
}
console.log(miniMaxSum2(array1)) // 10 14
console.log(miniMaxSum2(array2)) // 299 9271

