/*
  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
  primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
  retornará o valor da aplicação sob o regime de juros compostos.

  Formulas:

  J = Juros
  P = Capital inicial (principal)
  r = Taxa de juros (em decimal)
  t = Tempo de aplicação (em anos)

  Juros Simples:
    J = P × r × t
    Montante: S = P + J
    Ex de uso (p = 1000, r = 5%, t = 3 anos)
    J = 1000 × 0.05 × 3 = 150
    Montante: S = 1000 + 150 = 1150
    
  ------
  Juros Compostos:
    S = P × (1 + r)^t  (elevado a t)
    Ex de uso (p = 1000, r = 5%, t = 3 anos)
    S = 1000 × (1 + 0.05)^3 ≈ 1157.63

*/


function jurosSimples(p, r, t) {
  const juros = ((p * r) / 100) * t
  const montante = p + juros

  return {
    juros: juros,
    montante: montante
  }
}
// com destructuring
const { juros, montante } = jurosSimples(1000, 5, 3)
console.log(juros, montante) // Resultado: 150 1150

// sem destructuring
console.log(jurosSimples(1000, 5, 3)) // Resultado: { juros: 150, montante: 1150 }




// A variavel "resp" tem o valor 1157625000, para converter em reais, dividimos por 1000000
function jurosCompostos(p, r, t) {
  const resp = ((r / 100 + 1) * p) ** t
  return (resp / 1000000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
console.log(jurosCompostos(1000, 5, 3))

