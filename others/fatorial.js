/*
  O fatorial é uma operação muito importante para o estudo e desenvolvimento da análise combinatória. 
  Na matemática o número seguido do símbolo de exclamação (!) é conhecido como fatorial, por exemplo, x! (x fatorial).

  Conhecemos como fatorial de um número natural a multiplicação desse número por seus antecessores com exceção do zero, ou seja: "n! = n · (n-1) · (n-2) … 3 · 2 · 1"

  Vale ressaltar que, para que essa operação faça sentido, n é um número natural, ou seja, 
  não calculamos fatorial de um número negativo, ou mesmo de um número decimal, ou de frações."

   0! : 1 = 1
   1! : 1 = 1
   2! : 2 * 1 = 2
   3! : 3 * 2 * 1 = 6
   4! : 4 * 3 * 2 * 1 = 24
   5! : 5 * 4 * 3 * 2 * 1 = 120
   6! : 6 * 5 * 4 * 3 * 2 * 1 = 720
   7! : 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040
   8! : 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
   9! : 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 362880
  10! : 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800
*/


function fatorial(num) {
  if (num < 0) {
    return 'Não é possível calcular o fatorial de um numero negativo.'
  }

  if (num === 0 || num === 1) {
    return `O fatorial de (${num}!) é igual a 1`
  }

  let fac = num

  for (let f = num - 1; f > 0; f--) {
    fac = fac * f
  }

  return `O fatorial de (${num}!) é igual a ${fac}`
}
console.log(fatorial(10))