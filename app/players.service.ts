import { Player } from './player';
import { PLAYERS } from './mock-players';

import { Injectable } from '@angular/core';

@Injectable()
export class PlayersService {
	getPlayers(): Promise<Player[]> {
		return Promise.resolve(PLAYERS);
		// return from server
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

	searchPlayers(name:string, position:string, bench:boolean): Promise<Player[]> {
		return this.getPlayers()
			.then(players => {
				if (bench) {
					return players;
				} else {
					return players.filter(
						player => player.name.startsWith(name)
						&& player.fantasyPosition === position
					)
				}
			});
	}

	getHighestPosition(position){
		let starters = this.roster.starter.filter((player)=> {
			return player.fantasyPosition === position;
		});
		let bench = this.roster.bench.filter((player) => {
			return player.fantasyPosition === position;
		});

		return starters.concat(bench).reduce(function(previous,current) {
			if(current.fantasyPoints > previous.fantasyPoints) {
				return current;
			} else {
				return previous;
			}
		});
	}

	Positions = {
		"QB":1,
		"RB":1,
		"WR":1,
		"TE":1,
		"FLEX":1,
		"DST":1,
		"K":1,
		"BN":1
	}

	roster = {
		starter:[],
		bench:[]
	}; //actual players on team

	setPlayer(player) {
		let position = player.fantasyPosition;
		let status = player.bench?this.roster.bench:this.roster.starter;
		let index = status.findIndex(function(p){
			return p.name === '' && (p.fantasyPosition === position || player.bench);
		});
		status[index] = player;
	}

	setPosition(position:string, number) {
		this.Positions[position] = number;
	}

	//returns position value from dropdown 
	getTotalPosition(position) {
		return this.Positions[position];
	}

	getAllPositions(){
		return this.Positions;
	}

	getRoster() {
		if(this.roster.starter.length == 0) {
			this.createRoster();
		}
		return this.roster;
	}

	rosterSize() {
		return this.Positions.QB + 
			this.Positions.RB +
			this.Positions.WR +
			this.Positions.FLEX +
			this.Positions.DST +
			this.Positions.K +
			this.Positions.BN;
	}

	createRoster() {
		Object.keys(this.Positions).forEach((position) =>{
			for(let i = 0; i < this.Positions[position]; i++) {
				if(position === "BN") {
					this.roster.bench.push({
						name:'',
						fantasyPosition:position,
						fantasyPoints: 0,
						team: '',
						bench:true
					});					
				} else {
					this.roster.starter.push({
						name:'',
						fantasyPosition:position,
						fantasyPoints:0,
						team:'',
						bench:false
					})
				}
			}			
		});
	}

	optimizeRoster() {
		// code to select highest player for each position on the starter
		console.log(this.roster);
		this.roster.starter.forEach(
			(player) => {
				let index = this.roster.bench.findIndex( (p) => {
					return p.fantasyPoints > player.fantasyPoints 
					&& p.fantasyPosition == player.fantasyPosition; 
				});
				if(index > -1) {
					player.bench = true;
					let benchplayer = this.roster.bench.splice(index, 1, player);
					benchplayer[0].bench = false; 
					this.roster.starter.splice(index, 1, benchplayer[0]);
				}
			}
		);
	}
}