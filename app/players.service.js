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
var _this = this;
var player_1 = require('./player');
require("rxjs/add/operator/toPromise");
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var PlayersService = (function () {
    function PlayersService(http) {
        this.http = http;
    }
    PlayersService.prototype.getPlayers = function () {
        //return Promise.resolve(PLAYERS);
        return this.http.get('https://mysterious-falls-52077.herokuapp.com/profile')
            .toPromise()
            .then(function (response) {
            return response.json().body;
        });
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
handleError(err);
{
    console.log(err);
}
getPlayersSlowly();
Promise < player_1.Player[] > {
    return: new Promise(function (resolve) {
        return setTimeout(resolve, 2000);
    }) // delay 2 secs
        .then(function () { return _this.getPlayers(); })
};
getPlayer(name, string);
Promise < player_1.Player > {
    return: this.getPlayers()
        .then(function (players) { return players.find(function (player) { return player.name === name; }); })
};
searchPlayers(name, string, position, string, bench, boolean);
Promise < player_1.Player[] > {
    return: this.getPlayers()
        .then(function (players) {
        if (bench) {
            return players;
        }
        else {
            return players.filter(function (player) {
                return function (player) { return player.Name.startsWith(name)
                    && player.fantasyPosition === position; };
            });
        }
    })
};
getHighestPosition(position);
{
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
}
Positions = {
    "QB": 1,
    "RB": 1,
    "WR": 1,
    "TE": 1,
    "FLEX": 1,
    "DST": 1,
    "K": 1,
    "BN": 1
};
roster = {
    starter: [],
    bench: []
};
setPlayer(player);
{
    var position_1 = player.fantasyPosition;
    var status_1 = player.bench ? this.roster.bench : this.roster.starter;
    var index = status_1.findIndex(function (p) {
        return p.name === '' && (p.fantasyPosition === position_1 || player.bench);
    });
    if (index > -1) {
        status_1[index] = player;
    }
}
setPosition(position, string, number);
{
    this.Positions[position] = number;
}
//returns position value from dropdown 
getTotalPosition(position);
{
    return this.Positions[position];
}
getAllPositions();
{
    return this.Positions;
}
getRoster();
{
    if (this.roster.starter.length == 0) {
        this.createRoster();
    }
    return this.roster;
}
rosterSize();
{
    return this.Positions.QB +
        this.Positions.RB +
        this.Positions.WR +
        this.Positions.TE +
        this.Positions.FLEX +
        this.Positions.DST +
        this.Positions.K +
        this.Positions.BN;
}
createRoster();
{
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
}
optimizeRoster();
{
    this.roster.starter.forEach(function (player, idx) {
        var index = _this.roster.bench.findIndex(function (p) {
            return p.fantasyPoints > player.fantasyPoints
                && p.fantasyPosition == player.fantasyPosition;
        });
        if (index > -1) {
            player.bench = true;
            var benchplayer = _this.roster.bench.splice(index, 1, player);
            benchplayer[0].bench = false;
            _this.roster.starter.splice(idx, 1, benchplayer[0]);
        }
    });
}
//# sourceMappingURL=players.service.js.map