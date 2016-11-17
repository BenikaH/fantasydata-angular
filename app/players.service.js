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
            "BN": 1,
            "playersQB": [{
                    name: 'Ryan Tannehill',
                    fantasyPosition: 'QB',
                    fantasyPoints: "15.5",
                    team: "MIA"
                } /*,
                {
                   name:'Aaron Rodgers',
                   fantasyPosition:'QB',
                   fantasyPoints:20.1,
                   team:"GB"
                },
                {
                   name:'Eli Manning',
                   fantasyPosition:'QB',
                   fantasyPoints:16.1,
                   team:"NYG"
                },
                {
                   name:'Tom Brady',
                   fantasyPosition:'QB',
                   fantasyPoints:21.3,
                   team:"NE"
                }*/
            ],
            "playersRB": [{
                    name: 'Jay Ajayi',
                    fantasyPosition: 'RB',
                    fantasyPoints: 12,
                    team: "MIA"
                } /*,
                {
                    name:'Ezekiel Elliott',
                    fantasyPosition:'RB',
                    fantasyPoints:16.5,
                    team:"DAL"
                },
                {
                    name:'LeVeon Bell',
                    fantasyPosition:'RB',
                    fantasyPoints:17.2,
                    team:"PIT"
                },
                {
                    name:'Demarco Murray',
                    fantasyPosition:'RB',
                    fantasyPoints:14.9,
                    team:"TEN"
                }*/
            ],
            "playersWR": [{
                    name: 'Brandon Marshall',
                    fantasyPosition: 'WR',
                    fantasyPoints: 10.8,
                    team: "NYJ"
                },
                {
                    name: 'Allen Robinson',
                    fantasyPosition: 'WR',
                    fantasyPoints: 12,
                    team: "JAX"
                },
                {
                    name: 'Antonio Brown',
                    fantasyPosition: 'WR',
                    fantasyPoints: 16.3,
                    team: "PIT"
                },
                {
                    name: 'Julio Jones',
                    fantasyPosition: 'WR',
                    fantasyPoints: 12,
                    team: "ATL"
                }],
            "playersTE": [{
                    name: 'Jason Witten',
                    fantasyPosition: 'TE',
                    fantasyPoints: 8.3,
                    team: "DAL",
                } /*,
                {
                    name:'Travis Kelce',
                    fantasyPosition:'TE',
                    fantasyPoints:9,
                    team:"KC"
                },
                {
                    name:'Delanie Walker',
                    fantasyPosition:'TE',
                    fantasyPoints:8.6,
                    team:"TEN"
                },
                {
                    name:'Tyler Eifert',
                    fantasyPosition:'TE',
                    fantasyPoints:8.9,
                    team:"CIN"
                }*/
            ],
            "playersFlex": [{
                    name: 'Mark Ingram',
                    fantasyPosition: 'FLEX',
                    fantasyPoints: 7.5,
                    team: "NO"
                } /*,
                {
                    name:'Melvin Gordon',
                    fantasyPosition:'FLEX',
                    fantasyPoints:13.2,
                    team:"SD"
                },
                {
                    name:'Jeremy Maclin',
                    fantasyPosition:'FLEX',
                    fantasyPoints:7.5,
                    team:"KC"
                },
                {
                    name:'Doug Baldwin',
                    fantasyPosition:'FLEX',
                    fantasyPoints:8,
                    team:"SEA"
                }*/
            ],
            "playersK": [{
                    name: 'Dan Bailey',
                    fantasyPosition: 'K',
                    fantasyPoints: 9,
                    team: "DAL"
                } /*,
                {
                    name:'Dan Carpenter',
                    fantasyPosition:'K',
                    fantasyPoints:8.9,
                    team:"BUF"
                },
                {
                    name:'Adam Vinateri',
                    fantasyPosition:'K',
                    fantasyPoints:9.5,
                    team:"IND"
                },
                {
                    name:'Cairo Santos',
                    fantasyPosition:'K',
                    fantasyPoints:7.5,
                    team:"KC"
                }*/
            ],
            "playersDST": [{
                    name: 'Miami DST',
                    fantasyPosition: 'DST',
                    fantasyPoints: 6.1,
                    team: "MIA"
                } /*,
                {
                    name:'Pittsburgh DST',
                    fantasyPosition:'DST',
                    fantasyPoints:6.5,
                    team:"PIT"
                },
                {
                    name:'Oakland DST',
                    fantasyPosition:'DST',
                    fantasyPoints:5.9,
                    team:"OAK"
                },
                {
                    name:'Vikings DST',
                    fantasyPosition:'DST',
                    fantasyPoints:10,
                    team:"MIN"
                }*/
            ],
            "playersBench": [{
                    name: 'Jarvis Landry',
                    fantasyPosition: 'BN',
                    fantasyPoints: 7,
                    team: "MIA"
                } /*,
                {
                    name:'Mike Wallace',
                    fantasyPosition:'BN',
                    fantasyPoints:6.3,
                    team:"BAL"
                },
                {
                    name:'Derrick Henry',
                    fantasyPosition:'BN',
                    fantasyPoints:4.9,
                    team:"TEN"
                },
                {
                    name:'Blake Bortles',
                    fantasyPosition:'BN',
                    fantasyPoints:16.7,
                    team:"JAX"
                }*/
            ]
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
    PlayersService.prototype.getHighestQB = function () {
        return this.Positions.playersQB.reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.getHighestRB = function () {
        return this.Positions.playersRB.reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.getHighestWR = function () {
        return this.Positions.playersWR.reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.getHighestTE = function () {
        return this.Positions.playersTE.reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.getHighestK = function () {
        return this.Positions.playersK.reduce(function (previous, current) {
            if (current.fantasyPoints > previous.fantasyPoints) {
                return current;
            }
            else {
                return previous;
            }
        });
    };
    PlayersService.prototype.getHighestDST = function () {
        return this.Positions.playersDST.reduce(function (previous, current) {
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
        delete player.index;
        var index = this.Positions['players' + position].findIndex(function (p) {
            return p.name === '';
        });
        this.Positions['players' + position][index] = player;
    };
    PlayersService.prototype.setBench = function (number) {
        this.Positions.BN = number;
        this.Positions.playersBench = [];
        var player = {
            name: '',
            fantasyPosition: '',
            fantasyPoints: 0,
            team: ''
        };
        for (var i = 0; i < number; i++) {
            this.Positions.playersBench.push(player);
        }
    };
    PlayersService.prototype.setFlex = function (number) {
        this.Positions.FLEX = number;
        this.Positions.playersFlex = [];
        var player = {
            name: '',
            fantasyPosition: '',
            fantasyPoints: 0,
            team: ''
        };
        for (var i = 0; i < number; i++) {
            this.Positions.playersFlex.push(player);
        }
    };
    PlayersService.prototype.setPosition = function (position, number) {
        this.Positions[position] = number;
        var player = {
            name: '',
            fantasyPosition: position,
            fantasyPoints: 0,
            team: ''
        };
        this.Positions['players' + position] = [];
        for (var i = 0; i < number; i++) {
            this.Positions['players' + position].push(player);
        }
    };
    //returns position value from dropdown 
    PlayersService.prototype.getTotalPosition = function (position) {
        return this.Positions[position];
    };
    PlayersService.prototype.getAllPositions = function () {
        return this.Positions;
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map