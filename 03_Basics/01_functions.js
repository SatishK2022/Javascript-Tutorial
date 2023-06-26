// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function userLoginMessage(username = "User"){ // Here we have assigned a default username "User"
    if(!username){
        console.log("Please Enter Your Username!!");
        return
    }
    return `${username} just logged in!!`
}

// console.log(userLoginMessage("Satish"));
// console.log(userLoginMessage());


function calculateCartPrice(val1, val2, ...num1){ // Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 100)); // Here num1 will only return the values after val1 and val2

const user = {
    username: "Satish",
    prices: "500"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)  // Here the price will be undefined as price is not thete in the object
handleObject({
    username: "Nagu", 
    price: 399
})

const myArray = [20, 40, 60, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([30, 50, 20, 80]));