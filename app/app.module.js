"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var tutorials_component_1 = require("./tutorials.component");
var twoWayBinding_component_1 = require("./twoWayBinding.component");
var attrDirectives_component_1 = require("./attrDirectives.component");
var inputsOutputs_component_1 = require("./inputsOutputs.component");
var inputOutputChild_component_1 = require("./inputOutputChild.component");
var pipes_component_1 = require("./pipes.component");
var drivenForms_component_1 = require("./drivenForms.component");
var modelDrivenForms_component_1 = require("./modelDrivenForms.component");
var serviceList_component_1 = require("./serviceList.component");
var serviceListDetail_component_1 = require("./serviceListDetail.component");
var routingApp_component_1 = require("./routingApp.component");
// import { DepartmentListComponent } from './department-list.component';
// import { EmployeeListComponent } from './employee-list.component'
var app_routing_module_1 = require("./app-routing.module");
var app_routing_module_2 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, forms_2.ReactiveFormsModule, http_1.HttpModule,
            // RouterModule.forRoot([
            //     {path: '', component: AppComponent},
            //     {path: 'departments', component: DepartmentListComponent},
            //     {path: 'employees', component: EmployeeListComponent}
            // ])
            app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, tutorials_component_1.TutorialsComponent, twoWayBinding_component_1.TwoWayBindingComponent, attrDirectives_component_1.AttrDirectivesComponent, inputsOutputs_component_1.InputsOutputsComponent, inputOutputChild_component_1.InputOutputChildComponent,
            pipes_component_1.PipesComponent, drivenForms_component_1.DrivenFormsComponent, modelDrivenForms_component_1.ModelDrivenFormsComponent, serviceList_component_1.ServiceListComponent, serviceListDetail_component_1.ServiceListDetailComponent,
            // RoutingAppComponent, DepartmentListComponent, EmployeeListComponent
            app_routing_module_2.routingComponents, routingApp_component_1.RoutingAppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map