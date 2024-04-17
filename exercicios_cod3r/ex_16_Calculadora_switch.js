/*
  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica 
  O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
  numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
  3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
*/

function calculadora(num1, opr, num2) {
  switch (opr) {
    case "+":
      return parseInt(num1) + parseInt(num2);
      break;
    case "-":
      return parseInt(num1) - parseInt(num2);
      break;
    case "*":
      return parseInt(num1) * parseInt(num2);
      break
    case "/":
      return parseInt(num1) / parseInt(num2)
      break;
    default:
      return "Valores inválidos."
  }
}

console.log(calculadora(2, "+", 3))
console.log(calculadora(4, "-", 4))
console.log(calculadora(3, "*", 10))
console.log(calculadora(5, "/", 2))