import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DataService } from "./data.service";


@Injectable()

export class ProductService extends DataService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(http: Http) {
        super('http://localhost:35717/api/Product', http);
    }

}