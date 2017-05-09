import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { PageNotFoundComponent } from './page-not-found-component';


const routes: Routes = [
    {path: '', redirectTo: '/departments', pathMatch: 'full'}, // full or prefix
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments/:id', component: DepartmentDetailComponent},
    {path: '**', component: PageNotFoundComponent}
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
export const routingComponents = [EmployeeListComponent, DepartmentListComponent, DepartmentDetailComponent];