function makeAdder(x) {
    function add(y) {
        return y + x;
    }
    return add;
}

var plusOne = makeAdder(1);
var pluseTen =  makeAdder(10);

var a = plusOne(5);
var b = plusOne(20);
var c = pluseTen(62);

console.log("a = %d, b = %d, c = %d",a,b,c);