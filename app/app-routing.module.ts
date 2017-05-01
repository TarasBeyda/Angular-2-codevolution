import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [EmployeeListComponent, DepartmentListComponent];