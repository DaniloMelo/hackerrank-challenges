const arr = [
  {
    numero: 1,
    nome: "11111"
  },

  {
    numero: 2,
    nome: "2222"
  },

  {
    numero: 3,
    nome: "3333"
  },

  {
    numero: 4,
    nome: "4444"
  },

  {
    numero: 5,
    nome: "5555"
  },
]

function teste(n: number) {
  const res = arr.find(item => item.numero === n)
  return res
}

console.log(teste(3))

export const a = {}