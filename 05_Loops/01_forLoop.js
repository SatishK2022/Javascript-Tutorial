// For Loop

for (let i = 0; i < 10; i++) {
    const element = i
    if (element == 4) {
        // console.log("4 is best Number");
    }
    // console.log(element);
}

// Printing Table from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Values ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} X ${j} = ${i*j}`);
    }
    // console.log("\n");
}

const myArray = ["superman", "batman", "spiderman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// ## break and continue :-
// # break
// for(let i = 1; i < 10; i++){
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`The Value of i is ${i}`);
// }

// # continue
for(let i = 1; i < 10; i++){
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`The Value of i is ${i}`);
}