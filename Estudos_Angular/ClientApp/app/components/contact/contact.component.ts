import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'contact-form',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    contact = {
        firstName: '',
        comment: '',
        isSubscribed: '',
        contactMethod: ''
    }


    contactMethodOptions =  [
        { id: 1, name: 'Email' },
        { id: 2, name: 'Phone' }
    ]


    ngOnInit() {
        // console.log(this.contact);
    }

    log(ngModel: any, form: any) {
        console.log('LOG', ngModel);
        console.log('FORM', form);

    }
    submit(f: any) {
        console.log('submit', f);
        console.log('Valores do form', JSON.stringify(f.value));

    }

}