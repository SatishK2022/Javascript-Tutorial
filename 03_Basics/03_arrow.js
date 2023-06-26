let user = {
    username: "Satish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to Lapdesk Services!!`);
        console.log(this); // This shows the current object
    }
}

// user.welcomeMessage()
// user.username = "Nagender"
// user.welcomeMessage()

// console.log(this);
// In node, `this` shows the empty object{}
// In browser, `this` shows window 

// ## Declaring function
// 1) First Way:-
// function chai(){
//     let username = "Satish"
//     console.log(this);
// }

// 2) Second Way:- Anonymous Function
// const chai = function (){
//     let username = "Satish"
//     console.log(this.username);
// }

// 3) Third Way:- Arrow Function
const chai = () => {
    let username = "Satish"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(2, 3));

// Returning an object
const addTwo = () => ({username: "Satish"})
console.log(addTwo());




