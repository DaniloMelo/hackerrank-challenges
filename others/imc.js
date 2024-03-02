/*

O indice de massa corporal IMC pode ser calculado da seguinte forma:

Índice de Massa Corporal – IMC = Massa (kg) ÷ Altura (m)².
Dessa forma, uma pessoa que meça 1,65 m e pese 60 kg, por exemplo, deve fazer o cálculo da seguinte forma:
60 ÷ (1,65 x 1,65) = 60 ÷ 2,7225 = 22,038

Menor que 18,5 = abaixo do peso.
Entre 18,5 e 24,9 = peso normal.
Entre 25 e 29,9 = sobrepeso.
Entre 30 e 34,99 = obesidade grau I.
Entre 35 e 39,99 = obesidade grau II (severa).
Acima de 40 = obesidade grau III (mórbida).


***Em Js, temos o método Math.sqrt() para calcaular raizes quadradas.
Para raizes cubicas, podemos usar o método de potência Math.pow(numero, 1/3)

*/


function calcIMC(peso, altura) {
  const result = peso / (altura * altura)

  switch (result.toFixed(2)) {
    case result < 18.5:
      console.log("abaixo do peso")
      break
    case result >= 18.5 || result <= 24.9:
      console.log("Peso normal")
      break
    case result >= 20 || result <= 29.9:
      console.log("sobrepeso")
      break
  }
}

// console.log(calcIMC(60, 1.65))
calcIMC(60, 1.65)