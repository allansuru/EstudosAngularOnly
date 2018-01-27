﻿import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NotExistError } from "../common/not-exist-error";


@Injectable()

export class PostService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) { }

    getPosts() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);

    }

    createPost(id: number) {
        return this.http.post(this.url, id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    updatePost(id: number) {
        return this.http.patch(this.url, id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    deletePost(id: number) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new NotExistError(error.json()))


        if (error.status === 404)
            return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
    }
}


