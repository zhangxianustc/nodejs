const moment =  require('moment')

function foo(timeRange){
    let createAtAfter, createAtBefore
    let startTime = ' 00:00:00.000', endTime = ' 23:59:59.999'
    let date = moment()
    let now = date.format('YYYY-MM-DD HH:mm:ss')
    let today = date.format('YYYY-MM-DD')
    let yestoday = date.subtract(1, 'days').format('YYYY-MM-DD')
    let theDayBefor = date.subtract(1, 'days').format('YYYY-MM-DD')
    let earlier = date.subtract(1, 'days').format('YYYY-MM-DD')
    switch (timeRange) {
        case 'TODAY' :
            createAtAfter = today + startTime
            createAtBefore = now
            break
        case 'YESTODAY' :
            createAtAfter = yestoday + startTime
            createAtBefore =  yestoday + endTime
            break
        case 'THEDAYBEFOR' :
            createAtAfter = theDayBefor + startTime
            createAtBefore = theDayBefor + endTime
            break
        case 'EARLIER' :
            createAtBefore = earlier + endTime
            break
        default :
            createAtBefore = now
            break
    }
    // console.log(createAtAfter, createAtBefore)
    return [createAtAfter, createAtBefore]
}

var [after, befor] = foo('THEDAYBEFOR')
console.log(after, befor)