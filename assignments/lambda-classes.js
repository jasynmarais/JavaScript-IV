// CODE here for your Lambda Classes
/*
#### Person
* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/
class Person {
	constructor(data) {
		this.name = data.name;
		this.age = data.age;
		this.location = data.location;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}
/*
#### Instructor
* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person {
	constructor(data) {
		super(data);
		this.specialty = data.specialty;
		this.favLanguage = data.favLanguage;
		this.catchPhrase = data.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
		return `${student.name} receives a perfect score on ${subject}`;
	}
	randGrade(student) { // stretch
		student.grade = Number(student.grade);
		if(student.grade >= 70) {
			console.log(`${student.name} just graduated!`);
			return `${student.name} just graduated!`;
		}
		student.grade = Number(student.grade) + Number(((Math.random() * 10) - 5).toFixed(0));
		console.log(`${student.name} has a ${student.grade}% grade`);
		return `${student.name} has a ${student.grade}% grade`;
	}
}
let grant = new Instructor({
	name: 'Grant', location: 'ZA', age: 38,
	favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Don't forget the homies`
});
let shaz = new Instructor({
	name: 'Shaz', location: 'US', age: 36,
	favLanguage: 'CSS', specialty: 'Front-end', catchPhrase: `One time shoe shine`
});
let arianna = new Instructor({
	name: 'Arianna', location: 'UK', age: 29,
	favLanguage: 'JavaScript', specialty: 'Back-end', catchPhrase: `Master is Sacred`
});
/*
#### Student
* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/
class Student extends Person {
	constructor(data) {
		super(data);
		this.className = data.className;
		this.favSubjects = data.favSubjects;
		this.previousBackground = data.previousBackground;
		
		this.grade = (Math.random() * 100).toFixed(0); // stretch
	}
	listSubjects() {
		console.log(`${this.name} favourite subjects: ${this.favSubjects}`);
		return `${this.name} favourite subjects: ${this.favSubjects}`;
	}
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}
let byron = new Student({
	name: 'Byron', location: 'ZA', age: 37,
	className: 'JS-I', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Advertising`
});
let sam = new Student({
	name: 'Sam', location: 'UK', age: 36,
	className: 'JS-II', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Film Editor`
});
let mojo = new Student({
	name: 'Mojo', location: 'US', age: 29,
	className: 'JS-III', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Rat Catcher`
});
/*
#### Project Manager
* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
	constructor(data) {
		super(data);
		this.gradClassName = data.gradClassName;
		this.favInstructor = data.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
		return `${this.name} favourite subjects: ${this.favSubjects}`;
	}
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}
let jasyn = new ProjectManager({
	name: 'Jasyn', location: 'ZA', age: 38,
	gradClassName: 'JS-I', 
	favInstructor: 'Gabriel', 
});
let lolo = new ProjectManager({
	name: 'Lolo', location: 'UK', age: 37,
	gradClassName: 'JS-II', 
	favInstructor: 'Gabriel', 
});
let babou = new ProjectManager({
	name: 'Babou', location: 'US', age: 27,
	gradClassName: 'JS-III', 
	favInstructor: 'Gabriel', 
});
