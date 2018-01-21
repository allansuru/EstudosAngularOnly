import { Component } from '@angular/core';
import { Http } from "@angular/http/";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    posts: any[];

    constructor(http: Http) {
        http.get('http://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
                this.posts = response.json();
                console.log(response);
                console.log(this.posts);

                let filterPosts = this.posts.filter(x => x.userId == 1);
                console.log(filterPosts);
                
            });
            
    }
}
