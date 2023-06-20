const myArray = [1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArray2 = new Array(1, 3, 4, 5, 8)
// console.log(myArray2[4]);

// Array methods
// myArray.push(6)
// myArray.push(7)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);

// myArray.unshift(9) // Add an element at the starting of the array
// myArray.shift() // Removes and element at the starting of the array
// console.log(myArray);

// console.log(myArray.includes(6)); // returns the value as true of false
// console.log(myArray.indexOf(2));  // if does not have the value return -1 otherwise 1

// const newArr = myArray.join() // converts the array to string
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

// Slice and Splice
console.log("Original array : ", myArray);

const myn1 = myArray.slice(1, 3) 
console.log("Slice : " + myn1);
console.log("Original array after slice() : ", myArray);

const myn2 = myArray.splice(1, 3)
console.log("Splice : " + myn2);
console.log("Original array after splice() : ", myArray);

// # Output of avove code
// Original array :  [ 1, 2, 3, 4, 5 ]
// Slice : 2,3
// Original array after slice() :  [ 1, 2, 3, 4, 5 ]
// Splice : 2,3,4
// Original array after splice() :  [ 1, 5 ]

/*
# Difference between slice() and splice() :-
1) slice() does not include the end value and splice() includes the end value
2) slice() does not change the array but splice() changes the original array(manipulate he original array)
*/