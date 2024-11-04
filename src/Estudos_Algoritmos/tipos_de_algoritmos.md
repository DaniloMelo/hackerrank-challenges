# Tipos de Algoritmos

&nbsp;

Os algoritmos são amplamente categorizados em diferentes tipos ou "famílias", com base em suas finalidades e características. Conhecer esses tipos ajuda a entender como aplicar soluções eficientes a problemas específicos. Aqui estão os tipos de algoritmos mais usados e conhecidos:

&nbsp;

## 1. Algoritmos de Ordenação (Sorting Algorithms)

Esses algoritmos organizam uma lista de elementos em uma ordem específica, como ordem crescente ou decrescente.

Exemplos:

**Selection Sort**: Ordena uma lista de forma crescente ou decrescente

**Bubble Sort**: Compara pares adjacentes e troca se estiverem fora de ordem.

**Merge Sort**: Divide a lista em duas partes e as combina de forma ordenada.

**Quick Sort**: Escolhe um "pivô" e organiza os elementos menores e maiores ao redor dele.

**Insertion Sort**: Insere cada elemento na posição correta em uma sublista já ordenada.

**Heap Sort**: Utiliza uma estrutura de dados chamada heap para organizar os elementos.

&nbsp;

## 2. Algoritmos de Busca (Search Algorithms)

Esses algoritmos são usados para encontrar um elemento específico em uma lista ou estrutura de dados.

Exemplos:

**Busca Linear (Linear Search)**: Percorre a lista de forma sequencial até encontrar o elemento.
**Busca Binária (Binary Search)**: Divide uma lista ordenada ao meio repetidamente até encontrar o elemento.
**Busca em Grafos (Graph Search)**: Explora grafos para encontrar caminhos ou conexões, usando algoritmos como BFS (Busca em Largura) e DFS (Busca em Profundidade).

&nbsp;

## 3. Algoritmos de Divisão e Conquista (Divide and Conquer)

Esses algoritmos dividem o problema em subproblemas menores, resolvem cada subproblema e combinam as soluções.

Exemplos:

**Merge Sort** (também um algoritmo de ordenação)
**Quick Sort**
**Strassen’s Algorithm for Matrix Multiplication**

&nbsp;

## 4. Algoritmos de Programação Dinâmica (Dynamic Programming)

São usados para resolver problemas dividindo-os em subproblemas sobrepostos, armazenando os resultados para evitar cálculos repetidos.

Exemplos:

**Problema da Mochila (Knapsack Problem)**
**Fibonacci (usando memoização)**
**Problema do Caminho Mínimo (Shortest Path)**: Exemplo com o algoritmo de Bellman-Ford.

&nbsp;

## 5. Algoritmos Gulosos (Greedy Algorithms)

Tomam decisões baseadas na escolha que parece ser a melhor no momento, sem reconsiderar as escolhas feitas.

Exemplos:

**Problema do Troco (Coin Change Problem)**: Usa o menor número de moedas para fazer um valor.
**Algoritmo de Dijkstra**: Para encontrar o caminho mais curto em um grafo ponderado.
**Árvore Geradora Mínima (Minimum Spanning Tree)**: Algoritmos como Kruskal e Prim.

&nbsp;

## 6. Algoritmos de Grafos (Graph Algorithms)

Projetados para resolver problemas relacionados a grafos, como encontrar o menor caminho, ciclos, e outros problemas de conectividade.

Exemplos:

**Busca em Largura (BFS) e Busca em Profundidade (DFS)**: Para percorrer grafos.
**Algoritmo de Dijkstra**: Para encontrar o caminho mais curto em grafos ponderados.
**Floyd-Warshall**: Para encontrar todos os caminhos mais curtos entre todos os pares de vértices.
**Árvore Geradora Mínima (Kruskal, Prim)**.

&nbsp;

## 7. Algoritmos de Backtracking

Tentam construir uma solução de forma incremental e abandonam ("backtrack") quando uma solução falha em satisfazer as condições do problema.

Exemplos:

**Problema das Oito Rainhas (N-Queens Problem)**: Colocar N rainhas em um tabuleiro sem que se ataquem.
**Sudoku Solver**: Para resolver o quebra-cabeça de Sudoku.
**Problema do Caminho Hamiltoniano**: Encontra um caminho que visita todos os vértices de um grafo uma única vez.

&nbsp;

## 8. Algoritmos de Recursão

São algoritmos que resolvem um problema chamando a si mesmos com um caso menor, até atingir um caso base.

Exemplos:

**Fatorial**: n!=n×(n−1)!
**Fibonacci**: A sequência de Fibonacci pode ser calculada de forma recursiva.

&nbsp;

## 9. Algoritmos de Brute Force (Força Bruta)

Tentam todas as possíveis soluções para encontrar a resposta correta. Embora sejam simples, tendem a ser ineficientes para problemas grandes.

Exemplos:

**Busca de Substring**: Verifica todas as posições de uma string para encontrar uma substring.
**Problema da Mochila (Knapsack Problem)**: Verifica todas as combinações possíveis de itens.

&nbsp;

## 10. Algoritmos Probabilísticos e Aleatórios

Algoritmos que utilizam a aleatoriedade para encontrar uma solução aproximada ou exata.

Exemplos:

**QuickSort Randomizado**: Escolhe um pivô aleatório para evitar o pior caso.
**Algoritmo de Monte Carlo**: Usa amostragens aleatórias para obter soluções aproximadas para problemas complexos.

&nbsp;

## 11. Algoritmos de Compressão

Reduzem o tamanho de dados ou arquivos, removendo redundâncias.

Exemplos:

**Huffman Coding**: Usado para compressão de dados.
**Run-Length Encoding (RLE)**: Comprime sequências repetidas de dados.

&nbsp;

## 12. Algoritmos de Hashing

Convertem entradas de tamanho variável em saídas de tamanho fixo (hashes), usados em estruturas de dados como tabelas hash.

Exemplos:

**Tabelas Hash (Hash Tables)**: Para armazenamento rápido e recuperação de dados.
**SHA-256**: Usado em criptografia.

&nbsp;

## 13. Algoritmos de Criptografia

Projetados para proteger dados, codificando informações para que apenas destinatários autorizados possam lê-las.

Exemplos:

**RSA**: Criptografia assimétrica.
**AES**: Criptografia simétrica.

&nbsp;

## 14. Algoritmos Genéticos

Inspirados na evolução natural, esses algoritmos usam conceitos de seleção, mutação e cruzamento para encontrar soluções aproximadas para problemas difíceis.

Exemplos:

**Algoritmo Genético**: Para otimização de problemas complexos.

&nbsp;

## 15. Algoritmos de Redes Neurais e Aprendizado de Máquina

Usados para resolver problemas de aprendizado de máquina, como classificação, regressão, e clustering.

Exemplos:

**Perceptron**: Modelo básico de uma rede neural.
**Backpropagation**: Para ajustar pesos em redes neurais profundas.
**K-Means Clustering**: Algoritmo de agrupamento.

&nbsp;

## 16. Algoritmos de Aproximação

Fornecem soluções aproximadas para problemas de otimização, onde encontrar a solução exata pode ser inviável.

Exemplos:

**Problema do Caixeiro Viajante (Traveling Salesman Problem)**: Usando algoritmos de aproximação para encontrar uma solução próxima à ótima.
