/*
  Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

  Verificar qual é o maior número do array

  Contar quantas vezes este numero aparece no array e retornar este valor (inteiro)

  OBS, para achar o maior número de um array, tem 3 formas.
  1 - Usar o laço for com if (ver ex_7)
  2 - usar o método sort() (ele ordena o array do menor para o maior)
  3 - usar o Math.max(...arr) (ele tem o mesmo efeito do sort)

  *Por algum motivo, usar o sort não passou em todos os testes, somente usando o Math.max
  sort() = organiza por ordem alfabetica ou numérica dependendo do conteudo do array, porem retorna em strings.
  sort((a, b) => a- b) organiza explicitamente números. 

  OBS 2, o método sort() altera o array original tbm, mesmo guardando o valor em outra referencia,
  enquanto o método Math.max() não altera o array original. 
*/

const array1 = [3, 2, 1, 3]
const array2 = [4, 4, 1, 3]
const array3 = [1, 3, 5, 1, 2, 1, 5, 3, 5]

function birthdayCakeCandles(arr) {
  const higher = Math.max(...arr)
  let counter = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === higher) {
      counter += 1
    }
  }

  return counter
}

console.log(birthdayCakeCandles(array1)) // 2
console.log(birthdayCakeCandles(array2)) // 2
console.log(birthdayCakeCandles(array3)) // 3

