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
  //  fantasyPoints;

  constructor(
    private PlayersService: PlayersService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.PlayersService.getPlayer(name)
        .then(player => this.player = player);
        console.log(this.player);

      // this.PlayersService.getPlayer(fantasyPoints)
      //   .then(fantasyPoints => this.fantasyPoints = fantasyPoints)
      //     console.log(this.fantasyPoints);
    });

    this.PlayersService.getPlayers()
      .then(players => this.players = players);
  }

  goBack(): void {
    this.location.back();
  }
}