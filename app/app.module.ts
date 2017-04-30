import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }                 from '@angular/http';

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

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, TutorialsComponent, TwoWayBindingComponent, AttrDirectivesComponent, InputsOutputsComponent, InputOutputChildComponent,
                  PipesComponent, DrivenFormsComponent, ModelDrivenFormsComponent, ServiceListComponent, ServiceListDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
