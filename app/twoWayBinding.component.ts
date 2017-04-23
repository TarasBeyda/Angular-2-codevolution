import { Component } from '@angular/core';

@Component({
    selector: 'twoWayBinding-comp',
    template: `
                <br><br><br>
                <h1>twoWayBinding-comp</h1>
                <h2>{{title}}</h2>
                <input type="text" [(ngModel)]="firstName">
                <input type="text" [(ngModel)]="lastName"><br>
                FullName: {{firstName}} {{lastName}}
                
                <br><br><br><br>
                <p *ngIf="showElement">Show Element</p>
                <div [ngSwitch]="color">
                    <p *ngSwitchCase="'red'">Red color is shown</p>
                    <p *ngSwitchCase="'blue'">Blue color is shown</p>
                    <p *ngSwitchDefault>Invalid color</p>
                </div>
                <ul>
                    <li *ngFor="let color of colors">{{color}}</li>
                </ul>
              `
})

export class TwoWayBindingComponent {
    public title="Tutorial from Joatmon Channel";
    public firstName;
    public lastName;

    public showElement=true;
    public color='red';
    public colors=['red', 'blue', 'green'];
}
