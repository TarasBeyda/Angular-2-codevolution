import { Component } from '@angular/core';

@Component({
    selector: 'attrDirectives-comp',
    template: `
                <br><br><br>
                <h1>attrDirectives-comp</h1>
                <p [ngClass]="{classOne:one, classtwo:two}">ngClass paragraph</p>
                <button (click)="toggle()">Toggle</button>
                <p [ngStyle]="{'font-style':style, 'font-size':size}">ngStyle paragraph</p>
              `,
    styles: [`
                .classOne {
                    color: white;
                }
                .classTwo {
                    background: black;
                }
            `]
})

export class AttrDirectivesComponent {
    public one=true;
    public two=true;
    public style='italic';
    public size='30px';

    toggle() {
        this.one = !this.one;
        this.two = !this.two;
    }
}
