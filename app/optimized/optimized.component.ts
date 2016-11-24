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
  highestQB;
  highestRB;
  highestWR;
  highestTE;
  highestK;
  highestDST;
  total;
  topQBPts;
  topRBPts;
  topWRPts;
  topTEPts;
  topKPts;
  topDSTPts;

  roster;

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
    this.topQBPts = parseInt(this.highestQB.fantasyPoints);

    this.highestRB = this.PlayersService.getHighestPosition('RB');
    this.topRBPts = parseInt(this.highestRB.fantasyPoints);

    this.highestWR = this.PlayersService.getHighestPosition('WR');
    this.topWRPts = parseInt(this.highestWR.fantasyPoints);

    this.highestTE = this.PlayersService.getHighestPosition('TE');
    this.topTEPts = parseInt(this.highestTE.fantasyPoints);

    this.highestK = this.PlayersService.getHighestPosition('K');
    this.topKPts = parseInt(this.highestK.fantasyPoints);

    this.highestDST = this.PlayersService.getHighestPosition('DST');
    this.topDSTPts = parseInt(this.highestDST.fantasyPoints);

    this.total = this.topQBPts + this.topRBPts + this.topWRPts + this.topTEPts + this.topKPts + this.topDSTPts;
    console.log(this.total);

    this.PlayersService.optimizeRoster();
    this.roster = this.PlayersService.getRoster();

  }

  goBack(): void {
    this.location.back();
  }
}