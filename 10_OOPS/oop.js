// Object Literal

const user = {
    username: "Satish",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`); // prints the current `username` of current object
        console.log(this); // prints the current object
    }
}

// console.log(user.username);
// console.log(user['username']);
// console.log(user.getUserDetails());
// console.log(this); // Prints `{}`


// Constructor Function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    // return this; // It by default return the object
}

const userOne = new User('Satish', 10, true)
const userTwo = new User('Dumy', 11, false)
console.log(userOne);
console.log(userTwo.constructor); 

// `new` keyword:-
// 1. It creates a new object
// 2. It creates the constructor
// 3. Inject all the arguments in it
// 4. Return the object