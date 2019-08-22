/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/* TASK 1 */
class Person3 { 
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.stomach = [];
	}
	greet() {
		return `My name is ${this.name} and I'm ${this.age} years old.`;
	}
	eat(edible) {
		this.stomach.push(edible);
		return `${this.name} just ate ${edible}.`;
	}
	poop() {
		this.stomach = [];
		return `Stomach is empty now.`;
	}
}
var me = new Person3('Jasyn', 38);
console.log(me.greet(), me.eat('Biltong'), me.poop());


/* TASK 2 */
class Car {
	constructor(model, make) {
		this.model = model;
		this.make = make;
		this.odometer = 0;
		this.canDrive = true;
	}
	drive(distance) {
		if (this.canDrive) {
			this.odometer += Number(distance);
			return `Drove ${distance} miles. Odometer: ${this.odometer}.`;
		}
		return `I crashed at ${this.odometer} miles!`;
	}
	crash() {
		this.canDrive = false;
		return `I just crashed.`;
	}
	repair() {
		this.canDrive = true;
		return `I've been repaired.`;
	}
}
var car = new Car('2006', 'Opel');
console.log(car.drive(10), car.crash(), car.repair());


