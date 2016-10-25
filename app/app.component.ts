import { Component } from '@angular/core';

import { Player } from './player';

const PLAYERS: Player[] = [
  { 
  	name: "Ryan Tannehill", 
  	fantasyPosition: 'QB',
  	fantasyPoints: 17.2, 
  	team: "MIA"
  },
  { 
  	name: "Adrian Peterson", 
  	fantasyPosition: 'RB',
  	fantasyPoints: 15.6, 
  	team: "MIN"
  },
  { 
  	name: "Antonio Brown", 
  	fantasyPosition: 'WR',
  	fantasyPoints: 17.7, 
  	team: "PIT"
  },
  { 
  	name: "Rob Gronkowski", 
  	fantasyPosition: 'TE', 
  	fantasyPoints: 14, 
  	team: "NE"
  },
  { 
  	name: "Seattle D/ST", 
  	fantasyPosition: 'D/ST',
  	fantasyPoints: 9.9, 
  	team: "SEA"
  },
  { 
  	name: "Matt Bryant", 
  	fantasyPosition: 'K', 
  	fantasyPoints: 8.4, 
  	team: "ATL"
  }
];

	@Component({
	  selector: 'my-app',
	  template:`
		<h1>{{title}}</h1>
		<h2>My Players</h2>
		<ul class="players">
			<li *ngFor="let player of players"
				[class.selected]="player === selectedPlayer"
				(click)="onSelect(player)">
				<span class="badge">{{player.name}}</span>
				{{player.fantasyPosition}}
			</li>
		</ul>
		<optimized [player]="selectedPlayer"></optimized>
		`,
		styles: [`
		  .selected {
		    background-color: #CFD8DC !important;
		    color: white;
		  }
		  .players {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
		  }
		  .players li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
		  }
		  .players li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
		  }
		  .players li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
		  }
		  .players .text {
		    position: relative;
		    top: -3px;
		  }
		  .players .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
		  }
		`]
	})

export class AppComponent {
  title = 'Fantasy Data Capstone';
  players = PLAYERS;
  selectedPlayer = Player;

  onSelect(player: Player): void {
  	this.selectedPlayer = Player;
  }
}

