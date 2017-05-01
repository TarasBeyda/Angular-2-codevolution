import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'departmentList-comp',
    template: `
                    <h1>Department List</h1> 
                    <ul class="items"> 
                        <li (click)="onSelect(department)" *ngFor="let department of departments">
                            <span class="badge">{{department.id}}</span>{{department.name}}
                        </li>
                    </ul>
                 `
})

export class DepartmentListComponent {
    constructor(private _router: Router){}

    departments = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "Node"},
        {"id": 3, "name": "MongoDB"},
        {"id": 4, "name": "Python"},
        {"id": 5, "name": "Bootstrap"}
    ]

    onSelect(department) {
        this._router.navigate(['/departments', department.id]);
    }
}
