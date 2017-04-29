import { Component }            from '@angular/core';

@Component({
    selector: 'drivenForms-comp',
    templateUrl: `app/templates/drivenForms.component.html`,
    styles: [`
                input.ng-invalid {
                    border-left: 5px solid red;
                }
                input.ng-valid {
                    border-left: 5px solid green;
                }
            `]
})

export class DrivenFormsComponent {
    myName = 'Taras';
    onSubmit(value: any) {
        console.log(value);
    }
}
