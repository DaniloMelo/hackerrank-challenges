/*
  O que é um Hash Map?

  Imagine que você tem uma lista telefônica gigantesca. 
    Se você quisesse encontrar o número de telefone de uma pessoa, você teria que percorrer a lista inteira, 
    nome por nome, até encontrar o que procura. Isso seria super lento, certo?

  Agora, imagine que você tem uma agenda mágica onde você fala o nome da pessoa e, instantaneamente, o número de telefone aparece. 
    É exatamente isso que um Hash Map faz.

  Um Hash Map, também conhecido como Hash Table, Map ou Dicionário (dependendo da linguagem), 
    é uma estrutura de dados que armazena informações em pares de chave-valor. A "mágica" acontece 
    porque ele usa uma função de hash para pegar a chave (o nome da pessoa, no nosso exemplo) 
    e calcular um índice na memória, permitindo um acesso quase instantâneo ao valor (o número de telefone).

  Como ele funciona por debaixo dos panos?
    1. Chave (Key): A entrada que você usa para buscar a informação. Precisa ser única e imutável.
    2. Função de Hash (Hash Function): É um algoritmo que pega a chave e a converte em um código numérico (o "hash").
    3. Índice: O hash gerado é usado para determinar a posição exata onde o valor será armazenado na memória (como se fosse o "número da página" na nossa agenda mágica).
    4. Valor (Value): A informação que você quer armazenar e recuperar

  A grande vantagem é que as operações de inserção, remoção e busca de um elemento em um Hash Map têm uma complexidade de tempo média de O(1) (constante), 
    o que significa que o tempo de execução não aumenta significativamente, mesmo com um volume gigantesco de dados

  Podemos usar a classe `Map` ou um Objeto literal `{}` para representar uma ash Table, Map ou Dicionário.
  A classe `Map` é uma coleção de dados onde você armazena pares de chave-valor, assim como um dicionário. A grande diferença do Map para um objeto literal do JavaScript 
    é que a chave pode ser de qualquer tipo de dado (um número, uma string, um objeto, etc.), não apenas uma string ou um Symbol.

*/

// CRIANDO UM MAP ======================================================================================================================================================================

// Como criar um map?
// Neste exemplo, estamos criando um Map onde as chaves e os valores serão strings.
// A tipagem <string, string> é uma das vantagens do TypeScript, nos ajudando a manter o código mais seguro
const agenda = new Map<string, string>();

// CRIANDO E ATUALIZANDO VALORES =======================================================================================================================================================

// Como setar um novo valor?
// Usamos `.set(key, value)`
// Adiciona um novo par de chave-valor ao Map. Se a chave já existir, o valor é atualizado.
agenda.set("Fulano", "91111-2222");
agenda.set("Ciclano", "93333-4444");
console.log(agenda); // Map(2) { 'Fulano' => '91111-2222', 'Ciclano' => '93333-4444' }

// Atualizando valor com `.set(key, value)`
agenda.set("Fulano", "95555-6666");
console.log(agenda); // Map(2) { 'Fulano' => '95555-6666', 'Ciclano' => '93333-4444' }

// As chaves são únicas, então não podem ser atualizadas
// Entao se terntarmos atualizar uma chave com o `.set(key, value)`, um novo valor será criado
agenda.set("Fulano Atualizado", "95555-6666");
console.log(agenda); // Map(3) { 'Fulano' => '95555-6666', 'Ciclano' => '93333-4444', 'Fulano Atualizado' => '95555-6666'}

// CONSULTADO VALORES e CHAVES ============================================================================================================================================================

// Usamos `.get(key)` para consultar um VALOR
const ciclano = agenda.get("Ciclano");
console.log(ciclano); // 93333-4444

// Chaves não existentes retornam undefined
const naoExiste = agenda.get("Não_Existe");
console.log(naoExiste); // undefined

// Também podemos verificar se uma CHAVE existe.
// Para isso usamos o `.has(key)`
// Retorna true ou false
// `.has(key)` é case sensitive
const essaChaveExiste1 = agenda.has("fulano");
console.log(essaChaveExiste1); //false

const essaChaveExiste2 = agenda.has("Fulano");
console.log(essaChaveExiste2); // true

// DELETANDO UM ITEM DO MAP ================================================================================================================================================================

// Usamos `.delete(key)`
// Chave e valor serão deletados e true é retornado
// Retorna false se a chave não exista
const deletaFulanoAtualizado = agenda.delete("Fulano Atualizado");
console.log(deletaFulanoAtualizado); // true

const deletaBeltrano = agenda.delete("Beltrano");
console.log(deletaBeltrano); // false

// VER TAMANHO DO MAP ====================================================================================================================================================================

// Usamos `.size` que é uma propriedade, não método, para consultar o tamanho
const tamanhoDaAgenda = agenda.size;
console.log(tamanhoDaAgenda); // 2
console.log(typeof tamanhoDaAgenda); // number

// REMOVENDO TODOS OS ITEMS DO MAP =========================================================================================================================================================

// Usamos `.clear()` para remover todos os items
agenda.clear();
console.log(agenda); // Map(0) {}
