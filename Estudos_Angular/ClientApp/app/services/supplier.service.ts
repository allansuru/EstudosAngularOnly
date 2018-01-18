import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SupplierService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private readonly supplierEndpoint = 'http://localhost:35717/api/Supplier'

    constructor(private http: Http) { }

    getSuppliers() {
        return this.http.get(this.supplierEndpoint)
            .map(res => res.json());
    }
 

}