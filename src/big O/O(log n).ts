/*
  O(log n) - Logarítmica
*/

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50
]

function binarySearch1(arr: number[], alvo: number) {
  let inicio = 0
  let final = arr.length - 1

  while (inicio <= final) {
    const meio = Math.floor((inicio + final) / 2)

    if (alvo === arr[meio]) {
      return `O valor ${alvo} foi encontrado. Indice do arr: ${meio}`

    } else if (alvo > arr[meio]) {
      inicio = meio + 1

    } else {
      final = meio - 1
    }
  }

  return -1 // valor nao encontrado
}
console.log(binarySearch1(array, 45))