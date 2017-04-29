import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';

import { AppComponent }               from './app.component';
import { TutorialsComponent }         from './tutorials.component';
import { TwoWayBindingComponent }     from './twoWayBinding.component';
import { AttrDirectivesComponent }    from './attrDirectives.component';
import { InputsOutputsComponent }     from './inputsOutputs.component';
import { InputOutputChildComponent }  from './inputOutputChild.component';
import { PipesComponent }             from './pipes.component';

import { DrivenFormsComponent }       from './drivenForms.component';
import { ModelDrivenFormsComponent }  from './modelDrivenForms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TutorialsComponent, TwoWayBindingComponent, AttrDirectivesComponent, InputsOutputsComponent, InputOutputChildComponent,
                  PipesComponent, DrivenFormsComponent, ModelDrivenFormsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
