/*
  O(1) - Constante


  Os exemplos abaixo tem a complexibilidade O(1), pois a operação de módulo e a verificação condicional são ambas executadas uma única vez, 
  independentemente do valor de num. Ou seja, o número de operações não varia com o tamanho da entrada ou com o valor do número. 
  
  Como a função sempre realiza a mesma quantidade de operações, independentemente do valor de num, sua complexidade é
  O(1), ou seja, constante.
*/
function parOuImpar(num: number) {
  return num % 2 === 0 ? "par" : "impar"
}

console.log(parOuImpar(2)) // par




// O acesso diretamente a um item de um array também é considerado O(1)
const arr = ["a", "b", "c", "d", "e"]
const elemento = arr[3]
console.log(elemento) // d
