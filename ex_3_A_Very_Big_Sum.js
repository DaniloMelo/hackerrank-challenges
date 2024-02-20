const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

//exemplo com for loop
function aVeryBigSum1(ar) {
  let result = 0

  for (let i = 0; i < ar.length; i++) {
    result += ar[i]
  }

  return [result]
}

//exemplo com reduce
function aVeryBigSum2(ar) {
  const result = ar.reduce((acc, curr) => {
    return acc += curr
  }, 0)

  return [result]
}

console.log(aVeryBigSum1(array))
console.log(aVeryBigSum2(array))