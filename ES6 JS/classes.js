// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);

class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car1("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");
