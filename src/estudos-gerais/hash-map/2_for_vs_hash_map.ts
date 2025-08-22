/*
  Exemplos de abordagens onde o uso de Hash Map é melhor que for

  Esse estudo foi feito usando Gemini. Acesse o chat: https://g.co/gemini/share/fc48107727a6
*/

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

// ====================================================== EXEMPLO 3: Verificando se um array tem duplicatas ==================================================================================

/*
  O Problema: Dado um array de números inteiros, determine se ele contém algum valor duplicado.

  Exemplo:
    [1, 2, 3, 1] -> true
    [1, 2, 3, 4] -> false

  Solução com for aninhado (Ineficiente)
  A abordagem mais simples é comparar cada elemento com todos os outros elementos do array.

  Análise:
    - Vantagem: O código é simples e fácil de entender, não requer estruturas de dados extras.
    - Desvantagem: A complexidade de tempo é O(n^2). Para um array com 100.000 elementos, isso é impraticável e resulta em um tempo de execução muito longo.
*/
function containsDuplicateBruteForce(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsDuplicateBruteForce([1, 2, 3, 1])); // true
console.log(containsDuplicateBruteForce([1, 2, 3, 4])); // false

/*
  Solução com Hash Map ou Set (Otimizada)

  A ideia é manter um registro dos números que já vimos. 
  Podemos usar um Map ou, mais especificamente para este caso, um Set, que é uma variação do Hash Map projetada para armazenar apenas chaves únicas.

  Análise:
    - Vantagem: A complexidade de tempo é O(n). Percorremos o array apenas uma vez. As operações has() e add() em um Set são, em média, O(1). A solução é extremamente rápida, mesmo para arrays gigantescos.
    - Desvantagem: Consome um pouco mais de memória para armazenar o Set com os números já vistos.
*/

function containsDuplicateOptimized(nums: number[]): boolean {
  const seenNumbers = new Set<number>();

  for (const num of nums) {
    if (seenNumbers.has(num)) {
      // Se num já existe em seenNumbers, sigifica que ele é repetido, então retornamos true
      return true;
    }

    // Se num não existe em seenNumbers, adicionamos ele.
    seenNumbers.add(num);
  }

  return false;
}
console.log(containsDuplicateOptimized([1, 2, 3, 1])); // true
console.log(containsDuplicateOptimized([1, 2, 3, 4])); // false

// ====================================================== EXEMPLO 4: Encontrando a Interseção de Dois Array ==================================================================================

/*
  O Problema: Dados dois arrays de números, retorne um novo array que contenha todos os elementos que aparecem em ambos os arrays.

  Exemplo:
    arr1 = [1, 2, 2, 1], 
    arr2 = [2, 2] -> [2, 2]

  Solução com for e includes (Ineficiente)
  Uma maneira de fazer isso é iterar sobre um array e, para cada elemento, verificar se ele existe no segundo array.

  Análise:
    - Vantagem: Não usa estruturas de dados adicionais.
    - Desvantagem: A complexidade de tempo é alta, pois o método indexOf() (ou includes()) tem complexidade O(n). O loop externo também é O(n). O splice() também adiciona custo. O resultado é uma complexidade total próxima de O(n*m), onde n e m são os tamanhos dos arrays.
*/
function intersectBruteForce(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];

  for (const num of nums1) {
    const indexInNums2 = nums2.indexOf(num);

    if (indexInNums2 !== -1) {
      intersection.push(num);

      //Remove o numero atual do loop do arr nums2 para evitar duplicatas
      nums2.splice(indexInNums2, 1);
    }
  }

  return intersection;
}
console.log(intersectBruteForce([1, 2, 2, 1], [2, 2])); // [2, 2]

/*
  O exemplo abaixo resolve o mesmo problema do exemplo acima, porém com for loops aninhados.
  O que é ainda pior pois tem a complexidade de O(n^2)
*/
function intersectBruteForceFor(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        intersection.push(nums1[i]);

        //Remove o numero atual do loop do arr nums2 para evitar duplicatas
        nums2.splice(j, 1);
      }
    }
  }
  return intersection;
}
console.log(intersectBruteForceFor([1, 2, 2, 1], [2, 2])); // [2, 2]

/*
  Solução com Hash Map ou Set (Otimizada)

  A abordagem com Hash Map é mais eficiente. O segredo é usar um Map para contar a frequência dos elementos em um dos arrays.

  Análise:
    - Vantagem: A complexidade de tempo é O(n + m), onde n e m são os tamanhos dos arrays. Isso é um ganho enorme. As operações no Map são eficientes.
    - Desvantagem: Consome memória adicional para o Map.
*/
function intersectOptimized(nums1: number[], nums2: number[]): number[] {
  const countMap = new Map<number, number>();
  const intersection: number[] = [];

  // 1. Contar a frequência dos elementos no primeiro array
  for (const num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // 2. Iterar sobre o segundo array e verificar a contagem no Map
  for (const num of nums2) {
    if (countMap.get(num)! > 0) {
      intersection.push(num);

      // Decrementa a contagem para lidar com duplicatas
      countMap.set(num, countMap.get(num)! - 1);
    }
  }

  return intersection;
}
console.log(intersectOptimized([1, 2, 2, 1], [2, 2])); // [2, 2]

// ====================================================== EXEMPLO 5: Encontrando o item mais repetido no array ==================================================================================

/*
  O Problema: Dado um array de strings ou números, verifique o item que mais aparece. 

  Exemplo:
    arr = [1, 2, 3, 2, 1, 3, 2] Resposta: 2

  Solução com for aninhado (Ineficiente)
  Uma abordagem menos eficiente seria usar loops aninhados. Para cada elemento, você percorreria o array inteiro novamente para contar suas ocorrências e manteria o controle da contagem máxima e do elemento correspondente.

  Análise:
    - Vantagem: A lógica é intuitiva e não exige estruturas de dados adicionais.
    - Desvantagem: A complexidade de tempo é O(n^2), o que é inaceitável para arrays grandes. A cada iteração do loop externo, você executa um loop interno completo, levando a um número de operações quadrático em relação ao tamanho do array.  
*/
function mostRepetitiveBruteForce(arr: string[] | number[]) {
  let mostFindElement;
  let finalMaxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentCount = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCount += 1;
      }

      if (currentCount > finalMaxCount) {
        finalMaxCount = currentCount;
        mostFindElement = arr[i];
      }
    }
  }

  return mostFindElement;
}
console.log(mostRepetitiveBruteForce([1, 2, 3, 2, 1, 3, 2])); // 2
console.log(mostRepetitiveBruteForce(["a", "b", "c", "a", "c", "a"])); // "a"

/*
  Solução com Hash Map (Otimizada)
  A abordagem com Hash Map é a maneira "correta" de resolver este problema em termos de eficiência. Ela usa duas passagens lineares para chegar à solução.

  Primeira Passagem: Percorra o array e use um Hash Map para contar a frequência de cada elemento.
  Segunda Passagem: Percorra o Hash Map e encontre o par de chave-valor com a maior contagem.

  Análise:
    - Vantagem: A complexidade de tempo é O(n). A primeira passagem é O(n) (para percorrer o array), e a segunda passagem é O(k) (para percorrer o Map), onde k é o número de elementos únicos, que é no máximo n. O resultado final é O(n). Isso é uma melhoria massiva de desempenho.
    - Desvantagem: Consome memória adicional para armazenar o Map de frequências.
*/
function mostRepetitiveBruteOptmized(arr: string[] | number[]) {
  const counterElements = new Map<string | number, number>();

  for (const item of arr) {
    counterElements.set(item, (counterElements.get(item) || 0) + 1);
  }

  let count = 0;
  let mostFindElement: string | number | null = null;

  for (const [key, value] of counterElements) {
    if (value > count) {
      count = value;
      mostFindElement = key;
    }
  }

  return mostFindElement;
}
console.log(mostRepetitiveBruteOptmized([1, 2, 3, 2, 1, 3, 2])); // 2
console.log(mostRepetitiveBruteOptmized(["a", "b", "c", "a", "c", "a"])); // "a"
