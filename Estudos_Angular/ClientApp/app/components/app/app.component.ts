import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
 export class AppComponent {
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
}
