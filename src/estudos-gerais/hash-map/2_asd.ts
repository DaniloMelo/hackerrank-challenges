// Todo esse conteúdo foi extrído de um chat com o Gemini, para acessar:

// ================================================== EXEMPLO 1: Encontrando o Primeiro Caractere Não Repetido ==============================================================================

/*  
  O Problema: Dada uma string, encontre o primeiro caractere que não se repete. Se todos os caracteres se repetem, retorne null.

  Exemplo:
    "abacaba" -> 'c'
    "aabbcc" -> null

  Solução com for aninhado (Ineficiente)
  Uma abordagem ingênua seria usar dois loops. O loop externo itera por cada caractere, e o loop interno verifica se esse caractere se repete no restante da string.

  Por que é ruim? 
    A complexidade de tempo é O(n^2). Para cada caractere, percorremos a string inteira novamente. Se a string tiver 10.000 caracteres, isso pode se tornar extremamente lento.
*/
function findFirstNonRepeatingBruteForce(s: string): string | null {
  for (let i = 0; i < s.length; i++) {
    let isRepeating = false;

    for (let j = 0; j < s.length; j++) {
      // Ignora o mesmo caractere no mesmo índice
      if (i !== j && s[i] === s[j]) {
        isRepeating = true;
        break; // Encontrou uma repetição, pode sair do loop interno
      }
    }

    if (!isRepeating) {
      return s[i]; // Esse é o primeiro que não se repete.
    }
  }

  return null;
}

console.log(findFirstNonRepeatingBruteForce("abacaba")); // Saída: "c"
console.log(findFirstNonRepeatingBruteForce("aabbcc")); // Saída: null

/*
  Solução com Hash Map (Otimizada)

  A chave aqui é usar o Hash Map para contar a frequência de cada caractere. 
  Com duas passagens (dois loops simples), resolvemos o problema de forma muito mais eficiente.

  1. Primeira passagem: Percorremos a string e contamos a frequência de cada caractere usando um Map.
  2. Segunda passagem: Percorremos a string novamente. Para cada caractere, verificamos a contagem no Map. O primeiro que tiver a contagem igual a 1 é o nosso resultado.

  Por que é melhor? A complexidade de tempo é O(n). Fazemos duas passagens, mas ambas são lineares (O(n)). 
  O acesso ao Map (get e set) é quase instantâneo (O(1)). Para uma string grande, essa diferença de performance é crucial
*/
function findFirstNonRepeatingHashMap(s: string): string | null {
  const charCount = new Map<string, number>();

  // Primeira passagem: Contar a frequência de cada caractere
  // Se o char nao existir no Map, adiciona ele e soma +1
  // Se o char já existir no Map, somente adicinoar +1
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Segunda passagem: Encontrar o primeiro com contagem 1
  for (const char of s) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(findFirstNonRepeatingHashMap("abacaba")); // Saída: "c"
// O Map completo fica assim:
// Map(3) { 'a' => 2, 'b' => 2, 'c' => 2 }

console.log(findFirstNonRepeatingHashMap("aabbcc")); // Saída: null
// O Map completo fica assim:
// Map(3) { 'a' => 2, 'b' => 2, 'c' => 2 }

// ====================================================== EXEMPLO 2: Removendo Duplicatas de um Array Mantendo a Ordem ======================================================================

/*
  O Problema: Dado um array de números, remova todos os elementos duplicados, mas mantenha a ordem original dos elementos restantes.

  Exemplo:
    [1, 5, 2, 1, 3, 5, 2] -> [1, 5, 2, 3]

  Solução com for e includes (Ineficiente)
    Uma forma de fazer isso é criar um novo array e, para cada elemento do array original, verificar se ele já existe no novo array antes de adicioná-lo.

  Por que é ruim? 
    O método includes tem complexidade de tempo O(n), pois ele percorre o array result a cada iteração. 
    O loop externo também é O(n), resultando em uma complexidade total de O(n^2).
*/

function removeDuplicatesBruteForce(arr: number[]): number[] {
  const newArr: number[] = [];

  for (const num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }

  return newArr;
}

console.log(removeDuplicatesBruteForce([1, 5, 2, 1, 3, 5, 2])); // [1, 5, 2, 3]

/*
  Solução com Hash Map (Otimizada)

  Podemos usar um Hash Map (ou um Set, que é uma variação otimizada para armazenar apenas chaves, sem valores) para rastrear os números que já vimos

  Por que é melhor? 
    A complexidade de tempo é O(n). Percorremos o array apenas uma vez. As operações has() e set() no Map são, novamente, O(1). 
    O tempo de execução cresce linearmente com o tamanho do array, não exponencialmente.
*/
function removeDuplicatesOptimized(arr: number[]): number[] {
  const seen = new Map<number, boolean>();
  const newArr: number[] = [];

  for (const num of arr) {
    if (!seen.has(num)) {
      newArr.push(num);
      seen.set(num, true);
    }
  }

  return newArr;
}

console.log(removeDuplicatesOptimized([1, 5, 2, 1, 3, 5, 2])); // [1, 5, 2, 3]
