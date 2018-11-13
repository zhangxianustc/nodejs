function foo(name) {
    this.name = name;
}

foo.prototype.age = 23;
foo.prototype.getName = function() {
    return this.name;
}
var f1 =  new foo('zx');
console.log(f1.name, f1.age);
console.log(f1.getName());