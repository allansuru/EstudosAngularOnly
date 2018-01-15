import { Component } from '@angular/core'

@Component({
    selector: 'contact-form',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {

    log(x: any) {
        console.log('LOG', x)
    }
    
}