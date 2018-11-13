"use strict" 
//find
var numbers = [12, 15, 20]
var oddNumber =  numbers.find((x) => x % 5 == 0)
console.log(oddNumber)

var numbers = [12, 15, 21]
var oddNumber =  numbers.findIndex((x) => x % 5 == 1)
console.log(oddNumber)

//entries
var numbers = [12, 15, 21]
var val = numbers.entries(); 
console.log(val.next().value);  
console.log(val.next().value);  
console.log(val.next().value);

var val2 =  numbers.entries();
console.log([...val2])

//from
for (let i of Array.from('hello')) { 
   console.log(i) 
}

//keys
console.log(Array.from(['a', 'b', 'c'].keys()))

//for..in
var nums = [1001,1002,1003,1004] 
for(let j in nums) { 
   console.log(nums[j]) 
}

//de-structuring
var arr = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)
