import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../players.service';

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

    constructor(
        private PlayersService: PlayersService
    ){}

    ngOnInit(): void {
    }

    /**
     * You have to do something more interesting with this results
     *
     */
    searchPlayer(){
        this.PlayersService.searchPlayers(this.player)
            .then(players => console.log(players));
    }

}