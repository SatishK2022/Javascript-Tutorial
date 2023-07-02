// for-of :- We get the value of the object or the array in this loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each Char is ${greet}`);
}

// Map : It does not take the duplicate entries
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, " :- ", value);
}

const myObject = {
    'game1': "BGMI",
    'game2': "Freefire"
}

// ##For-of loop not working for Objects 
// for (const [key, value] of myObject) {
//     console.log(key, " :- ", value);
// }

