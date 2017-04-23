"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputsOutputsComponent = (function () {
    function InputsOutputsComponent() {
    }
    return InputsOutputsComponent;
}());
InputsOutputsComponent = __decorate([
    core_1.Component({
        selector: 'inputsOutputs-comp',
        template: "\n                <br><br><br>\n                <h2>Input and Output parent app component</h2>\n                <label>Enter parent value</label>\n                <input type=\"text\" #ptext (keyup)=\"0\">\n                <p>Value from child is:</p>\n                {{childData}}\n                <inputOutputChild-comp (childEvent)=\"childData=$event\" [parentData]=\"ptext.value\"></inputOutputChild-comp>\n              ",
        styles: ["\n                \n            "]
    })
], InputsOutputsComponent);
exports.InputsOutputsComponent = InputsOutputsComponent;
//# sourceMappingURL=inputsOutputs.component.js.map