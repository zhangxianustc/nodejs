
let arr = [
  {
    name: 'zhang',
    age: 23
  },
  {
    name: 'xian',
    age: 22
  },
  {
    name: 'li',
    age: 42
  },
  {
    name: 'wang',
    age: 21
  }
]

let offset = 1
let limit = 2
let list = []
if (arr) {
  list = arr
  offset && list.splice(0, offset)
}
console.log(list)
limit && list.splice(limit)
console.log(list)
