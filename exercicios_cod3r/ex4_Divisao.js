/*
  Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
  e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor) {
  return {
    divisao: dividendo / divisor,
    resto: dividendo % divisor
  }
}

console.log(divisao(4, 2))
