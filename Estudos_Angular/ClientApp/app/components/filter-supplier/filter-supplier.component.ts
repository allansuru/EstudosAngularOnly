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
    supplierListFilter: any = [];

    filtroCidades:any = {
        id: [0,1,2,3],
        estados: ['Rio', 'SP', 'BH', 'RS'],
        tamanho: 0
    }

    constructor(private supplierService: SupplierService){}

    ngOnInit() {
        this.getSuppliers();

        console.log('Filtro Cidades: ', this.filtroCidades)
    }

    private getSuppliers() {
        this.supplierService.getSuppliers()
            .subscribe(s => {
                this.supplierList = s;
                //this.queryResult = s;
            });
    }

    onFilterChange(city: string) {

        
        this.queryResult = this.supplierList.filter(x => x.City == city);

        console.log('Result', this.queryResult); 

        /*for (var i = 0; i < this.supplierList.length; i++) {

            if (this.supplierList[i].City == city) {
                this.queryResult.push(this.supplierList[i]);
            }

        }*/
     
        console.log('Filtro: ', this.queryResult + this.queryResult);
    }
    addIds(id: number, $event: any) {
        if ($event.target.checked)
            this.filtroCidades.id.push(id);
        else {
            var index = this.filtroCidades.id.indexOf(id);
            this.filtroCidades.id.splice(index, 1);
        }

        this.supplierService.getInSuppliers({
            SupplierId: '0',
            CompanyName: '',
            ContactName: '',
            City: '',
            Country: '',
            ids: this.filtroCidades.id
        })
            .subscribe(response => {
                this.supplierListFilter = response;
                console.log('POST', response);
            });
    }
}