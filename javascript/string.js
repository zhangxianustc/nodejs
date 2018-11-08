let addr = 'hangzhou'
let name = 'huijiajia'
let school = 'USTC'
let room = '    wenyi  '

let charat = addr.charAt(3)
let charCodeAt = addr.charCodeAt(3)
console.log('charAt:', charat, '\ncharCodeAt', charCodeAt)

let addrName = addr.concat(' ', name)
console.log('concat:', addrName)

let indexOf = addrName.indexOf('jia')
let lastIndexOf = addrName.lastIndexOf('jia')
console.log('indexOf:%s \nlastIndexOf:%s', indexOf, lastIndexOf)

let match = addrName.match(/jia/g)
console.log('match:%s', match)

let replace = addrName.replace('hangzhou', 'zhejiang hangzhou')
let search = addrName.search('jia')
console.log('replace:%s \nsearch:', replace, search)

let slice = addrName.slice(2)
let split = addrName.split('i')
console.log('slice:%s \nsplit:%s', slice, split)

let substr = addrName.substr(2)
console.log('substr:', substr)

let substring = addrName.substring(2, 6)
console.log('substring:', substring)

let toLowerCase = school.toLowerCase()
console.log('toLowerCase:', toLowerCase)

let toUpperCase = name.toUpperCase()
console.log('toUpperCase:', toUpperCase)

let trim = room.trim()
console.log('trim:', trim)

let valueOf = room.valueOf()
console.log('valueof:', valueOf)
