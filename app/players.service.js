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
        this.Positions = {
            "QB": 1,
            "RB": 1,
            "WR": 1,
            "TE": 1,
            "FLEX": 1,
            "DST": 1,
            "K": 1,
            "BN": 1
        };
        this.roster = {
            starter: [],
            bench: []
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
    PlayersService.prototype.searchPlayers = function (name, position) {
        return this.getPlayers()
            .then(function (players) { return players.filter(function (player) { return player.name.startsWith(name) && player.fantasyPosition === position; }); });
    };
    PlayersService.prototype.getHighestPosition = function (position) {
        var starters = this.roster.starter.filter(function (player) {
            return player.fantasyPosition === position;
        });
        var bench = this.roster.bench.filter(function (player) {
            return player.fantasyPosition === position;
        });
        return starters.concat(bench).reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.setPlayer = function (player) {
        var position = player.fantasyPosition;
        var status = player.bench ? this.roster.bench : this.roster.starter;
        var index = status.findIndex(function (p) {
            return p.name === '' && p.position === position;
        });
        status[index] = player;
    };
    PlayersService.prototype.setPosition = function (position, number) {
        this.Positions[position] = number;
        // var player = {
        // 	name:'',
        // 	fantasyPosition:position,
        // 	fantasyPoints:0,
        // 	team:''
        // }
        // this.Positions['players' + position] = [];
        // for(var i = 0; i < number; i++) {
        // 	this.Positions['players' + position].push(player);
        // }
    };
    //returns position value from dropdown 
    PlayersService.prototype.getTotalPosition = function (position) {
        return this.Positions[position];
    };
    PlayersService.prototype.getAllPositions = function () {
        return this.Positions;
    };
    PlayersService.prototype.getRoster = function () {
        if (this.roster.starter.length == 0) {
            this.createRoster();
        }
        return this.roster;
    };
    PlayersService.prototype.rosterSize = function () {
        return this.Positions.QB +
            this.Positions.RB +
            this.Positions.WR +
            this.Positions.TE +
            this.Positions.FLEX +
            this.Positions.DST +
            this.Positions.K +
            this.Positions.BN;
    };
    PlayersService.prototype.createRoster = function () {
        var _this = this;
        Object.keys(this.Positions).forEach(function (position) {
            for (var i = 0; i < _this.Positions[position]; i++) {
                if (position === "BN") {
                    _this.roster.bench.push({
                        name: '',
                        fantasyPosition: position,
                        fantasyPoints: 0,
                        team: '',
                        bench: true
                    });
                }
                else {
                    _this.roster.starter.push({
                        name: '',
                        fantasyPosition: position,
                        fantasyPoints: 0,
                        team: '',
                        bench: false
                    });
                }
            }
        });
    };
    PlayersService.prototype.optimizeRoster = function () {
        //code to select highest player for each position on the starter
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map