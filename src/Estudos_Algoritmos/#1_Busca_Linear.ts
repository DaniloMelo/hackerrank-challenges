/*
  Busca Linear (Linear Search)

  Descrição: Percorre uma lista ou array elemento por elemento até encontrar o valor buscado.

  Complexidade de Tempo: O(n), onde n é o número de elementos.
*/

function linearSearch<T>(arr: T[], target: T) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }

  return -1
}


const numArr = [1, 2, 3, 4, 5]
console.log(linearSearch<number>(numArr, 2)) // 2


const strArr = ["a", "b", "c", "d", "e"]
console.log(linearSearch<string>(strArr, "d")) // 3

