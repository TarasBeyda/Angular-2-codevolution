import { Component }            from '@angular/core';
import { EventEmitter }         from '@angular/core'

@Component({
    selector: 'inputOutputChild-comp',
    template: `
                <br>
                <h2>Input and Output child app component</h2>
                <label>Enter child value</label>
                <input type="text" #childtext (keyup)="onChange(childtext.value)">
                <p>Value from parent is:</p>
                {{parentData}}
                `,
    inputs: ['parentData'],
    outputs: ['childEvent']
})

export class InputOutputChildComponent {
    public parentData: string;
    childEvent = new EventEmitter<string>();

    onChange(value: string) {
        this.childEvent.emit(value);
    }
}
