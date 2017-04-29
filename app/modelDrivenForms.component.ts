import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnInit}  from '@angular/core';

@Component({
    selector: 'modelDrivenForms-comp',
    templateUrl: `app/templates/modelDrivenForms.component.html`,
    styles: [`
                input.ng-invalid {
                    border-left: 5px solid red;
                }
                input.ng-valid {
                    border-left: 5px solid green;
                }
            `]
})

export class ModelDrivenFormsComponent implements OnInit {

    userForm = new FormGroup({
        name: new FormControl('Taras', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
        })
    });
    onSubmitModelDrivenForm() {
        console.log(this.userForm.value);
    }


    myFormBuilder: FormGroup;

    constructor(private _formBuilder: FormBuilder){}

    ngOnInit() {
        this.myFormBuilder = this._formBuilder.group({
            name: ['Taras', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        })
    }
}
