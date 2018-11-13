function foo() {
    return [1, 2, 3]
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}
var [a, b, c] = foo()
var {x, z} = bar()
console.log([a, b, c])
console.log({x, z})

var {x: AA, y: BB} = bar()
console.log(AA, BB)

var arr = foo()
var obj = bar()

// var aa = arr[0], bb = arr[1], cc = arr[2]
// var xx = obj.x
// var yy = obj.y
// console.log(aa, bb, cc, xx, yy)

