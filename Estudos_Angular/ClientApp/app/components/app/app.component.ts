import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [1, 2];

    post = {
        title: "Title",
        isFavorite: true
    }

    tweet = {
        body: 'O corpo do tweet',
        isLiked: true,
        likesCount: 10
    }



    onFavoriteChanged(eventsArgs : object) {
        //assinante
        console.log('changed:', eventsArgs);
    }
    mostraLista() {
        let result;

        result = (this.courses.length > 0) ? true : false

        return result;
    }
}
