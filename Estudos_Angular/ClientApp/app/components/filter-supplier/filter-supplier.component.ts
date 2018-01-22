import { Component, OnInit } from '@angular/core';
import { SupplierService } from "../../services/supplier.service";
import { Supplier } from "../../models/supplier";


@Component({
    selector: 'filter-supplier',
    templateUrl: './filter-supplier.component.html',
    styleUrls: ['./filter-supplier.component.css']
})

export class FilterSupplierComponent implements OnInit {

    queryResult: any = [];
    query: any = {};
    supplierList: Supplier[];

    constructor(private supplierService: SupplierService){}

    ngOnInit() {
        this.getSuppliers();
    }

    private getSuppliers() {
        this.supplierService.getSuppliers()
            .subscribe(s => {
                this.supplierList = s;
                //this.queryResult = s;
            });
    }

    onFilterChange(city: string) {

        this.queryResult = [];
        //this.queryResult = this.supplierList.filter(x => x.City == city);

       // console.log('Result', this.queryResult);          


        for (var i = 0; i < this.supplierList.length; i++) {

            if (this.supplierList[i].City == city) {
                this.queryResult.push(this.supplierList[i]);
            }

        }
        console.log('Filtro: ', this.queryResult + this.queryResult);
    }
}