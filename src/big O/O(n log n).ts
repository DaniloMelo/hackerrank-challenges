/*
  O(n log n) - Linear Logaritimico

  A complexidade O(n log n) é uma das complexidades mais eficientes para algoritmos de ordenação e alguns algoritmos de divisão e conquista.

  Essa complexidade geralmente aparece em algoritmos que realizam uma divisão logarítmica do problema em partes menores e, ao mesmo tempo, 
  precisam processar ou combinar todas essas partes.

  Essa complexidade surge frequentemente nos seguintes casos:
    *Algoritmos de ordenação eficientes: como Merge Sort e Quick Sort.
    *Algoritmos de divisão e conquista: que requerem uma divisão do problema e um processamento sobre todas as partes resultantes.
    *Estruturas de dados específicas: como árvores binárias de busca balanceadas, onde operações podem levar O(n log n) em alguns casos, como durante a criação da árvore.


  Como Funciona O(n log n)?
  Para simplificar:
  O termo n representa a necessidade de percorrer ou processar todos os elementos.
  O termo log n aparece devido à divisão repetida do conjunto de dados (por exemplo, em duas metades) a cada etapa.
  Por exemplo, em Merge Sort, o array é repetidamente dividido em duas metades (log n divisões), e então cada divisão precisa ser combinada (n operações).
*/





/*
  1. Exemplo: Merge Sort

  Merge Sort é um algoritmo de ordenação com complexidade O(n log n). 
  Ele divide o array em partes menores até que cada parte tenha apenas um elemento e, em seguida, combina (ou "merge") as partes de volta em ordem.

  Explicação
  Divisão: O array é dividido ao meio repetidamente até que cada subarray tenha apenas um elemento. Isso ocorre log n vezes.
  Combinação: Cada nível de divisão realiza n operações para combinar os elementos de volta em ordem.
  Portanto, o tempo total é O(n log n).
*/
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esquerda: number[], direita: number[]): number[] {
  let resultado: number[] = [];
  let i = 0, j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  // Adiciona os elementos restantes
  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

// Exemplo de uso:
const array = [8, 4, 3, 7, 6, 5, 2, 1];
console.log(mergeSort(array)); // Saída: [1, 2, 3, 4, 5, 6, 7, 8]






/*
  2. Exemplo: Quick Sort (no caso médio)
  Quick Sort também é um algoritmo de ordenação com complexidade O(n log n) no caso médio e melhor caso. 
  No pior caso (quando o pivô é sempre o menor ou o maior elemento), ele pode chegar a O(n²). No entanto, 
  com uma boa escolha de pivô (como selecionar o pivô aleatoriamente ou o elemento mediano), a complexidade tende a ser O(n log n).

  Explicação
  Divisão: O array é dividido em dois subconjuntos (esquerda e direita) com relação ao pivô escolhido. Em média, cada divisão reduz o problema pela metade (log n divisões).
  Conquista: Cada nível de divisão realiza n operações, distribuídas entre as partições esquerda e direita.
  A combinação de divisão e processamento totaliza uma complexidade O(n log n) em média.
*/
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivô = arr[arr.length - 1];
  const esquerda: number[] = [];
  const direita: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivô) {
      esquerda.push(arr[i]);
    } else {
      direita.push(arr[i]);
    }
  }

  return [...quickSort(esquerda), pivô, ...quickSort(direita)];
}

// Exemplo de uso:
const arrayQuick = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arrayQuick)); // Saída: [1, 5, 7, 8, 9, 10]



/*
  Comparação e Explicação Visual da Complexidade O(n log n)
  Imagine um grande array:

  Nos algoritmos de complexidade O(n log n), primeiro dividimos o array em partes menores (log n divisões).
  Em seguida, cada divisão exige o processamento de todos os elementos (n), resultando em O(n log n).



  Quando Usar Algoritmos O(n log n)

  Algoritmos com complexidade O(n log n) são muito eficazes para ordenação e para resolver problemas onde o conjunto de dados pode ser eficientemente dividido e processado. 
  Por isso, algoritmos de ordenação rápida e robusta geralmente têm complexidade O(n log n) e são amplamente utilizados em várias linguagens e bibliotecas.

  Para grandes conjuntos de dados, esses algoritmos são significativamente mais rápidos do que algoritmos quadráticos, como o Bubble Sort ou Selection Sort (O(n²)), 
  tornando-os escolhas ideais para a maioria das operações de ordenação e para várias operações de divisão e conquista.
*/



export const a = {} // Evita problemas de nomes iguais de variaveis em arquivos diferentes.
