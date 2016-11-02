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
var mock_players_1 = require('./mock-players');
var core_1 = require('@angular/core');
var PlayersService = (function () {
    function PlayersService() {
        this.PositionArr = ["QB", "RB"];
        this.Positions = {
            "QB": 0,
            "RB": 0,
            "WR": 0,
            "TE": 0,
            "FLEX": 0,
            "DST": 0,
            "K": 0,
            "BN": 0
        };
    }
    PlayersService.prototype.getPlayers = function () {
        return Promise.resolve(mock_players_1.PLAYERS);
    };
    PlayersService.prototype.getPlayersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 secs
            .then(function () { return _this.getPlayers(); });
    };
    PlayersService.prototype.getPlayer = function (name) {
        return this.getPlayers()
            .then(function (players) { return players.find(function (player) { return player.name === name; }); });
    };
    PlayersService.prototype.setPosition = function (position, number) {
        this.Positions[position] = number;
        console.log(number);
    };
    //returns position value from dropdown 
    PlayersService.prototype.getTotalPosition = function (position) {
        return this.Positions[position];
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map