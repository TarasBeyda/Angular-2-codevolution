import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'departmentList-comp',
    template: `
                    <h1>Department List</h1> 
                    <ul class="items"> 
                        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                            <span class="badge">{{department.id}}</span>{{department.name}}
                        </li>
                    </ul>
                 `,
    styles: [`
                .items li.selected {
                    background-color: #CFD8DC;
                    color: white;
                }
            `]
})

export class DepartmentListComponent implements OnInit {
    public selectedId;
    constructor(private _router: Router, private _route: ActivatedRoute){}
    departments = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "Node"},
        {"id": 3, "name": "MongoDB"},
        {"id": 4, "name": "Python"},
        {"id": 5, "name": "Bootstrap"}
    ];

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedId = id;
        });
    }

    onSelect(department) {
        this._router.navigate(['/departments', department.id]);
    }

    isSelected(department) {
        return department.id === this.selectedId;
    }
}
