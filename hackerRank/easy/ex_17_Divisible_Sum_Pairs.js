/*
  Link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem


*/

function divisibleSumPairs(n, k, ar) {
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(`i:${ar[i]}, j:${ar[j]}`)

      if ((ar[i] + ar[j]) % k === 0) {
        count += 1
        console.log(count)
      }
    }
  }

  return count
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // resp: 5
// console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])) // resp: 3



