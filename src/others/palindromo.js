/*
  Palíndromos são palavras que ao serem lidas de trás para a frente, formam a mesma palavra.

  Exemplos:
  Radar
  Natan
  Reviver
  Ovo
  Ana
  Arara
  Salas
  Socos
  Ame o Poema


  OBS, o método reverse altera o array original, entao temos que criar uma cópia
    Podemos criar a cópia com o spread operator, ou usando o método slice()
*/


function Palindromo(str) {
  const fraseOrWord = str.toLowerCase().split('').filter(item => item !== ' ')
  const reverseFraseOrWord = [...fraseOrWord].reverse()

  if (fraseOrWord.join('') === reverseFraseOrWord.join('')) {
    return `A palavra ou frase: "${str}", é um palíndromo.`
  } else {
    return `A palavra ou frase: "${str}", não é um palíndromo.`
  }

}
