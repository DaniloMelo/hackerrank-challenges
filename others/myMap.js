Array.prototype.myMap = function (callBackFn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {  // this se refere ao array que estamos iterando. 
    newArray.push(callBackFn(this[i], i, this))  //this[i] é i item do array, i é o index do array, this é o array completo.
  }

  return newArray
}


const arrNums = [1, 2, 3, 4, 5]

const resp1 = arrNums.myMap(num => num * 10)

console.log(resp1) // [ 10, 20, 30, 40, 50 ]



const arrStrings = ["a", "b", "c", "d"]

const resp2 = arrStrings.myMap(str => str.toUpperCase())

console.log(resp2) // [ 'A', 'B', 'C', 'D' ]



const arrStates = ["sp", "rj", "bh", "mt", "ma"]

const resp3 = arrStates.myMap((state, index) => {
  return `${index}: ${state}`
})

console.log(resp3) // [ '0: sp', '1: rj', '2: bh', '3: mt', '4: ma' ]
