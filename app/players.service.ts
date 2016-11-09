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

	searchPlayers(name:string, position:string): Promise<Player[]> {
		return this.getPlayers()
			.then(players => players.filter(
				player => player.name.startsWith(name) && player.fantasyPosition === position
			));
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
			fantasyPoints:15.5,
			team:"MIA"
		 }/*,
		 {
			name:'Aaron Rodgers',
			fantasyPosition:'QB',
			fantasyPoints:20.1,
			team:"GB"
		 },
		 {
			name:'Eli Manning',
			fantasyPosition:'QB',
			fantasyPoints:16.1,
			team:"NYG"
		 },
		 {
			name:'Tom Brady',
			fantasyPosition:'QB',
			fantasyPoints:21.3,
			team:"NE"
		 }*/],
		 "playersRB":[{
			name:'Jay Ajayi',
			fantasyPosition:'RB',
			fantasyPoints:12,
			team:"MIA"
		}, 
		{
			name:'Ezekiel Elliott',
			fantasyPosition:'RB',
			fantasyPoints:16.5,
			team:"DAL"
		}/*,
		{
			name:'LeVeon Bell',
			fantasyPosition:'RB',
			fantasyPoints:17.2,
			team:"PIT"
		},
		{
			name:'Demarco Murray',
			fantasyPosition:'RB',
			fantasyPoints:14.9,
			team:"TEN"			
		}*/],
		"playersWR":[{
			name:'Brandon Marshall',
			fantasyPosition:'WR',
			fantasyPoints:10.8,
			team:"NYJ"
		},
		{
			name:'Allen Robinson',
			fantasyPosition:'WR',
			fantasyPoints:12,
			team:"JAX"
		},
		{
			name:'Antonio Brown',
			fantasyPosition:'WR',
			fantasyPoints:16.3,
			team:"PIT"
		}/*,
		{
			name:'Julio Jones',
			fantasyPosition:'WR',
			fantasyPoints:12,
			team:"ATL"			
		}*/],
		"playersTE":[{
			name:'Jason Witten',
			fantasyPosition:'TE',
			fantasyPoints:8.3,
			team:"DAL"
		}/*,
		{
			name:'Travis Kelce',
			fantasyPosition:'TE',
			fantasyPoints:9,
			team:"KC"
		},
		{
			name:'Delanie Walker',
			fantasyPosition:'TE',
			fantasyPoints:8.6,
			team:"TEN"
		},
		{
			name:'Tyler Eifert',
			fantasyPosition:'TE',
			fantasyPoints:8.9,
			team:"CIN"			
		}*/],
		"playersFLEX":[{
			name:'Mark Ingram',
			fantasyPosition:'FLEX',
			fantasyPoints:7.5,
			team:"NO"
		}/*,
		{
			name:'Melvin Gordon',
			fantasyPosition:'FLEX',
			fantasyPoints:13.2,
			team:"SD"
		},
		{
			name:'Jeremy Maclin',
			fantasyPosition:'FLEX',
			fantasyPoints:7.5,
			team:"KC"
		},
		{
			name:'Doug Baldwin',
			fantasyPosition:'FLEX',
			fantasyPoints:8,
			team:"SEA"
		}*/],
		"playersK":[{
			name:'Dan Bailey',
			fantasyPosition:'K',
			fantasyPoints:9,
			team:"DAL"
		}/*,
		{
			name:'Dan Carpenter',
			fantasyPosition:'K',
			fantasyPoints:8.9,
			team:"BUF"
		},
		{
			name:'Adam Vinateri',
			fantasyPosition:'K',
			fantasyPoints:9.5,
			team:"IND"
		},
		{
			name:'Cairo Santos',
			fantasyPosition:'K',
			fantasyPoints:7.5,
			team:"KC"
		}*/],
		"playersDST":[{
			name:'Miami DST',
			fantasyPosition:'DST',
			fantasyPoints:6.1,
			team:"MIA"
		}/*,
		{
			name:'Pittsburgh DST',
			fantasyPosition:'DST',
			fantasyPoints:6.5,
			team:"PIT"
		},
		{
			name:'Oakland DST',
			fantasyPosition:'DST',
			fantasyPoints:5.9,
			team:"OAK"
		},
		{
			name:'Vikings DST',
			fantasyPosition:'DST',
			fantasyPoints:10,
			team:"MIN"
		}*/],
		"playersBN":[{
			name:'Jarvis Landry',
			fantasyPosition:'BN',
			fantasyPoints:7,
			team:"MIA"
		},
		{
			name:'Mike Wallace',
			fantasyPosition:'BN',
			fantasyPoints:6.3,
			team:"BAL"
		},
		{
			name:'Derrick Henry',
			fantasyPosition:'BN',
			fantasyPoints:4.9,
			team:"TEN"
		},
		{
			name:'Blake Bortles',
			fantasyPosition:'BN',
			fantasyPoints:16.7,
			team:"JAX"		
		}]
	}

	setPosition(position:string, number) {
		this.Positions[position] = number;
		this.Positions.playersQB.push(new Player(position));
	}

	//returns position value from dropdown 
	getTotalPosition(position) {
		return this.Positions[position];
	}

	getAllPositions(){
		return this.Positions;
	}
}
