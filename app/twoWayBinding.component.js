"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TwoWayBindingComponent = (function () {
    function TwoWayBindingComponent() {
        this.title = "Tutorial from Joatmon Channel";
        this.showElement = true;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
    }
    return TwoWayBindingComponent;
}());
TwoWayBindingComponent = __decorate([
    core_1.Component({
        selector: 'twoWayBinding-comp',
        template: "\n                <br><br><br>\n                <h1>twoWayBinding-comp</h1>\n                <h2>{{title}}</h2>\n                <input type=\"text\" [(ngModel)]=\"firstName\">\n                <input type=\"text\" [(ngModel)]=\"lastName\"><br>\n                FullName: {{firstName}} {{lastName}}\n                \n                <br><br><br><br>\n                <p *ngIf=\"showElement\">Show Element</p>\n                <div [ngSwitch]=\"color\">\n                    <p *ngSwitchCase=\"'red'\">Red color is shown</p>\n                    <p *ngSwitchCase=\"'blue'\">Blue color is shown</p>\n                    <p *ngSwitchDefault>Invalid color</p>\n                </div>\n                <ul>\n                    <li *ngFor=\"let color of colors\">{{color}}</li>\n                </ul>\n              "
    })
], TwoWayBindingComponent);
exports.TwoWayBindingComponent = TwoWayBindingComponent;
//# sourceMappingURL=twoWayBinding.component.js.map