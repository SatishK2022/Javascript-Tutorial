function multBy5(num) {
    return num*5
}

multBy5.power = 2

console.log(multBy5(2));
console.log(multBy5.power);
console.log(multBy5.prototype);


function createUser(username, price) {
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.price}`);
}

const chai = new createUser("chai", 20);
const tea = new createUser("tea", 30)

chai.printMe()