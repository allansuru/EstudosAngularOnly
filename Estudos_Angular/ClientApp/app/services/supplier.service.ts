import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Supplier } from '../models/supplier'
import { DataService } from "./data.service";


@Injectable()

export class SupplierService extends DataService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(http: Http) {
        super('http://localhost:35717/api/Supplier', http);
    }

  
 

}