Big O notation é uma forma de descrever a eficiência de um algoritmo em termos de tempo e espaço que ele consome em relação ao tamanho da entrada.

Usamos essa notação para entender como o desempenho de um algoritmo cresce à medida que aumentamos a quantidade de dados que ele processa, independentemente das especificidades do hardware ou da implementação.

**Conceitos-chave da Big O Notation**

1. **_Complexidade de Tempo_**: Mede o tempo necessário para que um algoritmo seja executado em função do tamanho da entrada (normalmente representada como **𝑛**). Ela indica como o tempo de execução aumenta conforme aumentamos o tamanho dos dados.

2. **_Complexidade de Espaço_**: Mede a quantidade de memória necessária para que o algoritmo funcione, novamente em relação ao tamanho da entrada.

&nbsp;

&nbsp;

## Tipos Comuns de Complexidade de Tempo

Abaixo estão alguns dos tipos mais comuns de complexidade, organizados da mais eficiente à menos eficiente:

1. **O(1)** - Constante: O tempo de execução é constante, independentemente do tamanho da entrada. Exemplo: acessar diretamente um elemento de um array pelo índice.

   Veja exemplos de códigos e mais explicações clicando [aqui](</src/bigO/O(1).ts>)

&nbsp;

2. **O(log n)** - Logarítmica: A complexidade aumenta logaritmicamente em relação ao tamanho da entrada. Algoritmos que dividem a entrada repetidamente, como a busca binária, têm essa complexidade.

   Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;

3. **O(n)** - Linear: O tempo de execução cresce linearmente com o tamanho da entrada. Exemplo: percorrer uma lista de elementos uma vez.

   Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;

4.  **O(n log n)** - Um tipo comum de complexidade em algoritmos de ordenação eficientes, como mergesort e heapsort.

    Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;

5.  **O(n²)** - Quadrática: O tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada. Exemplo: algoritmos de ordenação simples, como bubble sort e insertion sort.

    Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;

6. **O(2^n)** - Exponencial: O tempo de execução dobra a cada incremento do tamanho da entrada. Algoritmos de backtracking, como resolução de problemas de caminho, podem ter essa complexidade

   Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;

7. **O(n!)** - Fatorial: Um dos piores casos de complexidade, geralmente visto em algoritmos que exploram todas as permutações possíveis, como alguns problemas de força bruta

   Veja exemplos de códigos e mais explicações clicando [aqui]()

&nbsp;
