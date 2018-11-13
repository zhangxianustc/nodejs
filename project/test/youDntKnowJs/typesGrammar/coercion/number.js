var i = 30
Number.prototype.valueOf = function() {
    return i++
}

var num = new Number(2)

if(num == 30 && num == 31) {
    console.log('Yes i = ',i)
}

// console.log(num.valueOf())
