import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

    @Input('isFavorite') isSelected: boolean;
    @Output() change = new EventEmitter()
   
constructor() { }


    ngOnInit() {

}

    onClick() {
        this.isSelected = !this.isSelected; // se for true, vira false e vice e versa
        this.change.emit();


    }
}
