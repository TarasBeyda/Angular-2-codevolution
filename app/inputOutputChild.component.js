"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var InputOutputChildComponent = (function () {
    function InputOutputChildComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    InputOutputChildComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    return InputOutputChildComponent;
}());
InputOutputChildComponent = __decorate([
    core_1.Component({
        selector: 'inputOutputChild-comp',
        template: "\n                <br>\n                <h2>Input and Output child app component</h2>\n                <label>Enter child value</label>\n                <input type=\"text\" #childtext (keyup)=\"onChange(childtext.value)\">\n                <p>Value from parent is:</p>\n                {{parentData}}\n                ",
        inputs: ['parentData'],
        outputs: ['childEvent']
    })
], InputOutputChildComponent);
exports.InputOutputChildComponent = InputOutputChildComponent;
//# sourceMappingURL=inputOutputChild.component.js.map