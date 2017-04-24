import { Component }            from '@angular/core';

@Component({
    selector: 'pipes-comp',
    template: `
                <br><br><br>
                <h2>{{name}}</h2>
                <h2>{{name | uppercase}}</h2>
                <h2>{{name | lowercase}}</h2>
                <h2>{{name | slice:'2':'5'}}</h2>
                <!--<h2>{{name | replace:'The':'Hello'}}</h2>-->
                
                
                <br>
                <h2>{{8.567}}</h2>
                <h2>{{8.567 | number:'1.2-3'}}</h2>
                <h2>{{8.567 | number:'2.2-3'}}</h2>
                <h2>{{8.567 | number:'2.4-4'}}</h2>
                <h2>{{8.567 | number:'2.2-2'}}</h2>
                
                <h2>{{8.99 | currency: 'USD'}}</h2>
                <h2>{{8.99 | currency: 'USD':true}}</h2>
                
                
                <br>
                <h2>{{date}}</h2>
                <h2>{{date | date:'fullDate'}}</h2>
                <h2>{{date | date:'shortDate'}}</h2>
                <h2>{{date | date:'mediumTime'}}</h2>
                <h2>{{date | date:'shortTime'}}</h2>
                `
})

export class PipesComponent {
    name = 'TheJoatmon';

    date = new Date();
}
