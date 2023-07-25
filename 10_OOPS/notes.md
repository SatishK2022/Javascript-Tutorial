# Javascript and Classes

## OOP

## Object
- Collection of properties and methods
- toLowerCase()

## Why use OOP?
In object-oriented programming (OOP), abstraction, inheritance, encapsulation, and polymorphism are four fundamental concepts that help organize and structure code, making it more modular, maintainable, and scalable.

## Parts of OOP
Object Literals

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## Object-Oriented Programming Concepts in JavaScript

### Abstraction
Abstraction is the process of hiding the implementation details of an object and exposing only relevant information or functionalities to the outside world. It allows us to focus on what an object does rather than how it does it.

#### Example:
```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Abstract class cannot be instantiated.");
    }
  }

  // Abstract method - only the signature is defined, not the implementation
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Implementation of the abstract method for calculating the area of a circle
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483

```

### Inheritance
Inheritance is a mechanism that allows one class (subclass) to inherit properties and methods from another class (superclass). It promotes code reuse and establishes a hierarchical relationship between classes.

#### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```

### Encapsulation
Encapsulation is the concept of bundling data (properties) and methods that operate on that data within a single unit, usually a class. It allows controlling the access to the data by providing public and private access modifiers.

#### Example:
```javascript
class Person {
  constructor(name, age) {
    this._name = name; // Using '_' convention to indicate 'name' as a private property
    this._age = age;
  }

  // Public method to get the person's name
  getName() {
    return this._name;
  }

  // Public method to set the person's age
  setAge(age) {
    if (age >= 0) {
      this._age = age;
    }
  }

  // Private method (convention, not enforced by JavaScript)
  _getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._age;
  }
}

const person = new Person("John", 30);
console.log(person.getName()); // Output: John
person.setAge(32);
console.log(person._getBirthYear()); // Output: 1991 (depending on the current year)
```

### Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables the use of a single interface to represent different types of objects, providing flexibility and extensibility to the code.

#### Example:
```javascript
class Bird {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a chirping sound.`);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} barks loudly.`);
  }
}

function animalSounds(animal) {
  animal.makeSound();
}

const bird = new Bird("Sparrow");
const dog = new Dog("Buddy");

animalSounds(bird); // Output: Sparrow makes a chirping sound.
animalSounds(dog); // Output: Buddy barks loudly.
```