import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule }               from '@angular/router';

import { AppComponent }               from './app.component';
import { TutorialsComponent }         from './tutorials.component';
import { TwoWayBindingComponent }     from './twoWayBinding.component';
import { AttrDirectivesComponent }    from './attrDirectives.component';
import { InputsOutputsComponent }     from './inputsOutputs.component';
import { InputOutputChildComponent }  from './inputOutputChild.component';
import { PipesComponent }             from './pipes.component';

import { DrivenFormsComponent }       from './drivenForms.component';
import { ModelDrivenFormsComponent }  from './modelDrivenForms.component';

import { ServiceListComponent }           from './serviceList.component';
import { ServiceListDetailComponent }     from './serviceListDetail.component';

import { RoutingAppComponent } from './routingApp.component';
// import { DepartmentListComponent } from './department-list.component';
// import { EmployeeListComponent } from './employee-list.component'

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, ReactiveFormsModule, HttpModule,
                    // RouterModule.forRoot([
                    //     {path: '', component: AppComponent},
                    //     {path: 'departments', component: DepartmentListComponent},
                    //     {path: 'employees', component: EmployeeListComponent}
                    // ])
                 AppRoutingModule ],
  declarations: [ AppComponent, TutorialsComponent, TwoWayBindingComponent, AttrDirectivesComponent, InputsOutputsComponent, InputOutputChildComponent,
                  PipesComponent, DrivenFormsComponent, ModelDrivenFormsComponent, ServiceListComponent, ServiceListDetailComponent,
                  // RoutingAppComponent, DepartmentListComponent, EmployeeListComponent
                 routingComponents, RoutingAppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
