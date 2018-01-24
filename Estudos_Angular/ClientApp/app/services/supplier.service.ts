import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Supplier } from '../models/supplier'
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

    getInSuppliers(filtros: any) {
        return this.http.post(this.supplierEndpoint, filtros)
            .map(res => res.json());
    }
 

}