import { Component, OnInit } from '@angular/core';

import { ListService } from './services/serviceList.service';

@Component({
    selector: 'serviceList-comp',
    template: `
                    <h2>Employee list</h2>
                    <ul *ngFor="let employee of employees">
                        <li>{{employee.name}}</li>
                    </ul>
                 `
})

export class ServiceListComponent implements OnInit{
    employees = [];

    constructor(private _listService: ListService){}
    ngOnInit() {
        this._listService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }
}
