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
  positions;

  constructor(
    private router: Router,
    private playersService: PlayersService) {}

  ngOnInit(): void {
    this.positions = this.playersService.getAllPositions();
    console.log(this.positions);
  }

  onChange(event, position, value) {
    this.playersService.setPosition(position, value);
  }
}