var a = 23
var b = 'abc'
var c = null

console.log(a || b, a || c, a && b, a && c, c || a, c && a)

function foo() {
    console.log(d);
}
var d = 42
console.log(d && foo())
