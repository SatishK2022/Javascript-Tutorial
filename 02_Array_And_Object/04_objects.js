// const tinderUser = new Object()  // Singleton Object
const tinderUser = {} // Non Singleton Object

tinderUser.id = "1a2b3c"
tinderUser.name = "Tommy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Satish",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // the {} ensures that the output will be an object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sat@gmail.com"
    },
    {
        id: 1,
        email: "sat@gmail.com"
    },
    {
        id: 1,
        email: "sat@gmail.com"
    },
    {
        id: 1,
        email: "sat@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns the keys of the object
console.log(Object.values(tinderUser)); // returns the values of the object
console.log(Object.entries(tinderUser)); // returns the keys and values as array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the property is there in the object or not
