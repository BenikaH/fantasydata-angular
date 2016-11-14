import { Component, OnInit, Input } from '@angular/core';
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

    /**
     * This field should probably represent the actual player
     * that was selected rather than just the name
     */
    player;
    players:Player[] = [];
    playerName:string;

    constructor(
        private PlayersService: PlayersService
    ){}

    ngOnInit(): void {
    }

    searchPlayer(){
        this.PlayersService.searchPlayers(this.playerName, this.position)
            .then(players => this.players = players);
    }

    select(p) {
        this.player = p;
        this.players = [];
        this.playerName = p.name;
    }
}