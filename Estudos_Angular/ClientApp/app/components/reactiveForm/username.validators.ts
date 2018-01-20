import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UserNameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return {
                'cannotContainSpace': true
            };
        return null;
    }
    //promise e observable, são asycronous!
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('OK!');
                if (control.value === 'allan')
                    resolve({
                        'shouldBeUnique': true
                    });
                else
                    resolve(null);
            }, 2000);
        });
    }
}