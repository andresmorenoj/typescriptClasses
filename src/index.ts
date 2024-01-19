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
	constructor(public first: string, public last: string, private score: number) {}

	private secretMethod(): void {
		console.log('secret message');
	}
}

const Elton = new Player('Elton', 'Steele', 100)