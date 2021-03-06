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
var serviceList_service_1 = require("./services/serviceList.service");
var ServiceListDetailComponent = (function () {
    function ServiceListDetailComponent(_listService) {
        this._listService = _listService;
        this.employees = [];
    }
    ServiceListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listService.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
    };
    return ServiceListDetailComponent;
}());
ServiceListDetailComponent = __decorate([
    core_1.Component({
        selector: 'serviceListDetail-comp',
        template: "\n                    <h2>Employee detail</h2>\n                    <h3>{{errorMsg}}</h3>\n                    <ul *ngFor=\"let employee of employees\">\n                        <li>{{employee.id}} - {{employee.name}} - {{employee.gender}}</li>\n                    </ul>\n                 "
    }),
    __metadata("design:paramtypes", [serviceList_service_1.ListService])
], ServiceListDetailComponent);
exports.ServiceListDetailComponent = ServiceListDetailComponent;
//# sourceMappingURL=serviceListDetail.component.js.map