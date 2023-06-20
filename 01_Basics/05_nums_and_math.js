// ++++++++++++++++++++++++++++ Number ++++++++++++++++++++++++++++++++

const score = 200

const balance = new Number(20)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 20.00

const num = 123.68389
// console.log(num.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')); // by default us standards

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// ++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-20)); // Only -ve number converted into +ve
// console.log(Math.round(22.56)); // roundoff the value
// console.log(Math.floor(3.6)); // Gives the lower value
// console.log(Math.ceil(3.6)); // Gives the upper value
// console.log(Math.sqrt(100));
// console.log(Math.pow(2,3));
// console.log(Math.min(2, 4, 6, 1, 90));
// console.log(Math.max(2, 4, 6, 1, 90));

console.log(Math.random()); // Value lies between 0 and 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // IMPORTANT
