"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var players_service_1 = require('../players.service');
var PlayerComponent = (function () {
    function PlayerComponent(PlayersService) {
        this.PlayersService = PlayersService;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    /**
     * You have to do something more interesting with this results
     *
     */
    PlayerComponent.prototype.searchPlayer = function () {
        this.PlayersService.searchPlayers(this.player)
            .then(function (players) { return console.log(players); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerComponent.prototype, "position", void 0);
    PlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player',
            templateUrl: 'player.component.html',
            styleUrls: ['player.component.css']
        }), 
        __metadata('design:paramtypes', [players_service_1.PlayersService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map