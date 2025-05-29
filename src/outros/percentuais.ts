/*
  === Para saber a porcentagem de um valor ===

  Neste caso, temos duas formulas.
  Ambas dão o mesmo resultado.

  formula 1:
  caso: Quanto é 2% de 10?
  formula 1: (porcentagem * valor) / 100 
  ex: (2% * 10) / 100
  resultado: 0.2


  formula 2:
  caso: Quanto é 7% de 15?
  formula 2: (porcentagem / 100) * valor
  ex: (7 / 100) * 15

*/

function Porcentagem1(porcentagem: number, valor: number) {
  const formula1 = (valor * porcentagem) / 100;
  const formula2 = (porcentagem / 100) * valor;

  console.log(`Resultado com a formula 1: ${formula1}`);
  console.log(`Resultado com a formula 2: ${formula2}`);
}

// Quanto é 2% de 10?
Porcentagem1(2, 10);
// Resultado com a formula 1: 0.2
// Resultado com a formula 2: 0.2

// Quanto é 50% de 10?
Porcentagem1(50, 10);
// Resultado com a formula 1: 5
// Resultado com a formula 2: 5

// Quanto é 7% de 15?
Porcentagem1(7, 15);
// Resultado com a formula 1: 1.05
// Resultado com a formula 2: 1.05

/*
   === Como descobrir qual é a porcentagem que um valor representa de um total ===

   Caso: Em um total de 16, quantos por cento 8 representa? Neste caso seria 50%,
   visto que 8 é a metade de 16...

   formula: (parte / total) * 100
*/

function porcentagem2(total: number, parte: number) {
  const res = (parte / total) * 100;

  console.log(`${res}%`);
}

// Em um total de 16, quantos por cento 8 representa?
porcentagem2(16, 8); // 50%

// Em um total de 100, quantos por cento 1 representa?
porcentagem2(100, 1); // 1%

// Em um total de 32, quantos por cento 12 representa?
porcentagem2(32, 12); // 37.5%
