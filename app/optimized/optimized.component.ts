import { Component, Input } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'optimized',
  template: `
  <div *ngIf="player">
    <h2>{{player.name}} details!</h2>
    <div><label>id: </label>{{player.name}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="player.name" placeholder="name"/>
    </div>
  </div>
`
})

export class OptimizedComponent {
	@Input() 
	player: Player;
}
