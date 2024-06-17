/*
  Crie uma função que recebe 2 parametros, a hora que vai dormir, e a hora que vai acordar.
  Calcule quantas horas de sono terá e retorne uma string com esta informação

  Os parametros devem ser strings no formato de 24 hs
  
  Exemplo de entrada hora de dormir = "22:00", hora de acordar "05:00" (strin)
*/

function hoursSlept(sleepTime, wakeUpTime) {
  const [hourSleepTime, minuteSleepTime] = sleepTime.split(":")

  const [hourWakeUpTime, minuteWakeUpTime] = wakeUpTime.split(":")

  // if(hourSleepTime > hourWakeUpTime){
  //   const hours = (24 * 60 - ((hourSleepTime * 60) - (hourWakeUpTime * 60))) / 60

  //   const minutes = minuteSleepTime - minuteWakeUpTime

  //   if (minutes < 0) {
  //     return `Horas dormidas = ${hours}:${Math.abs(minutes) < 10 ? '0' + Math.abs(minutes) : Math.abs(minutes)}`
  //   } else {
  //     return `Horas dormidas = ${hours}:${minutes < 0 ? '0' + minutes : minutes}`
  //   }
  // }

  if (hourSleepTime < hourWakeUpTime) {
    const hours = (hourWakeUpTime * 60) - (hourSleepTime * 60)
    // const asdasd = 24 * 60
    return ((24 * 60) - hours) / 60
  }
}

// console.log(hoursSlept("22:00", "05:30"))
// console.log(hoursSlept("22:50", "05:30"))
console.log(hoursSlept("01:00", "09:00"))


// console.log(Math.abs(-38));