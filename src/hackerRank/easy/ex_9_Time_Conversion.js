/*
  Link: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

  Converter o formato de hora AM / PM em formato 24hs

  O Parametro de entrada é uma sting, e o retorno tnm deve ser uma string.
*/

const hour1 = '07:05:45PM'
const hour2 = '12:01:00AM'
const hour3 = '10:00:00AM'
const hour4 = '12:01:00PM'
const hour5 = '03:33:00PM'

function timeConversion(s) {
  if (s.slice(0, 2) == '12' && s[s.length - 2] == 'P') {
    return `${s.slice(0, s.length - 2)}`
  }

  if (s.slice(0, 2) != '12' && s[s.length - 2] == 'P') {
    const hour = s.slice(0, 2)
    const hourToNum = Number(hour) + 12
    const hourToStr = hourToNum.toString()
    return `${hourToStr + s.slice(2, s.length - 2)}`
  }

  if (s.slice(0, 2) == '12' && s[s.length - 2] == 'A') {
    return `00${s.slice(2, s.length - 2)}`
  }

  if (s.slice(0, 2) != '12' && s[s.length - 2] == 'A') {
    return `${s.slice(0, s.length - 2)}`
  }
}

console.log(timeConversion('12:39:00AM'))
