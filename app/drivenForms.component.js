"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DrivenFormsComponent = (function () {
    function DrivenFormsComponent() {
        this.myName = 'Taras';
    }
    DrivenFormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return DrivenFormsComponent;
}());
DrivenFormsComponent = __decorate([
    core_1.Component({
        selector: 'drivenForms-comp',
        templateUrl: "app/templates/drivenForms.component.html",
        styles: ["\n                input.ng-invalid {\n                    border-left: 5px solid red;\n                }\n                input.ng-valid {\n                    border-left: 5px solid green;\n                }\n            "]
    })
], DrivenFormsComponent);
exports.DrivenFormsComponent = DrivenFormsComponent;
//# sourceMappingURL=drivenForms.component.js.map