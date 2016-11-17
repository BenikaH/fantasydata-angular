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
    /**
     * This position field is passed into the
     * component from its parent component. Look for
     * the <player position="QB"> in the parent.
     */
    @Input() position;

    @Input() index;

    /**
     * This field should probably represent the actual player
     * that was selected rather than just the name
     */
    players:Player[] = [];
    @Input() playerName:string;
    @Output() player = new EventEmitter();

    constructor(
        private PlayersService: PlayersService
    ){}

    ngOnInit(): void {
    }

    searchPlayer(){
        this.PlayersService.searchPlayers(this.playerName, this.position)
            .then(players => this.players = players);
            console.log(this.players);
    }

    select(p) {
        this.players = [];
        this.playerName = p.name;
        this.player.emit(p);
    }
}