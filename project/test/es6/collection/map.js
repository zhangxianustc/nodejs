'use strict'
var map = new Map()
map.set('name', 'Huijiajia')
var name = map.get('name')
console.log(name)
console.log(map.has('name'))

var roles = new Map([
    ['r1', 'Admin'],
    ['r2', 'Engineer'],
    ['r3', 'HR']
])

var res =  roles.has('r2')
var role = roles.get('r2')
console.log(roles)
roles.clear()
console.log(roles)
console.log(res, role)

for(let r of roles.entries() ){
    console.log(`${r[0]} : ${r[1]}`)
}