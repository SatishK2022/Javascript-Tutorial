// for-in :- We get the key of the object or the array in this loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);   
}

const programming = ["Java", "Js", "cpp", "Ruby", "Python"]
for (const key in programming) {
    // console.log(programming[key]);
}

// Map : It does not take the duplicate entries
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }