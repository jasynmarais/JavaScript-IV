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
		this.stomach = []; // this.stomach.length = 0;
		return `Stomach is empty now.`;
	}
}
var me = new Person3('Jasyn', 38);
console.log(me.greet(), me.eat('Rice'), me.poop());