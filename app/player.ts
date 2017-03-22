export class Player {
	Name: string;
	FantasyPosition: string;
	FantasyPoints: number;
	Team: string;
	bench:boolean

	constructor(position){
		this.FantasyPosition = position;
	}
}