const { camelize, snakeize } = require('casing')

var person = {
  userName: 'zhangxian',
  userAge: 28
}

var snakeChange = function (person) {
  var input = snakeize(person)
  console.log('snakeChange:', input)
  return input
}

var cameChange = function (obj) {
  var output = camelize(obj)
  console.log('cameChange: ', output)
}

var res = snakeChange(person)
cameChange(res)
