var funcs = []
for(var i = 0; i< 5; i++){
    let j = i
    funcs.push(function(){
        console.log(j)
    })
}

funcs[2]()

if(true) {
    function foo() {
        console.log('1')
    }
} else {
    function foo() {
        console.log('2')
    }
}

foo()