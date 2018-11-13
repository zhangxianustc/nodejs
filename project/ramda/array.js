const R = require('ramda')

let array = [
    {
        name: 'zhangsan',
        age: 15
    },
    {
        name: 'lisi',
        age: 13
    },
    {
        name: 'wangwu',
        age: 20
    }
]
let r = R.map(it => it.name, array)
let r2 = R.map(it => it.age, array)
let r3 =  R.map(it => it, array)
console.log(r, r2, r3)
