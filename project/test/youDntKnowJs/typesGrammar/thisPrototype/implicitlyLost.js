function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
};

var a = "I am global A"
var bar = obj.foo

bar()
