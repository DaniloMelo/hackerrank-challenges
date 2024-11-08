/*
  O(n!) - Fatorial

  A complexidade O(n!), ou fatorial, é uma das mais ineficientes em termos de crescimento de tempo de execução. 
  Em um algoritmo com complexidade O(n!), o tempo de execução cresce extremamente rápido à medida que o tamanho da entrada aumenta, 
  pois cada incremento em n multiplica o número de operações necessárias pelo valor atual de n.

  Esse tipo de complexidade ocorre frequentemente em problemas que exigem a geração de todas as permutações de um conjunto, como em:

  1. Problemas de permutação (gerar todas as ordens possíveis).
  2. Problemas de viagem do caixeiro-viajante, onde é necessário encontrar o caminho mais curto que passa por todas as cidades exatamente uma vez.
  3. Alguns problemas de busca exaustiva onde é preciso testar todas as combinações possíveis.

  lembrando que fatorial é, por exemplo calcaule o fatorial de 10
  
  10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
  10! = 3.628.800 
  Ou seja, se um array tiver 10 posiçoes, um algoritimo de complexidade O(n!) fará 3.628.800 operações
*/

/*  
  1. Exemplo: Geração de Permutações

  Gerar todas as permutações de um array de n elementos tem complexidade O(n!). 
  A cada posição, precisamos decidir qual dos elementos restantes colocar, 
  o que leva a um crescimento exponencial à medida que o array se torna maior.


  Explicação: 
  * A função permute gera todas as permutações do array arr.
  * Para cada elemento, a função recursivamente calcula as permutações dos elementos restantes, e adiciona o elemento atual no início de cada permutação do restante.
  * O número total de permutações é n! para um array de n elementos, o que resulta em complexidade O(n!).
*/
function permute(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];
  const result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    // Gerar todas as permutações do array restante
    const remainingPermutations = permute(remaining);

    // Adicionar o elemento atual a cada permutação do restante
    for (const perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

// Exemplo de uso:
const numbers = [1, 2, 3];
console.log(permute(numbers)); // Saída: todas as permutações de [1, 2, 3]




/*
  2. Exemplo: Problema do Caixeiro Viajante (Brute Force)

  O problema do caixeiro viajante consiste em encontrar o caminho mais curto que passe por um conjunto de cidades exatamente uma vez e retorne ao ponto de partida. 
  Uma abordagem de força bruta tenta todas as permutações possíveis das cidades, o que leva à complexidade O(n!), pois existem n! maneiras de visitar n cidades.


  Explicação: 
  * Aqui, travelingSalesmanBruteForce usa permute para gerar todas as rotas possíveis entre as cidades, começando e terminando na cidade de partida.
  * Para cada rota, calcula a distância total percorrida e armazena a menor distância encontrada.
  * O número de rotas possíveis é (n-1)! porque, para um conjunto de n cidades, podemos fixar a primeira cidade e permutar as restantes.
  * Assim, a complexidade é aproximadamente O(n!).
*/
function travelingSalesmanBruteForce(distances: number[][]): number {
  const cities = Array.from({ length: distances.length }, (_, i) => i);
  const allRoutes = permute(cities.slice(1)); // Todas as rotas possíveis, excluindo a cidade de partida (0)
  let shortestPath = Infinity;

  for (const route of allRoutes) {
    let currentDistance = 0;
    let currentCity = 0; // Começamos na cidade 0

    for (const nextCity of route) {
      currentDistance += distances[currentCity][nextCity];
      currentCity = nextCity;
    }

    // Retorna à cidade inicial
    currentDistance += distances[currentCity][0];

    // Atualiza o caminho mais curto
    shortestPath = Math.min(shortestPath, currentDistance);
  }

  return shortestPath;
}
const distancesMatrix = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];
console.log(travelingSalesmanBruteForce(distancesMatrix)); // Saída: 80




export const a = {} // Evita problemas de nomes iguais em arquivos diferentes.
