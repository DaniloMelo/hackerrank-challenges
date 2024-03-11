/*
  Link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

  Verificar qual gato pega o rato primeiro, e imprimir:
  Se gato A pegar o rato primeiro = imprimir "Cat A"
  se gato B pegar o rato primeiro = imprimir "Cat B"
  se os dois gatos pegarem o rato ao mesmo tempo = "Mouse C"
  
  x = Cat A
  y = Cat B
  z = Mouse C

  ex 1:
      cat A       mouse C
  0-----1-----2-----3-----4--->  
            cat B

  No ex 1, o cat B (2) deverá ser impresso, pois está mais próxmo do mouse C (3).
  mouse C - cat A = 3 - 1 = 2
  mouse C - cat B = 3 - 2 = 1 
  cat B que equivale a 1 é menor que cat A que equivale a 2
  portanto cat B é a resposta.


  ex 2:
      cat A       cat B
  0-----1-----2-----3-----4---> 
            mouse C

  No ex 2, o mouse C (2) escapa, pois cat A (1) e cat 2 (3) estão na mesma distancia
  e vão pegar o rato ao mesmo tempo. 
  mouse C - cat A = 2 - 1 = 1
  mouse C - cat B = 2 - 3 = -1
  cat A e cat B tem o mesmo valor, porem um deles tem o valor negativo.
  usamos o valor absoluto para fazer as comparações. (Match.abs())
  neste caso, como os valores são iguais, a resposta é Mouse C
*/

function catsAndAMouse(x, y, z) {
    let catA = z - x
    let catB = z - y

    if (catA < 0) {
        catA = Math.abs(catA)
    }

    if (catB < 0) {
        catB = Math.abs(catB)
    }

    if ((catA) < (catB)) {
        return `Cat A`
    } else if ((catB) < (catA)) {
        return `Cat B`
    } else if ((catA) === (catB)) {
        return `Mouse C`
    }

    // Abaixo uma outra forma de escrever a mesma coisa.
    // if (Math.abs((z - x)) < Math.abs((z - y))) {
    //     return 'Cat A'
    // } else if (Math.abs((z - y)) < Math.abs((z - x))) {
    //     return 'Cat B'
    // } else if (Math.abs((z - x)) === (Math.abs(z - y))) {
    //     return 'Mouse C'
    // }
}

console.log(catsAndAMouse(1, 2, 3)) // Cat B
console.log(catsAndAMouse(1, 3, 2)) // Mouse C
