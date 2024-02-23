// Given an array of integers, find the sum of its elements.

// For example,
// const arr = [1, 2, 3], 
// 1 + 2 + 3 = 5

const array = [1, 2, 3, 4, 10, 11]

// example with for loop
function simpleArraySumExample1(arr) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result
}

//example with reduce
function simpleArraySumExample2(arr) {
  const result = arr.reduce((acc, curr) => {
    return acc += curr
  }, 0)

  return result
}

console.log(simpleArraySumExample1(array))
console.log(simpleArraySumExample2(array))