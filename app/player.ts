export class Player {
	name: string;
	fantasyPosition: string;
	fantasyPoints: number;
	team: string;
	bench:boolean

	constructor(position){
		this.fantasyPosition = position;
	}
}