// function twoSum(nums: number[], target: number) {
// }

// console.log(twoSum([2,7,11,15], 9)) // Output: [0,1]
// console.log(twoSum([3,2,4], 6)) // Output: [1,2]
// console.log(twoSum([3,3], 6)) // Output: [0,1]

function counter(arr: number[]) {
  const count = new Map<number, number>();

  for (const num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  let num;
  let currentValue = 0;

  for (const [key, value] of count) {
    if (value > currentValue) {
      currentValue = value;
      num = key;
    }
  }

  return num;
}

console.log(counter([1, 2, 3, 1, 2, 1, 4, 5, 4]));

// counter([1, 2, 3, 1, 2, 1, 4, 5, 4]);
