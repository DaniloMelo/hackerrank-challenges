/*
 Verificar se um número informado é par ou ímpar.

 Para verificar se um número é par ou impar, Precisamos dividir por 2
  usando o operador mod(%) que retorna o resto da divisão.
 Caso o resto da divisão por 2 seja 0, significa que temos um número par.
 Caso o resto da divisão por 2 Diferente de 0, significa que temos um número impar.
*/


// Solução usando operador ternário.
function parOuimpar1(n) {
  return n % 2 === 0 ? `O número ${n} é par.` : `O número ${n} é ímpar.`
}


// Solução usando if else padrão.
function parOuimpar2(n) {
  if (n % 2 === 0) {
    return `O número ${n} é par`
  } else {
    return `O número ${n} é ímpar`
  }
}

console.log(parOuimpar1(4))
console.log(parOuimpar2(7))