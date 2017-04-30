import { Component, OnInit } from '@angular/core';

import { ListService } from './services/serviceList.service';

@Component({
    selector: 'serviceListDetail-comp',
    template: `
                    <h2>Employee detail</h2>
                    <ul *ngFor="let employee of employees">
                        <li>{{employee.id}} - {{employee.name}} - {{employee.gender}}</li>
                    </ul>
                 `
})

export class ServiceListDetailComponent {
    employees = [];

    constructor(private _listService: ListService){}
    ngOnInit() {
        this._listService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }
}
