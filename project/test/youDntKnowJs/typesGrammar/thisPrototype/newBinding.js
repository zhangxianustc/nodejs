function foo(a) {
    this.a = a
    var obj = {
        b: 10,
        c: "Hello"
    }
    // return obj
}

var bar = new foo(1)
console.log(bar.a, bar.b, bar.c)