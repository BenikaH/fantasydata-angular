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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var players_service_1 = require('../players.service');
var RosterComponent = (function () {
    function RosterComponent(PlayersService, route, location) {
        this.PlayersService = PlayersService;
        this.route = route;
        this.location = location;
        this.player = [];
    }
    RosterComponent.prototype.ngOnInit = function () {
        this.positions = this.PlayersService.getAllPositions();
        this.roster = this.PlayersService.getRoster();
    };
    RosterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RosterComponent.prototype.setPlayer = function (p) {
        console.log(p);
        this.PlayersService.setPlayer(p);
    };
    RosterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'roster',
            templateUrl: 'roster.component.html',
            styleUrls: ['roster.component.css']
        }), 
        __metadata('design:paramtypes', [players_service_1.PlayersService, router_1.ActivatedRoute, common_1.Location])
    ], RosterComponent);
    return RosterComponent;
}());
exports.RosterComponent = RosterComponent;
//# sourceMappingURL=roster.component.js.map