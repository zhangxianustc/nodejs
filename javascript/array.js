let arr = ['zhangxian', 'hangzhou', 'huijiajia']

let entry = arr.entries()
console.log('entries:', entry)

let every = arr.every(it => (typeof (it) === 'string'))
console.log('ervey:', every)

let fill = arr.fill('tianmen', 1, 2)
console.log('fill:', fill)

let filter = arr.filter(it => (typeof (it) === 'string'))
let find = arr.find(it => it === 'zhangxian')
let findIndexOf = arr.findIndex(it => it === 'huijiajia')
console.log('filter:', filter, '\nfind:', find, '\nfindIndexOf:', findIndexOf)

let each = arr.forEach(it => it.toUpperCase())
console.log('foreach:', each)

let from = Array.from(arr, it => it.concat(' haha'))
console.log('from:', from)

let includes = arr.includes('zhangxian')
console.log('includes:', includes)

let isArray = Array.isArray(arr)
console.log('isArray:', isArray)

let join = arr.join()
console.log('join:', join)

// let keys = arr.keys()
// console.log("keys:", keys)

let map = arr.map(it => it.concat(' hello'))
console.log('map:', map)

let pop = arr.pop()
let push = arr.push('huijiajia-2')
console.log('pop:', pop, 'push:', push)

let reduce = arr.reduce((res, input) => res.concat(input))
let reduceRight = arr.reduceRight((res, input) => res.concat(input))
console.log('reduce:', reduce, '\nreduceRight:', reduceRight)

let reverse = arr.reverse()
console.log('reverse:', reverse, 'arr:', arr)

let shift = arr.shift()
console.log('shift:', shift, 'arr:', arr)
let unshift = arr.unshift('zhangxian')
console.log('unshift:', unshift, 'arr:', arr)

arr.push('huijiajia')
let slice = arr.slice(1, 2)
console.log('slice:', slice)

let some = arr.some(it => it.match('zhang'))
console.log('some:', some)

let sort = arr.sort()
sort.reverse()
let arrNum = [10, 3, 54, 98, 42]
arrNum.sort((a, b) => b - a)
console.log('sortDesc', arrNum)
arrNum.sort((a, b) => a - b)
console.log('sort:', sort, '\nsortAsc:', arrNum)

arr.splice(0, 1)
console.log('splice:', arr)
arr.splice(1)
console.log('splice:', arr)

let value = arr.valueOf()
console.log('value:', value)
