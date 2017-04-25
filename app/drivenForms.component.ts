import { Component }            from '@angular/core';

@Component({
    selector: 'drivenForms-comp',
    templateUrl: `app/templates/drivenForms.component.html`
})

export class DrivenFormsComponent {
    myName = 'Taras';
    onSubmit(value: any) {
        console.log(value);
    }
}
