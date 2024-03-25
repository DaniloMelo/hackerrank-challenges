/*
  Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente
*/


function exponenciacao1(base, expoente) {
  const potencia = Math.pow(base, expoente)
  return potencia
}
console.log(exponenciacao1(2, 5))

function exponenciacao2(base, expoente) {
  const potencia = base ** expoente
  return potencia
}
console.log(exponenciacao2(2, 3))
