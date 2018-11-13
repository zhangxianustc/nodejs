function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i]);
    }
    return sum;
}

console.log(add(3, 5, '3'));