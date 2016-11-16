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
      console.log(this.highestQB);

    this.highestRB = this.PlayersService.getHighestRB();
  }

  goBack(): void {
    this.location.back();
  }
}