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
}
