/*
  Link https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=false

  Verificar qual dia/mes/ano será o dia do programador de acordo com a data informada

  256 é o dia do programador. 

  Calcular a data entre os anos de 1700 a 2700

  De 1700 a 1917 = calendario juliano.
    Para calcular o ano bissexto no calendario juliano:
    o ano tem que ser divisivel por 4.
  
  Em 1918 = depois de 31 de janeiro, o proximo dia foi 14 de fevereiro
    Significa que 14 de fevereito era o 32 dia do ano.

  De 1918 em diante = calendario gregoriano
    Para calcular o ano bissexto no calendario gregoriano:
    o ano tem que ser divisivel por 400
    o ano tem que ser divisivel por 4
    o ano NÃO pode ser divisivel por 100

  Ambos os calendarios tem anos bissextos
    Caso o ano seja divisivel por 4, é um ano bissexto. Entao fevereiro
    passa de 28 dias para 29
  

  OBS 1:
    Temos um if com tres condiçoes.
    Neste cenario, caso a primeira e a segunda forem verdade, a terceira nao é verificada (é ignorada).
    Caso a primeira for verdade, a segunda for falsa, a terceira é verificada. 

    Entao sao verificadas a 1 e 2 condições,
    Caso a segunda for false, sao verificadas a 1 e 3 condições
 */

const months = {
  jan: 31,
  fev: 28,
  mar: 31,
  abr: 30,
  mai: 31,
  jun: 30,
  jul: 31,
  ago: 31,
  // set: 30,
  // out: 31,
  // nov: 30,
  // dez: 31,
}

function dayOfTheProgrammer(year) {
  if (year >= 1700 && year <= 2700) {

    //Calandario juliano
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        months.fev = 29
        const day = Object.values(months).reduce((acc, curr) => acc += curr)
        return `${256 - day}.09.${year}`
      } else {
        months.fev = 28
        const day = Object.values(months).reduce((acc, curr) => acc += curr)
        return `${256 - day}.09.${year}`
      }
    }

    // Transiçao do calendario juliano para o gregoriano 
    if (year === 1918) {
      months.fev = 15
      const day = Object.values(months).reduce((acc, curr) => acc += curr)
      return `${256 - day}.09.${year}`
    }

    // Calandário gregoriano
    if (year > 1918) {
      if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) { //OBS 1
        months.fev = 29
        const day = Object.values(months).reduce((acc, curr) => acc += curr)
        return `${256 - day}.09.${year}`
      } else {
        months.fev = 28
        const day = Object.values(months).reduce((acc, curr) => acc += curr)
        return `${256 - day}.09.${year}`
      }
    }

  } else {
    return 'Informe um ano entre 1700 e 2700'
  }
}


console.log(dayOfTheProgrammer(1918)); // 26.09.1918
console.log(dayOfTheProgrammer(2017)); // 13.09.2017
console.log(dayOfTheProgrammer(2016)); // 12.09.2016
console.log(dayOfTheProgrammer(1800)); // 12.09.1800

