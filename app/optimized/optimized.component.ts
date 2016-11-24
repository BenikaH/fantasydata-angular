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
    this.topQBPts = Math.round(this.highestQB.fantasyPoints * 10) / 10;
    console.log(this.topQBPts);

    this.highestRB = this.PlayersService.getHighestPosition('RB');
    this.topRBPts = Math.round(this.highestRB.fantasyPoints * 10) / 10;

    this.highestWR = this.PlayersService.getHighestPosition('WR');
    this.topWRPts = Math.round(this.highestWR.fantasyPoints * 10) / 10;

    this.highestTE = this.PlayersService.getHighestPosition('TE');
    this.topTEPts = Math.round(this.highestTE.fantasyPoints * 10) / 10;

    this.highestK = this.PlayersService.getHighestPosition('K');
    this.topKPts = Math.round(this.highestK.fantasyPoints * 10) / 10;

    this.highestDST = this.PlayersService.getHighestPosition('DST');
    this.topDSTPts = Math.round(this.highestDST.fantasyPoints * 10) / 10;

    this.total = this.topQBPts + this.topRBPts + this.topWRPts + this.topTEPts + this.topKPts + this.topDSTPts;
    console.log(this.total);

    this.PlayersService.optimizeRoster();
    this.roster = this.PlayersService.getRoster();
  }

  goBack(): void {
    this.location.back();
  }
}