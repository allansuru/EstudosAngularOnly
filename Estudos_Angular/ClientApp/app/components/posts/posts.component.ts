import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/posts.service";
import { AppError } from "../../common/app-error";
import { NotFoundError } from "../../common/not-found-error";
import { NotExistError } from "../../common/not-exist-error";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: any[];
    filterPosts: any[];
 

    constructor(private postService: PostService) {
       
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postService.getPosts()
            .subscribe(
            response => {
                this.posts = response;
                console.log(JSON.stringify(this.posts));


                this.filterPosts = this.posts.filter(x => x.userId == 1);
                console.log(this.filterPosts);

            },
            (error: Response) => {
                if (error.status === 404) {
                    console.log("Não existe!");
                } 
                else {
                    console.log("Erro: ", error);
                }
               
            });
    }

    createPost(titleInput: HTMLInputElement) {
        let post = {
            id: 0,
            title: titleInput.value
        }
        titleInput.value = '';
        this.postService.createPost(post.id)
            .subscribe(
            response => {
                post.id = response.id;
                //this.posts.push(post) == final da lista, pra colocar no começo da lista use a tecnica abaixo
                this.posts.splice(0, 0, post);
                console.log(response);
            },
            (error: AppError) => {
                if (error instanceof NotExistError) {
                    console.log("Não existe - erro 400!");
                }
                else {
                    console.log("Erro: ", error);
                }

            });
    }

    updatePost(post: any) {
        // patch, faz update somente em uma propriedade específica q vc define, como o exemplo abaixo
        // diferente do put que salva um objeto inteiro, então tudo depende do que vc quer!!
        this.postService.updatePost(post.id)
            .subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log("Erro", error);
            });
    }

    deletePost(post: any) {
        this.postService.deletePost(post.id)
            .subscribe(
            response => {
                let index = this.posts.indexOf(post);
                console.log(index);
                this.posts.splice(index, 1); //limpando o deletado da lista que recebe o objeto
                console.log(response);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError) {
                    console.log("Esse poste já foi deletado - erro 404!");
                }
                else {
                    console.log("Erro: ", error);
                }

            });
    }

}
