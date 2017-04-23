import { Component } from '@angular/core';

@Component({
    selector: 'inputsOutputs-comp',
    template: `
                <br><br><br>
                <h2>Input and Output parent app component</h2>
                <label>Enter parent value</label>
                <input type="text" #ptext (keyup)="0">
                <p>Value from child is:</p>
                {{childData}}
                <inputOutputChild-comp (childEvent)="childData=$event" [parentData]="ptext.value"></inputOutputChild-comp>
              `,
    styles: [`
                
            `]
})

export class InputsOutputsComponent {
    public childData: string;
}
