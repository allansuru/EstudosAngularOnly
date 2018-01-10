import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

   @Input() isFavorite: boolean;
   
constructor() { }


    ngOnInit() {

}

    onClick() {
        this.isFavorite = !this.isFavorite; // se for true, vira false e vice e versa


    }
}
