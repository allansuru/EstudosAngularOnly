import { Component } from '@angular/core';
import { Http } from "@angular/http/";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    posts: any[];
    filterPosts: any[];
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
        http.get(this.url)
            .subscribe(response => {
                this.posts = response.json();
                console.log(response);
                console.log(this.posts);


                 this.filterPosts = this.posts.filter(x => x.userId == 1);
                console.log(this.filterPosts);
                
            });
            
    }

    createPost(titleInput: HTMLInputElement) {
        let post = {
            id: 0,
            title: titleInput.value
        }
        titleInput.value = '';
        this.http.post(this.url, JSON.stringify(post))
            .subscribe(response => {
                post.id = response.json().id;
                //this.posts.push(post) == final da lista, pra colocar no começo da lista use a tecnica abaixo
                this.posts.splice(0, 0, post);
                console.log(response.json());
            });
    }

    updatePost(post: any) {
        // patch, faz update somente em uma propriedade específica q vc define, como o exemplo abaixo
        // diferente do put que salva um objeto inteiro, então tudo depende do que vc quer!!
        this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
            .subscribe(response => {
                console.log(response.json());
            })
    }

    deletePost(post: any) {

        this.http.delete(this.url + '/' + post.id)
            .subscribe(response => {
                let index = this.posts.indexOf(post);
                console.log(index);
                this.posts.splice(index, 1); //limpando o deletado da lista que recebe o objeto
                console.log(response);
            });
    }

}
