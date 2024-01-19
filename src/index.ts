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
	constructor(public color: string){}
}

class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string){};

	print() {
		console.log(`${this.color}`);
		
	}
}

const Bike1 = new Bike('red');
const Jacket1 = new Jacket('Prada', 'black')