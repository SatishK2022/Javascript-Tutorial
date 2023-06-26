const userEmial = "satish@gmail.com"

// if (userEmial) {
//     console.log("Got the Email!!");
// } else{
//     console.log("Don't Have user Email!!");
// }

// ## Falsy Values :-
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// ## Truthy Values :-
// "0", 'false', " ", [], {}, function(){}

// ## Check for Empty Array
// const arr = []
// if (arr.length === 0) {
//     console.log("Array is Empty!!");
// }

// ## Check for Empty Object
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty!!");
// }

// ** !imp
// false == 0 => true
// false == '' => true
// 0 == '' => true

// ## Nullish Coalescing Operator(??): null undefined

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 10
// val = null ?? 10 ?? 20 // picks the first value: 10
// console.log(val);

// ## Ternary Operator
// Syntax - Condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less Than 80")