/*
  Link: https://www.hackerrank.com/challenges/bon-appetit/problem

  Somar os items do array que são os preços dos items

  Subtrair o item (k) que a ana nao comeu

  Dividir o resultado da soma do array por 2

  Verificar se o dinheiro entregue por ana (b) é igual ao total do array dividido por 2
    se for igual, retorna 'Bon Appetit'
    se for diferente, subtrair dinheiro da Anna (b) - total do array dividido por 2


  bill = array com os preços.
  k = item que anna nao comeu.
  b = dinheiro que a anna contribiu para a conta.

*/

function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((acc, curr) => acc += curr)

  if ((totalBill - bill[k]) / 2 === b) {
    return `Bon Appetit`
  } else {
    return b - (totalBill - bill[k]) / 2
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)) // retorna: 5
console.log(bonAppetit([3, 10, 2, 9], 1, 7)) // retorna: Bon Appetit