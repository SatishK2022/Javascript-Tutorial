// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // var is accessed outside the scope as well which is not a good thing


function one(){
    const username = "Satish"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // we cannot acces the child variable(bacche ki ice-cream)

    two() // Execute the two()
}

// one()  // Execute the one()

if(true){
    const username = "Satish"
    if (username === "Satish") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); // Can't access the child variable
}

// console.log(username);  // Can't access a variable declared inside a block


// ****************************** Interesting ****************************************

console.log(addOne(5)); // we can run a function before decleration as well
function addOne(num){
    return num + 1
}


console.log(addTwo(8)); // When we store the function in a variable which is `function expression` so we cannot access it before decleration
const addTwo = function(num){
    return num + 2
}