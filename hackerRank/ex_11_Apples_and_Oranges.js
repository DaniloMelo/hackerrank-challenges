/*
  Link: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

  Verificar quantas maças e laranjas caem dentro de um determinado espaço

  s = inicio da casa
  t = final da casa
  a = arvore de maças
  b = arvore de laranjas

  Para resolver temos que verificar se o elemento do array está entre os valores (s inicio da casa) e (t final da casa)
  A arvore de maça (a) tem que ser somada junto com elemento do array e verificar se esta entre S e T 
  O mesmo deve ser feito com a arvore de laranjas.

  item do array + A, está entre S e T ?
  item do array + B, está entre S e T ?
*/


// Resolução com forEach
function applesAndOranges1(s, t, a, b, arrApples, arrOranges) {
  let applesCount = 0
  let orangesCount = 0

  arrApples.forEach(apple => {
    if ((apple + a) >= s && (apple + a) <= t) {
      applesCount += 1
    }
  })

  arrOranges.forEach(orange => {
    if ((orange + b) >= s && (orange + b) <= t) {
      orangesCount += 1
    }
  })

  return { applesCount, orangesCount }
}
console.log(applesAndOranges1(7, 10, 4, 12, [2, 3, - 4], [3, -2, -4])) //  {applesCount: 1, orangesCount: 2 }


// Resoluçao com laço for.
function applesAndOranges2(s, t, a, b, arrApples, arrOranges) {
  let applesCount = 0
  let orangesCount = 0

  for (let i = 0; i < arrApples.length; i++) {
    if ((arrApples[i] + a) >= s && (arrApples[i] + a) <= t) {
      applesCount += 1
    }
  }

  for (let i = 0; i < arrOranges.length; i++) {
    if ((arrOranges[i] + b) >= s && (arrOranges[i] + b) <= t) {
      orangesCount += 1
    }
  }
  return { applesCount, orangesCount }
}
console.log(applesAndOranges2(7, 10, 4, 12, [2, 3, - 4], [3, -2, -4])) //  {applesCount: 1, orangesCount: 2 }