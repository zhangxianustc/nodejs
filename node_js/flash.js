
let str = '李文燕'

function sleep (numberMillis) {
  var now = new Date()
  var exitTime = now.getTime() + numberMillis
  while (true) {
    now = new Date()
    if (now.getTime() > exitTime) { return }
  }
}

// for (let char of str) {
//   // process.stdout.write(char + "\033[?25l", 'color:#f00;')
//   console.log('%c这是一个测试%c', 'color:red;font-size:50px')

// }
sleep(150)
console.log(str)
