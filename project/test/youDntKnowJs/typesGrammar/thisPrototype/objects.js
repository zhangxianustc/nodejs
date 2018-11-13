var strObject = new String("I am String")
console.log(typeof strObject)
console.log(strObject instanceof String)

var str = Object.prototype.toString.call(strObject)
console.log(str)