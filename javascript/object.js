function Person (name) {
  this.name = name
}
Person.prototype.age = null
Person.prototype.setAge = function (age) {
  this.age = age
}
Person.prototype.getAge = function () {
  return this.age
}

let me = new Person('zhangxian')
me.setAge(23)
let myAge = me.getAge()
let myAge2 = me['age']
let myAge3 = me.age
console.log('me:', me, '\nmyAge:', myAge, '\nmyAge2:', myAge2, '\nmyAge3', myAge3)
