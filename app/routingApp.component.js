"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoutingAppComponent = (function () {
    function RoutingAppComponent() {
    }
    return RoutingAppComponent;
}());
RoutingAppComponent = __decorate([
    core_1.Component({
        selector: 'routingApp-comp',
        template: "\n                    <h1>Routing Application</h1>\n                    <nav>\n                        <a routerLink=\"/departments\" routerLinkActive=\"active\">Departments</a>\n                        <a routerLink=\"/employees\" routerLinkActive=\"active\">Employees</a>\n                    </nav>\n                    <router-outlet></router-outlet>\n                 ",
        styles: ["\n                nav a.active {\n                    color: #039be5;\n                }\n            "]
    })
], RoutingAppComponent);
exports.RoutingAppComponent = RoutingAppComponent;
//# sourceMappingURL=routingApp.component.js.map