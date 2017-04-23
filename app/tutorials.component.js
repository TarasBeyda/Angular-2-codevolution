"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorials from Codevolution";
        this.imgLink = "http://lorempixel.com/400/200";
        this.value = 'Angular input';
        this.applyClass = true;
        this.applyBlue = true;
    }
    TutorialsComponent.prototype.toggleApplyClassAndColor = function () {
        this.applyClass = !this.applyClass;
        this.applyBlue = !this.applyBlue;
    };
    TutorialsComponent.prototype.onClick = function (value) {
        alert(value);
    };
    return TutorialsComponent;
}());
TutorialsComponent = __decorate([
    core_1.Component({
        selector: 'tutorials-comp',
        template: "\n                <h2>Tutorials</h2>\n                <h4>{{ title }}</h4>\n                <img [src]=\"imgLink\" alt=\"\"><br><br>\n                <input type=\"text\" [value]=\"value\"><br><br>\n                \n                <button (click)=\"toggleApplyClassAndColor()\">Toggle class and color</button>\n                <div [class.myClass]=\"applyClass\">Apply Class</div>\n                <div [style.color]=\"applyBlue? 'blue' : 'orange'\">This is style binding</div><br><br><br>\n                \n                <button (click)=\"onClick(demoInput.value)\">Click Me</button>\n                <input type=\"text\" #demoInput>\n              ",
        styles: ["\n                h4 {\n                    color: red;                \n                }\n                .myClass {\n                    color: green;\n                }\n            "]
    })
], TutorialsComponent);
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map