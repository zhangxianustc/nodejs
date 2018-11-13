var a = 3, b = 4, c = false;

var d = c ? a : b;

console.log(d);

if((a && b) && c) {
    console.log("yes");
} else {
    console.log('no');
}