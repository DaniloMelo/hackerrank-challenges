Array.prototype.myReduce = function (callBackFn, initialValue = null) {
  let acc = 0

  for (let i = 0; i < this.length; i++) {
    acc = callBackFn(acc, this[i])
  }

  initialValue != null ? acc += initialValue : initialValue = null

  return acc
}



const products = [
  { name: "Caderno", price: 19.99, quant: 1 },
  { name: "Caneta", price: 1.99, quant: 3 },
  { name: "Lapis", price: 1.50, quant: 2 },
  { name: "Borracha", price: 4.99, quant: 1 },
  { name: "Mochila", price: 49.99, quant: 1 },
]

const result = products.myReduce((acc, curr) => {
  return acc + curr.price * curr.quant
}, 0)

console.log(result) // 83.94




const nums = [1, 2, 3]

const res = nums.myReduce((acc, curr) => acc + curr, 10)

console.log(res) // 16

