/*
# Primitive 
1. Number
2. String
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

# Non-Primitive(Reference):-
1. Array
2. Object
3. Function
*/

// Javascript is a dynamically typed language Because data type will automatically assigned at the time of compilation or code execution.
const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// BigInt
const bigNumber = 2735230592630523765n

// array
const heros = ["shaktiman", "naagraj", "doga"]

// Object
let myObj = {
    name: "Satish",
    age: 19
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof id);
// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof outsideTemp); // typeof null is `object`
// console.log(typeof userEmail);

let myName = "Satish"
// console.log(`Hello my name is ${myName}`);

// typeof documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null


// Type and typeof return value
// number - number
// string -  String
// boolean - boolean
// symbol - symbol
// bigint - bigint
// undefined - undefined
// null - object
// array - object
// object - object
// function - function

// ********************************************************************
/*
# Memory are of two types:-
1) Stack (Primitive) :- It gives the copy of the variable.
    For example - If copy value is changed than there will be no effect on the actual variable.

2) Heap (Non-Primitive) :- It gives the reference of the variable.
    For example - If changes made to any variable will change the actual value
*/

let firstName = "Satish"
let anotherName = firstName
anotherName = "Nagender"

console.log(firstName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Use of `console.table` :- It gives the output of the data in the form of table
console.table([userOne.email, userTwo.email, userOne.upi, userTwo.upi])

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const user1 = new Person("Satish", "Kumar")
const user2 = new Person("Nagender", "Kumar")
console.table([user1, user2])