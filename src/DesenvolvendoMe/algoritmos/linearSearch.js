const arr1 = [7, 12, 4, 9, 3, 18, 5, 11, 6, 14]
const arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const arr3 = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]

function linearSeach1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}
console.log(linearSeach1(arr1, 11))


function linearSeach2(arr, target) {
  for (let index in arr) {
    if (target === arr[index]) {
      return index
    }
  }
  return -1
}
console.log(linearSeach2(arr2, 9))

