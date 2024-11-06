/*
  Exercicio que mais cai em entrevistas. 
  Este exercicio está no leetcode

  Dado um array de numeros, encontrar a soma de 2 elementos que sejam igual ao numero target.
  Retornar os indices dos elementos que somados é igual a target
  Ex:

  target = 9
  array = [11, 15, 2, 7]

  11 + 15 = 26
  11 + 2 = 13
  11 + 7 = 18
  
  15 + 2 = 17
  15 + 7 = 22

  2 + 7 = 9 (target)
  
*/

// Minhs solução. Está correto, porém é uma solução newbie
function mySolutionTwoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === target) {
        return [i, j]
      }
    }
  }
}
console.log(mySolutionTwoSum([11, 15, 2, 7], 9))



// Soluçao profissa.
// link da explicação: https://www.youtube.com/watch?v=b7Vy-uIQUrE
function twoSum(array, target) {
  // Cria um objeto para armazenar os números do array e seus índices
  let hasher = {}

   // Percorre o array nums
  for (let index = 0; index < array.length; index++) {

    // Recebe o item atual do array de acordo com cada iteração.
    let arrayItem = array[index]

    //
    if (hasher[arrayItem] !== undefined) {
      return [hasher[arrayItem], index]
    }

    hasher[target - arrayItem] = index
  }
}
console.log(twoSum([11, 15, 2, 7], 9))

