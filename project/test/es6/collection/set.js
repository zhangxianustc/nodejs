// var set = new Set('a', 'b', 'c', 'd')
// var iterator = set.entries()
// console.log(iterator.next())
// for(let r of set.entries()) {
//     console.log(`${r[0]},${r[1]}`)
// }   

var obj = new Object({
    name: 'Huijiajia',
    location: 'Hangzhou'
})
var arr = new Array( 5, 10, 15, 8 ) 
var iterator_arr = arr.entries()
var newArr = arr.sort()
console.log(iterator_arr.next())
console.log(newArr)