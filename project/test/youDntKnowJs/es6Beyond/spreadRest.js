function foo(x, y, z) {
    console.log(x, y, z)
}
foo(...[1, 2, 3])
// foo.apply(null, [4, 5, 6])

var a = [1, 2, 3]
var b = [1, ...a, 4]
// var c = ['1'].concat(a, '5', 6, 7)
console.log(b)
// console.log(c)

function foo2(x, y, ...z) {
    console.log(x, y, z)
}
foo2(1, 2, 3, 4, 5)

function foo3(...args) {
    console.log(args)
}
foo3(1, 2, 3, 4, 5)

