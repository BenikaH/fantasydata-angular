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
  positions;
  player: Player[] = [];
  roster;

  constructor(
    private PlayersService: PlayersService,
    private route: ActivatedRoute,
    private location: Location,
  ){}

  ngOnInit(): void {
    this.positions = this.PlayersService.getAllPositions();
    this.roster = this.PlayersService.getRoster();
  }

  goBack(): void {
    this.location.back();
  }

  setPlayer(p):void {
    console.log(p);
    this.PlayersService.setPlayer(p);
  }
}
