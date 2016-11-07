import { Player } from './player';
import { PLAYERS } from './mock-players';

import { Injectable } from '@angular/core';

@Injectable()
export class PlayersService {
	getPlayers(): Promise<Player[]> {
		return Promise.resolve(PLAYERS);
	} 

	getPlayersSlowly(): Promise<Player[]> {
		return new Promise<Player[]>(resolve => 
			setTimeout(resolve, 2000)) // delay 2 secs
			.then(() => this.getPlayers());
	}

	getPlayer(name:string): Promise<Player> {
		return this.getPlayers()
			.then(players => players.find(player => player.name === name));
	}

	searchPlayers(name:string): Promise<Player[]> {
		return this.getPlayers()
			.then(players => players.filter(player => player.name.startsWith(name)));
	}

	Positions = {
		"QB":1,
		"RB":1,
		"WR":1,
		"TE":1,
		"FLEX":1,
		"DST":1,
		"K":1,
		"BN":1,
		"playersQB":[{
			name:'Ryan Tannehill',
			fantasyPosition:'QB',
			fantasyPoints:10,
			team:"MIA"
		 }],
		 "playersRB":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		 }],
		"playersWR":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}],
		"playersTE":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}],
		"playersFLEX":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}],
		"playersK":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}],
		"playersDST":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}],
		"playersBN":[{
			name:'M',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}]
	}

	setPosition(position:string, number) {
		this.Positions[position] = number;
		this.Positions.playersQB.push(new Player(position));
	}

	//returns position value from dropdown 
	getTotalPosition(position) {
		return this.Positions[position];
		//console.log(this.Positions[position]);
	}

	getAllPositions(){
		return this.Positions;
	}
}
