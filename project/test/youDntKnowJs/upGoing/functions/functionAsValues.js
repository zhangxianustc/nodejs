var a = 23;
var x = (function IIFE(){
    var a = 10;
    console.log(1);
    return a;
})();

console.log(a);
console.log(x);