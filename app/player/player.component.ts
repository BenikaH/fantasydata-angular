import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
    moduleId: module.id,
    selector: 'player',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.css']
})

export class PlayerComponent implements OnInit {

    @Input() position;

    @Input() index;

    players:Player[] = [];
    @Input() playerName:string;
    @Output() player = new EventEmitter();

    constructor(
        private PlayersService: PlayersService
    ){}

    ngOnInit(): void {
    }

    searchPlayer(){
        this.PlayersService.searchPlayers(this.playerName, this.position, this.position === 'BN')
            .then(players => this.players = players);
            console.log(this.players);
    }

    select(p) {
        this.players = [];
        this.playerName = p.name;
        p.bench = this.position === 'BN';
        this.player.emit(p);
    }
}