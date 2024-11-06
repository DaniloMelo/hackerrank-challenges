// Escreva uma função que conta o número de vogais em uma string.

function contaVogais(str) {
  const strToArray = str.toLowerCase().split("").filter(letter => letter != " ")

  let counter = 0

  strToArray.forEach(letter => {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      counter += 1
    }
  })

  return counter
}

console.log(contaVogais("Esta é uma frase de teste")) // 9
console.log(contaVogais("Xinforinfola")) // 5
console.log(contaVogais("Danilo")) // 3

