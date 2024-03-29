"use strict";
// class Player {
// 	// readonly first: string;
// 	// readonly last: string;
// 	public readonly first: string;
// 	public readonly last: string;
// 	public score = 0
// 	constructor(first: string, last: string) {
// 		this.first = first;
// 		this.last = last;
// 	}
// 	private secretMethod(): void {
// 		console.log('secret message');
// 	}
// }
// const Elton = new Player('Elton', 'Steele')
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret message");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999;
    }
}
const Elton = new Player("Elton", "Steele", 100);
class Bike {
    // color = 'red'
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color}`);
    }
}
const Bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "black");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    ;
    greet() {
        console.log('Hello!');
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    ;
    getPay() {
        return this.salary;
    }
}
;
class PartTimeEmployee extends Employee {
    constructor(first, last, houralyRate, hoursWork) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.houralyRate = houralyRate;
        this.hoursWork = hoursWork;
    }
    ;
    getPay() {
        return this.houralyRate * this.hoursWork;
    }
}
;
const Bettry = new FullTimeEmployee('Betty', 'White', 40000);
const Bill = new PartTimeEmployee('Bill', 'Billerson', 30, 80);
// Employee
// 	- FullTimeEmployee
// 	- PartTimeEmployee
