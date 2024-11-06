/*
 Elaborar um programa que receba o valor de um jantar e calcule a taxa do garçon (10% do valor do jantar) 
 e informe os valores na seguinte ordem:
 Jantar: R$ xx,xx 
 Taxa: R$ xx,xx
 Total: R$ xx,xx

*/


function jantar(valor, percent) {
  const taxa = (valor * percent) / 100

  console.log(`Jantar: ${formatter.format(valor)}`)
  console.log(`Taxa: ${formatter.format(taxa)}`)
  console.log(`Total: ${formatter.format(valor + taxa)}`)
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

jantar(80, 10)

