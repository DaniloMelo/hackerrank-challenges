// verifica a idade passada por string por parametro de uma função.

function birthday(bdate) {
  const date = new Date()
  const currentDay = date.getDay()
  const currentMonth = date.getMonth() + 1 // getMonth retorna os meses de 0 a 11
  const currentYear = date.getFullYear()

  const [bDay, bMonth, bYear] = bdate.split('/').map(item => parseInt(item))

  if ((currentDay < bDay && currentMonth === bMonth) || currentMonth < bMonth) {
    return currentYear - bYear - 1
  }

  return currentYear - bYear
}
console.log(birthday("03/06/1992"))