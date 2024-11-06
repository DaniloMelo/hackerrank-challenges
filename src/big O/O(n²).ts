/*
  O(n²) - Quadrática

  Um algoritmo é considerado quadratico quando temos dois laços aninhados. (um for dentro de outro for, por exemplo.)
  Porém para que ele seja considerado quadrático de fato, o numero de iterações feitas por esses dois laços devem ser iguais, 
  idependentemente se estejam percorrendo arrays iguais ou diferentes.

*/

// A fn abaixo é considerado quadrático, pois percorre o mesmo array 3 veses, ou seja,
// Os dois laços for sao executados a mesma quantidade de vezes, neste exemplo 3x em cada laço.
function quadratico1(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`i: ${i}, j: ${j}`)
    }
  }
}
quadratico1([1, 2, 3]) // i: 2, j: 2 Obs,(ocorreram 3 iteracoes em cada laço começando de 0, 1 e 3)



// A fn abaixo é considerado quadrática, pois percorre arrays diferentes, porém ambos tem o mesmo tamanho.
// Cada laço percorre um array diferente 3x, porém ambos tem o mesmo tamanho.
function quadratico2(arr1: number[], arr2: string[]) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(`i: ${i}, j: ${j}`)
    }
  }
}
quadratico2([1, 2, 3], ["a", "b", "c"]) // i: 2, j: 2



// A função abaixo é considerada retangular, pois cada laço for percorre arrays de tamanhos diferentes.
// A anotação Big O para esta complexidade é O(n * m) onde n é um array e m é outro de tamanho diferente de n
function retangular1(arr1: number[], arr2: string[]) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(`i: ${i}, j: ${j}`)
    }
  }
}
retangular1([1, 2, 3], ["a", "b", "c", "d", "e", "f", "g"]) // i: 2, j: 6



// A função abaixo é considerada cúbica, pois percorre o mesmo array do mesmo tamanho 3 vezes.
// A complexidade deste algoritmo é O(n³) 
function cubica1(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(`i: ${i}, j: ${j}, k: ${k}`);
      }
    }
  }
}
cubica1([1, 2, 3]) // i: 2, j: 2, k: 2

