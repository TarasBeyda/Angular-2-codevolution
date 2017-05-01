import { Component, OnInit } from '@angular/core';

import { ListService } from './services/serviceList.service';

@Component({
    selector: 'serviceList-comp',
    template: `
                    <h2>Employee list</h2>
                    <h3>{{errorMsg}}</h3>
                    <ul *ngFor="let employee of employees">
                        <li>{{employee.name}}</li>
                    </ul>
                 `
})

export class ServiceListComponent implements OnInit{
    employees = [];
    errorMsg: string;

    constructor(private _listService: ListService){}
    ngOnInit() {
        this._listService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData,
                       resEmployeeError => this.errorMsg = resEmployeeError);
    }
}
