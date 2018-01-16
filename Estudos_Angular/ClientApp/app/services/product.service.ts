﻿import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ProductService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('http://localhost:35717/api/Product')
            .map(res => res.json());
    }

}