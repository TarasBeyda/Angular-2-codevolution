import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'routingApp-comp',
    template: `
                    <h1>Routing Application</h1>
                    <nav>
                        <a routerLink="/departments" routerLinkActive="active">Departments</a>
                        <a routerLink="/employees" routerLinkActive="active">Employees</a>
                    </nav>
                    <router-outlet></router-outlet>
                 `,
    styles: [`
                nav a.active {
                    color: #039be5;
                }
            `]
})

export class RoutingAppComponent {

}