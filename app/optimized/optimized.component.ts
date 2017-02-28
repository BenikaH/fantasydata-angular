import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayersService } from '../players.service'

@Component({
  moduleId: module.id,
  selector: 'optimized',
  templateUrl: 'optimized.component.html',
  styleUrls: ['optimized.component.css'] 
})

export class OptimizedComponent implements OnInit {
  player: Player;
  players: Player[] = [];
  position;
  roster;
  highestQB;
  topQBPts;
  highestRB;
  topRBPts;
  highestWR;
  topWRPts;
  highestTE;
  topTEPts;
  highestK;
  topKPts
  highestDST;
  topDSTPts;
  total;


  constructor(
    private PlayersService: PlayersService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.PlayersService.getPlayer(name)
        .then(player => this.player = player);
    });

    this.PlayersService.getPlayers()
      .then(players => this.players = players);

    this.highestQB = this.PlayersService.getHighestPosition('QB');

    this.topQBPts = parseInt(this.highestQB.FantasyPoints);

    this.highestRB = this.PlayersService.getHighestPosition('RB');
    this.topRBPts = parseInt(this.highestRB.FantasyPoints);

    this.highestWR = this.PlayersService.getHighestPosition('WR');
    this.topWRPts = parseInt(this.highestWR.FantasyPoints);

    this.highestTE = this.PlayersService.getHighestPosition('TE');
    this.topTEPts = parseInt(this.highestTE.FantasyPoints);

    this.highestK = this.PlayersService.getHighestPosition('K');
    this.topKPts = parseInt(this.highestK.FantasyPoints);

    this.highestDST = this.PlayersService.getHighestPosition('DST');
    this.topDSTPts = parseInt(this.highestDST.FantasyPoints);

    this.total = this.topQBPts + this.topRBPts + this.topWRPts + this.topTEPts + this.topKPts + this.topDSTPts;
    console.log(this.total);
    
    this.roster = this.PlayersService.getRoster();
    this.PlayersService.optimizeRoster();
  }

  goBack(): void {
    this.location.back();
  }
}