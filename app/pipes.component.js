"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PipesComponent = (function () {
    function PipesComponent() {
        this.name = 'TheJoatmon';
        this.date = new Date();
    }
    return PipesComponent;
}());
PipesComponent = __decorate([
    core_1.Component({
        selector: 'pipes-comp',
        template: "\n                <br><br><br>\n                <h2>{{name}}</h2>\n                <h2>{{name | uppercase}}</h2>\n                <h2>{{name | lowercase}}</h2>\n                <h2>{{name | slice:'2':'5'}}</h2>\n                <!--<h2>{{name | replace:'The':'Hello'}}</h2>-->\n                \n                \n                <br>\n                <h2>{{8.567}}</h2>\n                <h2>{{8.567 | number:'1.2-3'}}</h2>\n                <h2>{{8.567 | number:'2.2-3'}}</h2>\n                <h2>{{8.567 | number:'2.4-4'}}</h2>\n                <h2>{{8.567 | number:'2.2-2'}}</h2>\n                \n                <h2>{{8.99 | currency: 'USD'}}</h2>\n                <h2>{{8.99 | currency: 'USD':true}}</h2>\n                \n                \n                <br>\n                <h2>{{date}}</h2>\n                <h2>{{date | date:'fullDate'}}</h2>\n                <h2>{{date | date:'shortDate'}}</h2>\n                <h2>{{date | date:'mediumTime'}}</h2>\n                <h2>{{date | date:'shortTime'}}</h2>\n                "
    })
], PipesComponent);
exports.PipesComponent = PipesComponent;
//# sourceMappingURL=pipes.component.js.map