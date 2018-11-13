var array1 = [1 , 2, 3]
var array2 = [10, 11, 12]

var array = array1.concat(array2)
array[0] = String(array[0])
console.log(array)

console.log(typeof(array[0]))

var ret = array.every(function(elements, indx, array) {
    return (typeof(elements) == "number")
})
console.log(ret)

var str = array2.toString()
console.log(str)