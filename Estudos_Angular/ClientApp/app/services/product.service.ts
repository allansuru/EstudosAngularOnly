import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ProductService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private readonly productEndpoint = 'http://localhost:35717/api/Product'

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get(this.productEndpoint)
            .map(res => res.json());
    }
    deleteProduct(id: any) {
        return this.http.delete(this.productEndpoint + '/' + id)
            //.map(res => res.json());
    }

}