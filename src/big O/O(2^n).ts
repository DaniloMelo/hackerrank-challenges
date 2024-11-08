/*
  O(2^n) - Exponencial

  A complexidade O(2^n), ou exponencial, representa um crescimento extremamente rápido do tempo de execução em função do tamanho da entrada.
  Isso significa que, à medida que n aumenta, o tempo de execução DOBRA para cada unidade adicional.
  Esse tipo de complexidade é muitas vezes impraticável para grandes entradas, pois o tempo de execução cresce de forma explosiva.


  Onde Surge a Complexidade O(2^n)?
  A complexidade exponencial O(2^n) surge com frequência em algoritmos de backtracking, 
  algoritmos recursivos que exploram todas as combinações possíveis de uma entrada, 
  ou problemas que necessitam de muita exploração de possibilidades (como problemas de decisão em teoria dos grafos ou algumas abordagens de programação dinâmica sem otimização).

  
  Problemas clássicos de O(2^n) incluem:
  * Problema da sequência de Fibonacci (versão ineficiente sem memoização).
  * Problema da subconjunto.
  * Problemas de combinação ou permutação onde é necessário explorar todas as possibilidades.
*/



/*
  1. Exemplo: Cálculo da Sequência de Fibonacci sem Memoização

  O cálculo da sequência de Fibonacci recursivamente, sem técnicas de memoização (armazenamento de resultados intermediários), é um exemplo clássico de O(2^n). 
  Cada chamada recursiva chama duas novas funções (para calcular fibonacci(n-1) e fibonacci(n-2)), resultando em uma explosão no número de chamadas para valores maiores de n.


  Explicação:
  * Quando fibonacci(10) é chamado, ele calcula fibonacci(9) + fibonacci(8), e assim por diante.
  * Cada cálculo de fibonacci(n-1) e fibonacci(n-2) exige novos cálculos, criando uma árvore de chamadas onde o número de chamadas dobra a cada incremento de n, resultando em complexidade O(2^n).
  * Esse código rapidamente se torna impraticável para valores altos de n devido ao número explosivo de chamadas recursivas.
*/
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Saída: 5
console.log(fibonacci(10)); // Saída: 55





/*
  2. Exemplo: Problema da Subconjunto (Subset Sum Problem)
  
  No Subset Sum Problem, o objetivo é verificar se existe um subconjunto em um conjunto dado que soma a um valor-alvo. 
  Essa solução verifica todas as combinações possíveis de subconjuntos, o que leva a uma complexidade O(2^n), 
  já que cada elemento pode estar presente ou ausente em cada subconjunto.


  Explicação:
  * O algoritmo tenta incluir ou excluir cada elemento do array no subconjunto para ver se pode atingir o valor-alvo.
  * Com n elementos, há 2^n combinações possíveis de subconjuntos, já que cada elemento tem duas opções: ser incluído ou não.
  * Essa abordagem verifica todas as combinações, resultando em uma complexidade O(2^n).
*/
function subsetSum(nums: number[], target: number, index: number = 0): boolean {
  if (target === 0) {
    return true;
  }
  if (index >= nums.length) {
    return false;
  }

  // Incluir o elemento atual no subconjunto ou não incluí-lo
  return subsetSum(nums, target - nums[index], index + 1) || subsetSum(nums, target, index + 1);
}
const numbers = [3, 34, 4, 12, 5, 2];
const target = 9;
console.log(subsetSum(numbers, target)); // Saída: true (por exemplo, 4 + 5 = 9)





/*
  3. Exemplo: Problema da Torre de Hanói

  O problema da Torre de Hanói é um clássico da computação com complexidade O(2^n). 
  O objetivo é mover n discos de uma torre para outra usando uma torre auxiliar, obedecendo às regras: 
  apenas um disco pode ser movido por vez, e um disco maior não pode ficar sobre um menor.


  Explicação: 
  * O problema da Torre de Hanói requer duas chamadas recursivas para towerOfHanoi(n - 1, ...), resultando em uma árvore de chamadas que dobra a cada incremento de n.
  * A cada incremento de n, o número total de movimentos exigidos é 2^n - 1, o que resulta em complexidade O(2^n
*/
function towerOfHanoi(n: number, origem: string, destino: string, auxiliar: string): void {
  if (n === 1) {
    console.log(`Mover disco 1 de ${origem} para ${destino}`);
    return;
  }
  towerOfHanoi(n - 1, origem, auxiliar, destino);
  console.log(`Mover disco ${n} de ${origem} para ${destino}`);
  towerOfHanoi(n - 1, auxiliar, destino, origem);
}
towerOfHanoi(3, 'A', 'C', 'B');
