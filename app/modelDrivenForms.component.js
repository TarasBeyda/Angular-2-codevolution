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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ModelDrivenFormsComponent = (function () {
    function ModelDrivenFormsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.userForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('Taras', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]),
            email: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                postalcode: new forms_1.FormControl(null, forms_1.Validators.pattern('^[1-9][0-9]{4}$'))
            })
        });
    }
    ModelDrivenFormsComponent.prototype.onSubmitModelDrivenForm = function () {
        console.log(this.userForm.value);
    };
    ModelDrivenFormsComponent.prototype.ngOnInit = function () {
        this.myFormBuilder = this._formBuilder.group({
            name: ['Taras', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [null, [forms_1.Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        });
    };
    return ModelDrivenFormsComponent;
}());
ModelDrivenFormsComponent = __decorate([
    core_1.Component({
        selector: 'modelDrivenForms-comp',
        templateUrl: "app/templates/modelDrivenForms.component.html",
        styles: ["\n                input.ng-invalid {\n                    border-left: 5px solid red;\n                }\n                input.ng-valid {\n                    border-left: 5px solid green;\n                }\n            "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ModelDrivenFormsComponent);
exports.ModelDrivenFormsComponent = ModelDrivenFormsComponent;
//# sourceMappingURL=modelDrivenForms.component.js.map