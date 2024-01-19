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
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("secret message");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }

    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

const Elton = new Player("Elton", "Steele", 100);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  // color = 'red'
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color}`);
  }
}

const Bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {};

	abstract getPay(): number;
	greet() {
		console.log('Hello!');
	}
}

class FullTimeEmployee extends Employee {
	constructor(public first: string, public last: string, private salary: number){
		super(first, last);
	};
	

	getPay(): number {
		return this.salary;
	}
};

class PartTimeEmployee extends Employee {
	constructor(public first: string, public last: string, private houralyRate: number, private hoursWork: number){
		super(first, last);
	};
	getPay(): number {
		return this.houralyRate * this.hoursWork;
	}
};

const Bettry = new FullTimeEmployee('Betty', 'White', 40000);
const Bill = new PartTimeEmployee('Bill', 'Billerson', 30, 80);

// Employee
// 	- FullTimeEmployee
// 	- PartTimeEmployee
