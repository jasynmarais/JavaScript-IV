/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}
Person.prototype.greet = function () {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
};
Person.prototype.eat = function (food) {
    this.stomach.push(food);
    return `${this.name} just ate ${food}.`;
};
Person.prototype.poop = function () {
    this.stomach = [];
    return `I pooped and now my stomach is empty.`;
};

const me = new Person('Billy Bob', 18);

console.log(me.greet(), me.eat('KFC'), me.poop());


function Car(model, make) {
    this.model = model;
    this.make = make;
    this.odometer = 0;
    this.canDrive = true;
  this.tank = 0;
}
Car.prototype.drive = function (distance) {
    if (this.canDrive) {
              this.odometer += Number(distance);
              return `I drove ${distance} miles. Odometer: ${this.odometer} miles.`;
}
    return `I crashed at ${this.odometer} miles!`;
};
Car.prototype.crash = function () {
    this.canDrive = false;
    return `I just crashed.`;
};
Car.prototype.repair = function () {
    this.canDrive = true;
    return `I've been repaired.`;
};

const car = new Car('2006', 'Opel');

console.log(car.drive(25), car.crash(), car.repair());


function Baby(name, age) {
    Person.call(this, name, age);
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
return `Baby played and said "Goo-goo ga-ga".`;
};

const baby = new Baby('Arianna', 0.5);

console.log(baby.greet(), baby.play());