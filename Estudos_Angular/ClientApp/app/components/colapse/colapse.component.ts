import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-colapse',
    templateUrl: 'colapse.component.html',
    styleUrls: ['colapse.component.css']
})


export class ColapseComponent {

    @Input('titulo-colapse') tituloColapse: string;
    isExpended: boolean = true;

    toggle() {
        this.isExpended = !this.isExpended;
    }

}