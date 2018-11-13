var obj = {
    a: "hello",
    b: 42,
    c: true,
    d: 23
};

var d = "a";
console.log(obj.a, obj.b, obj.c)
console.log(obj["a"], obj["b"], obj["c"], obj[d], obj["d"])