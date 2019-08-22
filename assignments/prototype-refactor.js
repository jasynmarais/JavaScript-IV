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
let me = new Person3('Jasyn', 38);
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
let car = new Car('2006', 'Opel');
console.log(car.drive(10), car.crash(), car.repair());


/* TASK 3 */
class Baby extends Person3 {
	constructor(name, age) {
		super(name, age);
	}
	play() {
		return `Baby played and said "Goo-goo ga-ga".`;
	}
}
let baby = new Baby('Arianna', 0.5);
console.log(baby.greet(), baby.play());


/* TASK 4 */
class Animal {
	constructor(name, type, wild, sound) {
		this.name = (name === null ? 'Unknown' : name);
		this.type = type;
		this.tamed = !wild;
		this.needName = false;
		this.sound = sound;
		this.edibles = {
			dog: ['dog food', 'mice', 'bones'],
			cat: ['cat food', 'fish', 'meat'],
			fox: ['rat', 'bird', 'frog'],
		};
	}
	talk() {
		return `My name is ${this.name} and I'm a ${this.type}. ${this.makeSound()}`;
	}
	makeSound() {
		return `${this.sound}!`;
	}
	eat(something) {
		let isFoodEdible = false;
		if (this.edibles.hasOwnProperty(this.type)) {
			isFoodEdible = this.edibles[this.type].includes(something);
		}
		return `${this.name} tried eating ${something}` + (isFoodEdible ? ' and liked it!' : ' but didn\'t like it.');
	}
	giveName(newName) {
		if (this.tamed && this.needName) {
			this.name = newName;
			this.needName = false;
			return `This ${this.type} is now called ${newName}.`;
		} else if (!this.tamed) {
			return `You can't give a name to this ${this.type} because it's not tamed!`;
		}
		return `This ${this.type} already has a name!`;
	}
	tame() {
		if (!this.tamed) {
			let chanceToTame = Math.random();
			if (chanceToTame > 0.5) {
				this.tamed = true;
				this.needName = true;
				return `You have successfully tamed this ${this.name} ${this.type}! Don't forget to give it a name!`;
			}
			return `You have failed to tame this ${this.name} ${this.type}.`;
		}
		return `${this.name} is already your pet!`;
	}
}
let aDog = new Animal('Rambo', 'dog', false, 'Woooooof');
let aCat = new Animal('Babou', 'cat', false, 'Miaawwww');
let aFox = new Animal(null, 'fox', true, 'Hoooooooooowl');
console.log(aDog.talk(), aCat.talk(), aFox.talk());
console.log(aDog.eat('cat food'), aCat.eat('cat food'), aFox.eat('cat food'));
console.log(aFox.tame(), aFox.giveName('Princess Carolyn'));