import { Component } from '@angular/core';

import { ListService } from './services/serviceList.service';

@Component({
  selector: 'my-app',
  template: `
            <h1>Hello World</h1>
            <tutorials-comp></tutorials-comp>
            <twoWayBinding-comp></twoWayBinding-comp>
            <attrDirectives-comp></attrDirectives-comp>
            <inputsOutputs-comp></inputsOutputs-comp>
            <pipes-comp></pipes-comp>
            <drivenForms-comp></drivenForms-comp>
            <modelDrivenForms-comp></modelDrivenForms-comp>
            <serviceList-comp></serviceList-comp>
            <serviceListDetail-comp></serviceListDetail-comp>
            `,
  providers: [ListService]
})

export class AppComponent { }