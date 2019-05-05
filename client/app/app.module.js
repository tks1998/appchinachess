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
var platform_browser_1 = require('@angular/platform-browser');
var ng_semantic_1 = require("ng-semantic");
var app_component_main_1 = require('./component_main/app.component.main');
var http_1 = require('@angular/http');
var board_1 = require('./component_board/board');
var winRate_1 = require('./component_analysis/winRate');
var weights_1 = require('./component_analysis/weights');
var runtimeAnalysist_1 = require('./component_analysis/runtimeAnalysist');
var MapToIterable_1 = require('./pipe/MapToIterable');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng_semantic_1.NgSemanticModule,
                http_1.HttpModule,
                ng2_charts_1.ChartsModule
            ],
            bootstrap: [
                app_component_main_1.AppComponent
            ],
            declarations: [
                app_component_main_1.AppComponent,
                board_1.BoardComponent,
                MapToIterable_1.MapToIterable,
                winRate_1.WinRaterComponent,
                runtimeAnalysist_1.RuntimeAnalysist,
                weights_1.WeightTableComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map