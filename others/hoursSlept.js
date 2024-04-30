/*
  Crie uma função que recebe 2 parametros, a hora que vai dormir, e a hora que vai acordar.
  Calcule quantas horas de sono terá e retorne uma string com esta informação

  Os parametros devem ser strings no formato de 24 hs
  
  Exemplo de entrada hora de dormir = "22:00", hora de acordar "05:00" (strin)
*/

function hoursSlept(sleepTime, wakeUpTime) {

  const [hourSleepTime, minuteSleepTime] = sleepTime.split(":")
  const sleepTimeToMinutes = hourSleepTime * 60 + parseInt(minuteSleepTime)

  const [hourWakeUpTime, minuteWakeUpTime] = wakeUpTime.split(":")
  const wakeUpTimeToMinutes = hourWakeUpTime * 60 + parseInt(minuteWakeUpTime)

  return { sleepTimeToMinutes, wakeUpTimeToMinutes }

  // if (sleepTime <= 23) {
  //   return `Horas dormidas ${24 - (sleepTime - wakeUpTime)}`
  // }
}


// dormir as 22, acordar as 5. horas dormidas = 7

// console.log(hoursSlept("22:30", "05:30"))
console.log(hoursSlept("22:50", "05:30"))