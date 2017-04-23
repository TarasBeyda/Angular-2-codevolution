import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h1>Hello World</h1>
            <tutorials-comp></tutorials-comp>
            <twoWayBinding-comp></twoWayBinding-comp>
            <attrDirectives-comp></attrDirectives-comp>
            <inputsOutputs-comp></inputsOutputs-comp>
            `
})

export class AppComponent { }