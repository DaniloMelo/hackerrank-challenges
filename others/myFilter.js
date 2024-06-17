Array.prototype.myFilter = function (callBackFn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {   // `this` se refere ao array que estamos iterando.
    if (callBackFn(this[i], i, this) === true) {     // `this[i]` é o item atual do array. `i` é o index do item atual do array. `this` é o array completo.
      newArray.push(this[i])
    }
  }

  return newArray
}


const students = [
  { name: "John", grade: 7 },
  { name: "Mary", grade: 6 },
  { name: "Eliot", grade: 10 },
  { name: "Darlene", grade: 9 },
  { name: "Tyrell", grade: 2 },
]


const pass = students.myFilter(student => student.grade >= 7)

console.log(pass)
/*
  Resultado: 

  [
    { name: 'John', grade: 7 },
    { name: 'Eliot', grade: 10 },
    { name: 'Darlene', grade: 9 }
  ]

*/
