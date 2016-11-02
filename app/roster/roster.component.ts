import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  moduleId: module.id,
  selector: 'roster',
  templateUrl: 'roster.component.html',
  styleUrls: ['roster.component.css'] 
})

export class RosterComponent implements OnInit {
  player: Player;

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
  }

  goBack(): void {
    this.location.back();
  }
}