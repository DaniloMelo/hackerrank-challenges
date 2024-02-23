/*
  Link: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

  1- Criar uma função que printa uma escada reversa

  2- A função recebe um argumento/ parametro que define o tamanho da escada
  Ex: em uma função que recebe o argumento 4
     #
    ##
   ###
  ####
*/

function stairCase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i))
  }
}
stairCase(6)
