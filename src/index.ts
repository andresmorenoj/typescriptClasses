class Player {
	// readonly first: string;
	// readonly last: string;
	public readonly first: string;
	private last: string;
	public score = 0

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const Elton = new Player('Elton', 'Steele')