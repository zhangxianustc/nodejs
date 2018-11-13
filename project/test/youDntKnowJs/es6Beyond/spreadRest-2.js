function foo(...args) {
     args.shift()
    console.log(args)
}

function bar() {
    var args = Array.prototype.slice.call(arguments)
    console.log('args:' + args)
    args.push(4, 5)
    args = args.filter(function(v) {
        return v%2 == 0
    })

    foo.apply(null, args)
}

bar(0, 1, 2, 3)