const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const myHeros = marvel_heros.concat(dc_heros)
// console.log(myHeros);

// Spread Operator(...) :- Spread all the element of the array
// const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros);

// const myArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [2, 3]]]
// const usableMyArray = myArray.flat(Infinity)
// console.log(usableMyArray);

// console.log(Array.isArray("Satish"))
// console.log(Array.from("Satish"))
console.log(Array.from({name: "Satish"})) // Ruturns an empty array []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));