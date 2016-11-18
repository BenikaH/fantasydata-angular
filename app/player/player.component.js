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
        this.players = [];
        this.player = new core_1.EventEmitter();
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.searchPlayer = function () {
        var _this = this;
        this.PlayersService.searchPlayers(this.playerName, this.position)
            .then(function (players) { return _this.players = players; });
        console.log(this.players);
    };
    PlayerComponent.prototype.select = function (p) {
        this.players = [];
        this.playerName = p.name;
        this.player.emit(p);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlayerComponent.prototype, "playerName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlayerComponent.prototype, "player", void 0);
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