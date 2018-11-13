function foo() {
    var a = 12;
    function bar() {
        var b = 33;
        // a = 23;
        console.log(a, b);
        function biz() {
            c = 55;
            console.log(a, b, c);
        }
        biz();
    }
    bar();
}

foo();