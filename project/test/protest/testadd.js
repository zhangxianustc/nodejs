const addObj = require('./add')
const { DB_CONN, DB_DEBUG ,LOGNAME} = process.env

var res =  addObj.add(10, 20)
console.log(res)
console.log(DB_CONN)