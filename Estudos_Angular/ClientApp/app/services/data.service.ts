import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotExistError } from "../common/not-exist-error";
import { AuthHttp } from "angular2-jwt";


@Injectable()

export class DataService {
      public headers = new Headers({ 'Content-Type': 'application/json' });
      options = new RequestOptions({ headers: this.headers });
 

    constructor(private url: string, private http: Http) { }


    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }



    create(resource: any) {
        //return Observable.throw(new AppError());

        return this.http.post(this.url, resource, this.options)
          //  .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource: any) {
        return this.http.patch(this.url, resource.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id: number) {
            //return Observable.throw(new AppError());

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

@Injectable()

export class Servicos {
    tab: boolean;

    setTab() {
      return this.tab = true;
    }
}


