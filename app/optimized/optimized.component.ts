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

    this.highestQB = this.PlayersService.getHighestQB();
    this.topQBPts = parseInt(this.highestQB.fantasyPoints);

    this.highestRB = this.PlayersService.getHighestRB();
    this.topRBPts = parseInt(this.highestRB.fantasyPoints);

    this.highestWR = this.PlayersService.getHighestWR();
    this.topWRPts = parseInt(this.highestWR.fantasyPoints);

    this.highestTE = this.PlayersService.getHighestTE();
    this.topTEPts = parseInt(this.highestTE.fantasyPoints);

    this.highestK = this.PlayersService.getHighestK();
    this.topKPts = parseInt(this.highestK.fantasyPoints);

    this.highestDST = this.PlayersService.getHighestDST();
    this.topDSTPts = parseInt(this.highestDST.fantasyPoints);

    this.total = this.topQBPts + this.topRBPts + this.topWRPts + this.topTEPts + this.topKPts + this.topDSTPts;
    console.log(this.total);
  }

  goBack(): void {
    this.location.back();
  }
}