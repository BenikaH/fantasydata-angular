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

//   `
//   <div *ngIf="player">
//     <h2>{{player.name}} details!</h2>
//     <div><label>id: </label>{{player.name}}</div>
//     <div>
//       <label>name: </label>
//       <input [(ngModel)]="player.name" placeholder="name"/>
//     </div>
//   </div>
// `
})

export class OptimizedComponent implements OnInit {
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