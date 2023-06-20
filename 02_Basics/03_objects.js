// Singleton
// Object.create

// Object Literals
const mySym = Symbol("Key")

const user = {
    name: "Satish",
    "full name": "Satish Kumar",
    age: 19,
    [mySym]: "MyKey", // Symbol syntax
    location: "Delhi",
    email: "satish@gmail.com",
    isLoggedIn: false, 
    lastLoginDays: ["monday", "wednesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]); // Accessing a Symbol
// console.log(typeof user[mySym]);

// user.email = "satish123@microsoft.com" // Changing the value of email
// Object.freeze(user) // freeze the object no changes can be made after this statement
// user.email = "satish123@google.com" // Changing the value of email
// console.log(user);

user.greeting = function(){
    console.log("Hello Users");
}

user.greetingTwo = function(){
    console.log(`Hello Users, ${this.name}`);
}


// console.log(user.greeting());
console.log(user.greetingTwo());


