/*
  Elaborar um programa que receba o preço de um produto e informe as opçoes de pagamento da loja.
  Calcule e informe o valor para pagamento a vista com 10% de desconto.
  Valor dividido de acordo com a quantidade de parcelas desejada pelo cliente. 
*/

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

function pagamento(valor, parcelas) {
  const desconto = (valor * 10) / 100

  return `A Vista com ${formatter.format(desconto)} de desconto: ${formatter.format(valor - desconto)} \nParcelado em ${parcelas}x ${formatter.format(valor / parcelas)}`
}

console.log(pagamento(1000, 6))







