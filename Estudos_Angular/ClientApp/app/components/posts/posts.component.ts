import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/posts.service";
import { AppError } from "../../common/app-error";
import { NotFoundError } from "../../common/not-found-error";
import { NotExistError } from "../../common/not-exist-error";
import { AppErrorHandler } from '../../common/app-error-handler'
import { FavoriteService } from "../../services/favorite.service"

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: any[];
    filterPosts: any[];
    criado: boolean = false;
    deletado: boolean = false;
    favorite: any[];
    EhFavorito: number = 0;
    idFavorito: number = 0;
 

    constructor(private postService: PostService, private favoriteService: FavoriteService) {
       
    }

    ngOnInit() {
        this.getPosts();
        this.getFavorites();
    }
    onFavoriteChanged(event: any) {
        console.log('Evento: ', event);
        console.log('IdFavorito: ', this.idFavorito);

        this.UpdateFavorite(event);
    }

    getPosts() {
        this.postService.getAll()
            .subscribe(
            posts => {
                this.posts = posts;
               // console.log(JSON.stringify(this.posts));
                this.filterPosts = this.posts.filter(x => x.userId == 2);
                console.log('Só filtrando: ', this.filterPosts);

            });
    }

    getFavorites() {
        this.favoriteService.getAll()
            .subscribe(f => {
                this.favorite = f;
                this.favorite = this.favorite.filter(ff => ff['Id_Component'] == 1);
                this.EhFavorito = this.favorite[0]['EhFavorito'];
                this.idFavorito = this.favorite[0]['IdFavorites'];
                console.log('Eh favorito: ', this.EhFavorito);
                console.log('Favoritos: ', this.favorite);
            })
    }
    UpdateFavorite(event: any) {
        if (event['newValue'] == false) {
            this.EhFavorito = 0
        }
        else
            this.EhFavorito = 1;

        const obj = {
            'IdFavorites': this.idFavorito,
            'Id_User': 1,
            'Id_Component': 1,
            'CreateFavorite': Date.now,
            'EhFavorito': this.EhFavorito 
        };


        this.favoriteService.create(obj)
            .subscribe(f => console.log('update favorite'));
    }

    createPost(titleInput: HTMLInputElement) {
        console.log('Valor Input vindo de uma variável no HTML: ', titleInput);
        let post = {
            id: 0,
            title: titleInput.value
        }
  //this.posts.push(post) == final da lista, pra colocar no começo da lista use a tecnica abaixo
        this.posts.splice(0, 0, post);
        this.criado = true;
        titleInput.value = '';
        this.postService.create(post.id)
            .subscribe(
            newPost => {
                post.id = newPost.id;
                console.log(newPost);
            },
            (error: AppError) => {
                this.posts.splice(0, 1);
                if (error instanceof NotExistError) {
                    console.log("Não existe - erro 400!");
                }
                else throw error

            });
    }

    updatePost(post: any) {
        // patch, faz update somente em uma propriedade específica q vc define, como o exemplo abaixo
        // diferente do put que salva um objeto inteiro, então tudo depende do que vc quer!!
        this.postService.update(post.id)
            .subscribe(
            updatePost => {
                console.log(updatePost);
            });
    }

    deletePost(post: any) {
        let index = this.posts.indexOf(post);
        console.log('index item: ', index);
        this.posts.splice(index, 1); //limpando o deletado da lista que recebe o objeto
        this.deletado = true;
        this.postService.delete(post.id)
            .subscribe( deletePost => {
                console.log(deletePost);
            },
            (error: AppError) => {
                this.posts.splice(index, 0, post);

                if (error instanceof NotFoundError) {
                    console.log("Esse poste já foi deletado - erro 404!");
                }
                else throw error

            });
    }

}
