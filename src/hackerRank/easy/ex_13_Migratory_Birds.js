/*
  Link: https://www.hackerrank.com/challenges/migratory-birds/problem
  
  Dado um array, verificar quantas vezes os numeros se repetem, e retornar o menor numero entre os repetidos.

  Ex 1
  const arr = [1, 1, 2, 2, 3]
  1 repete duas vezes.
  2 repete duas vezes.
  3 repete uma vez.
  O numero 1 e 2 são os que mais se repetem, porém entre eles o menor é o 1.
  Resposta = 1 

  Ex 2
  const arr = [1, 1, 2, 2, 2, 3, 3]
  1 repete duas vezes.
  2 repete tres vezes.
  3 repete duas vez
  O número dois é o que mais repete e é o menor, pois nao tem outro numero que se repete o mesmo numero de vezes ou mais.
  Resposta = 2

  Ex 3
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
  1 repete duas vezes
  2 repete duas vezes
  3 repete tres vezes
  4 repete tres vezes
  5 repete uma vez
  O numero 3 e 4 são os que mais se repetem, porém o 3 é o menor entre eles. 
  Resposta = 3

  Explicação do trecho `counts[count] = (counts[count] || 0) + 1` onde faz a contagem de items repetidos no array
  GPT: https://chat.openai.com/share/55b473c5-08e7-4f80-b4ee-7acba12b4b28
*/

function migratoryBirds(arr) {
  let counts = {}

  arr.forEach(count => {
    counts[count] = (counts[count] || 0) + 1
  })

  const maxValue = Math.max(...Object.values(counts))

  const smaller = Object.keys(counts).find(key => counts[key] === maxValue)

  return { counts, maxValue, smaller }
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))
// console.log(migratoryBirds([1, 2, 2, 2, 2, 3, 3]))
// console.log(migratoryBirds([3, 4, 6, 5]))
// console.log(migratoryBirds([5, 4, 3, 3, 2, 2, 2]))



// Outras formas de contar os items do array.
function teste1(arr) {
  let count = {}

  arr.forEach(num => {
    if (count[num] === undefined) {
      count[num] = 1
    } else {
      count[num] += 1
    }
  })

  return count
}
console.log(teste1([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) //{ '1': 2, '2': 2, '3': 3, '4': 3, '5': 1 }


function teste2(arr) {
  let count = {}

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 1
    } else {
      count[arr[i]] += 1
    }
  }

  return count
}
console.log(teste2([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) //{ '1': 2, '2': 2, '3': 3, '4': 3, '5': 1 }