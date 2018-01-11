import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

    @Input('isFavorite') isSelected: boolean;
    @Output('changeOutput') change = new EventEmitter()
   
constructor() { }


    ngOnInit() {

}

    onClick() {
        this.isSelected = !this.isSelected; // se for true, vira false e vice e versa
        //this.change.emit(this.isSelected); //subscriber(assinante) é o appcomponent // o $event pega esse cara, no caso, um simples bool, mas, posso passar um objeto tbm
        this.change.emit({ newValue: this.isSelected });
    }
}
