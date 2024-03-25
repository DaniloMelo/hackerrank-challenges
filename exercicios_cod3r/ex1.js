/*
  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
  multiplicação e divisão desses valores. 
*/

function calc(x, y) {
  return { soma: x + y, sub: x - y, mult: x * y, div: x / y }
}

console.log(calc(5, 2))