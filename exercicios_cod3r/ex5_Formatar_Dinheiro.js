/*
  Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o 
  seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa 
  importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer 
  um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para 
  que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

// Formatação feita na mão
function formatarDinheiro1(valor) {
  return `R$${valor.toFixed(2).replace('.', ',')}`
}
console.log(formatarDinheiro1(0.30000000000000004))



// Formatação feita usando o objeto Intl e seu método NumberFormat
// A vantagem é que podemos instanciar este método e usar diversas vezes.
function formatarDinheiro2(valor) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formatter.format(valor)
}
console.log(formatarDinheiro1(0.30000000000000004))


//Formatação usando o método toLocaleString().
// Sempre que precisar formatar, precisamos usar este método, causando repetiçao de código.
function formatarDinheiro3(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
console.log(formatarDinheiro3(0.30000000000000004));