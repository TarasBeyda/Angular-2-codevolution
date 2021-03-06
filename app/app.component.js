"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var serviceList_service_1 = require("./services/serviceList.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n            <h1>Hello World</h1>\n            <tutorials-comp></tutorials-comp>\n            <twoWayBinding-comp></twoWayBinding-comp>\n            <attrDirectives-comp></attrDirectives-comp>\n            <inputsOutputs-comp></inputsOutputs-comp>\n            <pipes-comp></pipes-comp>\n            <drivenForms-comp></drivenForms-comp>\n            <modelDrivenForms-comp></modelDrivenForms-comp>\n            <serviceList-comp></serviceList-comp>\n            <serviceListDetail-comp></serviceListDetail-comp>\n            <routingApp-comp></routingApp-comp>\n            ",
        providers: [serviceList_service_1.ListService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map