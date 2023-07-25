// let myName = 'Satish     ';

// console.log(myName.trueLength);


let myHeros = ['thor', 'spiderman']

let herePower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.satish = function(){
    console.log(`Satish is present in all objects`);
}

Array.prototype.heySatish = function(){
    console.log(`Satish says Hello`);
}

// herePower.satish()
// myHeros.satish()
// myHeros.heySatish()
// herePower.heySatish() // The object doesn't have the access because we have given this property only to the array.


// -------------------Inheritance-----------------------------

const User = {
    name: 'username',
    email: 'username@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.getPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode     ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()