const a = [5, 6, 7]
const b = [3, 6, 10]

function compareTriplets(ar1, ar2) {
  let alice = 0
  let bob = 0

  for (let i = 0; i < 3; i++) {
    if (ar1[i] > ar2[i]) {
      alice += 1
    } else if (ar1[i] < ar2[i]) {
      bob += 1
    }
  }

  return [alice, bob]
}


console.log(compareTriplets(a, b))