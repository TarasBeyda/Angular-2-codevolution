"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AttrDirectivesComponent = (function () {
    function AttrDirectivesComponent() {
        this.one = true;
        this.two = true;
        this.style = 'italic';
        this.size = '30px';
    }
    AttrDirectivesComponent.prototype.toggle = function () {
        this.one = !this.one;
        this.two = !this.two;
    };
    return AttrDirectivesComponent;
}());
AttrDirectivesComponent = __decorate([
    core_1.Component({
        selector: 'attrDirectives-comp',
        template: "\n                <br><br><br>\n                <h1>attrDirectives-comp</h1>\n                <p [ngClass]=\"{classOne:one, classtwo:two}\">ngClass paragraph</p>\n                <button (click)=\"toggle()\">Toggle</button>\n                <p [ngStyle]=\"{'font-style':style, 'font-size':size}\">ngStyle paragraph</p>\n              ",
        styles: ["\n                .classOne {\n                    color: white;\n                }\n                .classTwo {\n                    background: black;\n                }\n            "]
    })
], AttrDirectivesComponent);
exports.AttrDirectivesComponent = AttrDirectivesComponent;
//# sourceMappingURL=attrDirectives.component.js.map