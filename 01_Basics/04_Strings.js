const name = "Satish"
const repoCount = 10

 // Not recommended
// console.log(name + " has " + repoCount + " Repository.");

// Recommended
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("PUBG-Battleground-mobile-india");
// console.log(gameName);

// console.log(gameName[2]);
console.log(gameName.__proto__); // Prints the prototype of the element

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("t"));


//## Difference Between substring() and slice()

// 1) Negative Values:- substring() and slice() both can have negative values but if there is a negative value in substring() than it treats as 0 and slice() slice counts from the end.
// 2) Paramenter Consistency:- A big difference with substring() is that if the 1st argument is greater than the 2nd argument, substring() will swap them. slice() returns an empty string if the 1st argument is greater than the 2nd argument.

const subString = gameName.substring(0, 4) // End value is not included
// console.log(subString);

const anotherString = gameName.slice(0, -10) // It can take negative values
// console.log(anotherString);

const inputName = "    Satish    "
// console.log(inputName);
// console.log(inputName.trim()); // It removes the white spaces

const url = "https://satish.com/satish%20kumar/"
console.log(url.replace('%20', '-'));
console.log(url.includes('satish'));

console.log(gameName.split('-'));

console.log(gameName.repeat(2));