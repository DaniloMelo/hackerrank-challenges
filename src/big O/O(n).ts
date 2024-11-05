/*
  O(n) - Linear:

  Um algoritmo de complexibilidade O(n), é um algoritmo que roda o mesma quantidade de vezes que a quantidade de items de entrada.

  O exemplo mais comum de um algoritmo O(n), é o algoritmo de busca linear, pois ele precisa percorer todo um array para encontrar o elemento desejado

  IMPORTANTE:
    Lembrando que o Big O sempre procura pelo PIOR CENÁRIO, isso significa que mesmo que o item que procuramos em uma lista esteja na primeira posição,
    ele também poderia estar na última posição, isso siginfica que no PIOR CENÁRIO, caso tenhamos um array de 1.000.000 items, 
    e o item que procuramos está na última posição (que é o pior cenário), este algoritmo vai rodar 1 milhão de vezes.

  Normalmente quando temos uma lista que NÃO É ORDENADA, e precisamos encontrar um item sem ondernar esta lista, a complexidade é linear O(n), pois 
  precisaremos percorrer cada item da lista.
*/
function linearSearch<T>(array: T[], target: T) {
  let isFound = false

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      isFound = true
      break
    }
  }

  return isFound
}

const arrNums = [1, 2, 3, 4, 5]
const arrNumsResult = linearSearch<number>(arrNums, 3)
console.log(arrNumsResult) // true


const arrStr = ["a", "b", "c"]
const arrStrResult = linearSearch<string>(arrStr, "d")
console.log(arrStrResult) // false




/*
  Outro exemplo de um algoritmo de complexidade O(n) - linear é o calculo de fatorial.

  Observe que na função fatorial, teremos um loop que irá calcular o fatorial:
  Lembrando que o fatorial é o resultado de um numero multiplacado pelo seus antecessores, ex:
  Para calcular o fatorial de 5, precisamos multiplicar 5 * 4 * 3 * 2 * 1
  5 * 4 = 20
  20 * 3 = 60
  60 * 2 = 120
  120 * 1 = 120
    
  Lembrando que fatorial de 0 ou fatorial de 1, o resultado será sempre 1.

  Esta função tem a complexibilidade O(n) - linear, pois tem um loop que vai rodar n vezes, 
  neste caso o tanto de vezes que passarmos como argumento para a função, ou seja,
  se passarmos 5 como arg, o loop vai rodar 5 vezes

  Dica.
    Sempre que temos 1 ou mais loops em uma função ou método (exceto loops aninhados), a complexidade é O(n) - linear.
*/
function fatorial(x: number) {
  let resposta = 1

  while (x > 1) {
    resposta = resposta * x
    x = x - 1
  }

  return resposta
}
console.log(fatorial(5)) //120


// Outro algoritmo para calcular o fatorial:
function fatorial2(x: number) {
  if (x < 0) return "Não é possível calcular o fatorial de números negativos"

  if (x === 0 || x === 1) return `O fatorial de ${x}! é igual a 1`

  let resposta = x

  for (let i = x - 1; i > 0; i--) {
    resposta = resposta * i
  }

  return `O fatorial de ${x}! é = ${resposta}`
}

console.log(fatorial2(5)) // O fatorial de 5! é = 120
