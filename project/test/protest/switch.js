const moment = require('moment')

function foo (c) {
    switch (c) {
        case 'First':
            console.log('First')
            break
        case 'Second':
            console.log('Second')
            break
        default:
            console.log('other date')
    }
}

foo('First')

var date2 =  new Date()
// var lastDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
// // var lastDate = date.toLocaleDateString()
console.log(date2)

var date = {}
var today = moment()
var now = today.format('YYYY-MM-DD HH:mm:ss')
date.today = today.format('YYYY-MM-DD')
date.yestoday = today.subtract(2, 'days').format('YYYY-MM-DD')
console.log(date, now)