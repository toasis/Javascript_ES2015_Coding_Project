class School {
	constructor(name, numberOfStudents, level) {
		this._name = name;
		this._numberOfStudents = numberOfStudents;
		this._level = level;
	}
	get name() {
		return this._name;
	}
	get numberOfStudents() {
		return this._numberOfStudents;
	}
	get level() {
		return this._level;
	}

	set numberOfStudents(newNumberOfStudents) {
		if (typeof newNumberOfStudents === 'number') {
			 this._numberOfStudents = newNumberOfStudents;
		} else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
			//return 'Invalid input: numberOfStudents must be set to a Number.';
		}//此处setter运行有问题

	}
	quickFacts() {
		console.log(`${this.name} educates ${this.numberOfStudents} students, typically between the ages of
            ${this.level}.`);
	}
	static pickSubstituteTeacher(substituteTeachers = []) {
		let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
		return substituteTeachers[randomIndex];
	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, level, pickupPolicy) {
		super(name, numberOfStudents, level);
		this._pickupPolicy = pickupPolicy;
	}
	get pickupPolicy() {
		return this._pickupPolicy;
	}
}

class Middle extends School {
	constructor(name, numberOfStudents, level) {
		super(name, numberOfStudents, level);
	}

}
class HighSchool extends School {
	constructor(name, numberOfStudents, level, sportTeams) {
		super(name, numberOfStudents, level);
		this._sportTeams = sportTeams;
	}
	get sportTeams() {
		return this._sportTeams;
	}
}
// a instance of primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'primary', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
//a instance of High School
const alSmith = new HighSchool('Al E. Smith',415,'high',['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);

// a instance to test the setter of NumberOfStudent property
const blSmith = new HighSchool('Bl E. Smith','415','high',['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(blSmith);

const skySchool = new Middle('skyschool',300,'middle');
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(skySchool);
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
