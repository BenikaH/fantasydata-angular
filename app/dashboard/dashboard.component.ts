import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  players: Player[] = [];

  constructor(
    private router: Router,
    private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers()
      .then(players => this.players = players.slice(1, 5));
  }
//	take a look at this
  gotoDetail(player: Player): void {
    let link = ['/dashboard', player.name];
    this.router.navigate(link);
  }
}