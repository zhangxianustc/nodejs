const assert =  require('assert')
const fs =  require('fs')
const should = require('should')

describe('File', function() {
    describe('readFile', function() {
        it('Should retuen -1 when the value is not present', function() {
            assert.equal(1, [ 1, 2, 3 ].indexOf(2))
            // assert.equal(1, [ 1, 2, 3 ].indexOf(1))
        })

        it('Write file', () => {
            let obj = {
                name: 'Huijiajia',
                address: 'Hangzhou'
            }
            let array = [ 1, 2, 3 ]
            console.log(obj)
            fs.writeFile('test.txt', array, function(err) {
                if(err) 
                    throw err
                console.log('write success')
            })
        })

        it('Read test.txt without err', function() {
            fs.readFile('test.txt', {encoding: 'utf-8'}, function(err, testRead){
                if(err)
                    throw err
                var readResult = JSON.stringify(testRead)
                console.log(readResult)
            })
        })
    })

    describe('Array', () => {
        beforeEach(function() {    
            console.log('BeforeEach')
        })

        // before(function(){
        //     console.log('Before')
        // })

        // before(function(){
        //     console.log('Before twice')
        // })

        // after(function(){
        //     console.log('After')
        // })
       
    })
})