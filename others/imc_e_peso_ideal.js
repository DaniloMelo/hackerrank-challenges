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

--------

O Peso ideal de adultos pode ser calculado com a seguinte fórmula:
22 * altura² (para homens) 
21 * altura² (para mulheres)


OBS, um numero ao quadrado é este numero * ele mesmo (5 * 5 = 25) isto é chamado de potencia. (nao é raiz quadrada)
  usamos Math.pow(arg1, arg2) para calcular uma potencia.
  arg1 é o numero que queremos elevar. (base)
  arg2 é a potencia. (expoente)
  ex: 5² = 5 x 5 = 25 é o mesmo que Math.pow(5, 2)


***Em Js, temos o método Math.sqrt() para calcaular raizes quadradas (ele calcula o valor exato).
Para raizes cubicas, podemos usar o método de potência Math.pow(numero, 1/3)
*/


function calcIMC(peso, altura, sexo) {
  let pesoIdeal = 0
  const imc = peso / (altura * altura)  // ou tbm-> peso / Math.pow(altura, 2)

  if (sexo === "M") {
    pesoIdeal = 22 * Math.pow(altura, 2)
  } else if (sexo === "F") {
    pesoIdeal = 21 * Math.pow(altura, 2)
  }

  if (imc < 18.5) {
    return `IMC: ${imc.toFixed(2)} Abaixo do peso. \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  } else if (imc <= 24.9) {
    return `IMC: ${imc.toFixed(2)} Peso normal. \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  } else if (imc <= 29.9) {
    return `IMC: ${imc.toFixed(2)} Sobrepeso. \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  } else if (imc <= 34.99) {
    return `IMC: ${imc.toFixed(2)} Obesidade Grau I. \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  } else if (imc <= 39.99) {
    return `IMC: ${imc.toFixed(2)} Obesidade Grau II (Severa). \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  } else if (imc >= 40) {
    return `IMC: ${imc.toFixed(2)} Obesidade Grau III (Mórbida). \nPeso ideal: ${pesoIdeal.toFixed(3)} Kg`
  }
}

console.log(calcIMC(84, 1.60, "M"))
console.log(calcIMC(52, 1.48, "F"))

