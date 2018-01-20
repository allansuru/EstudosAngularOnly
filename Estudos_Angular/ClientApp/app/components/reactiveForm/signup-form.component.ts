import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from "./username.validators";

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
    form = new FormGroup({
        account: new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                UserNameValidators.cannotContainSpace,
            ],
                UserNameValidators.shouldBeUnique
            ),
            password: new FormControl('', Validators.required)
        }),

    });

    ngOnInit() {
         //console.log(this.form);
    }

    get userName() {
        return this.form.get('account.username');
    }

    login() {
        //Quando implementar do server vai ser assim!
      /*  let isValid = authService.login(this.form.value);

        if (!isValid) {
            this.form.setErrors({
                invalidLogin: true
            })
        } */

        this.form.setErrors({
            invalidLogin: true
        });
    }
}
