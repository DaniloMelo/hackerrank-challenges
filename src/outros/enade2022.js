/* 
  Questão retirada do ENADE 2022

  Considere a realização de uma pesquisa com 1000 pessoas para a obtenção das seguintes informações:
  O valor da menor altura.
  O Valor da maior altura.
  A média das alturas.
  Quantas pessoas tem a altura menor que a altura média.

*/

const alturas = []

function criaAlturas(qtde) {
  for (let i = 1; i <= qtde; i++) {
    alturas.push(parseFloat((Math.random() * (2.20 - 1.20) + 1.20).toFixed(2)))
  }
}
criaAlturas(1000)
// console.log(alturas);

function calcAlturas(arr) {
  let menorAltura = arr[0]
  let maiorAltura = arr[0]
  let mediaAltura = 0
  let quantidadeMenorQueMedia = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < menorAltura) {
      menorAltura = arr[i]
    } else if (arr[i] > maiorAltura) {
      maiorAltura = arr[i]
    }

    mediaAltura += arr[i]
  }

  mediaAltura = parseFloat((mediaAltura / arr.length).toFixed(2))

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mediaAltura) {
      quantidadeMenorQueMedia += 1
    }
  }

  return { menorAltura, maiorAltura, mediaAltura, quantidadeMenorQueMedia }
}

console.log(calcAlturas(alturas))
