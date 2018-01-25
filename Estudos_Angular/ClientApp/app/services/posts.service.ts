import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PostService {
    private url = 'http://ajsonplaceholder.typicode.com/posts';

    constructor(private http: Http) { }

    getPosts() {
        return this.http.get(this.url)
            .map(response => response.json());

    }

    createPost(id: number) {
        return this.http.post(this.url, id)
            .map(response => response.json());
    }

    updatePost(id: number) {
        return this.http.patch(this.url, id, JSON.stringify({ isRead: true }))
            .map(response => response.json());
    }

    deletePost(id: number) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json());

    }
}


