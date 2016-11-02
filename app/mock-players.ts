import { Player } from './player';
//import { Position } from './player';

export const PLAYERS: Player[] = [
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

//export const POSITIONS: Position[] = ["QB", "RB", "WR", "TE", "FLEX", "BN"];
/*
QB: 2 
RB: 2
WR: 3
TE: 1
FLEX: 1
BN: 5

var team = {
  QB: {
    max: 2,
    players:[{
      name:"Adam"
    }]
  },
  RB: {
    max: 3,
    players:[{
      name:"Dave"
    }]
  }
}

var structure = {
  QB:2,
  RB:2,
  WR:3
}

]
*/