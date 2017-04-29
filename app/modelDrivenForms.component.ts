import { Component }                from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';

@Component({
    selector: 'modelDrivenForms-comp',
    templateUrl: `app/templates/modelDrivenForms.component.html`
})

export class ModelDrivenFormsComponent {
    userForm = new FormGroup({
        name: new FormControl('Taras'),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl()
        })
    });
    onSubmitModelDrivenForm() {
        console.log(this.userForm.value);
    }
}
