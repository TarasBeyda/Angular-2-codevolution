import { Component } from '@angular/core';

@Component({
    selector: 'tutorials-comp',
    template: `
                <h2>Tutorials</h2>
                <h4>{{ title }}</h4>
                <img [src]="imgLink" alt=""><br><br>
                <input type="text" [value]="value"><br><br>
                
                <button (click)="toggleApplyClassAndColor()">Toggle class and color</button>
                <div [class.myClass]="applyClass">Apply Class</div>
                <div [style.color]="applyBlue? 'blue' : 'orange'">This is style binding</div><br><br><br>
                
                <button (click)="onClick(demoInput.value)">Click Me</button>
                <input type="text" #demoInput>
              `,
    styles: [`
                h4 {
                    color: red;                
                }
                .myClass {
                    color: green;
                }
            `]
})

export class TutorialsComponent {
    public title="Tutorials from Codevolution";
    public imgLink="http://lorempixel.com/400/200";
    public value='Angular input';

    public applyClass = true;
    public applyBlue = true;

    toggleApplyClassAndColor() {
        this.applyClass = !this.applyClass;
        this.applyBlue = !this.applyBlue;
    }

    onClick(value) {
        alert(value);
    }
}
