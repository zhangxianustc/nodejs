const { camelize, snakeize } = require('casing')
const bcrypt = require('bcryptjs')

var obj = {
  huijia: {
    company: 'Huijiajia',
    address: 'Hangzhou',
    password: '123456'
  },
  user: person
}

var person = {
    name: 'zhang',
    age: 2,
    info: {
      school: "USTC",
      addr: "Hangzhou"
    }
}
console.log(obj)

var objSnk = snakeize(obj)
console.log(objSnk)

var objCam = camelize(obj)
console.log(objCam)

// let pwd = bcrypt.hash(obj.password, "123456")
// console.log(pwd)

// var name = 'order$'
// console.log(name.length)
// let nameWith =  name.endsWith('$')
// if(nameWith){
//     var newName = name.slice(0, name.length-1)
// }
// console.log(nameWith, newName)