/*
  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

function divisivelPor3(num) {
  return num % 3 === 0 ? true : false
}

console.log(divisivelPor3(6))