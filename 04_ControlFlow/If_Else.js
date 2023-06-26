// if Statement

// const temperature = 32

// if (temperature < 40) {
//     console.log("Less Than 40!!");
// }else{
//     console.log("Temperature is greater than 50!!");
// }

// console.log("Code Executed Successful!!");

// ## Operators :- >, <, >=, <=, ==, !=, ===

// const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }


// const balance = 2000

// **Not Recommended
// if (balance > 1000) console.log("Greater Than 1000"), console.log("Test");;

// if (balance < 1000) {
//     console.log("Less Than 1000");
// } else if (balance < 1250) {
//     console.log("Less Than 1250");
// } else if (balance < 1750) {
//     console.log("Less Than 1750");
// } else{
//     console.log("Less Than 2500");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("You can buy the Course!!");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Successfully Logged In!!");
}