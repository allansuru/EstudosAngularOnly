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

    lstApoio: any = [];

    filtroChexs = {
        id: [0, 1, 2, 3],
        estados: ['Rio', 'SP', 'BH', 'RS'],
        tamanho: 0
    }

    constructor(private supplierService: SupplierService) { }

    ngOnInit() {
        this.getSuppliers();
       // this.getinSuppliers();  

        console.log('Filtro Chexs: ', this.filtroChexs)
    }

    private getSuppliers() {
        this.supplierService.getAll()
            .subscribe(s => {
                this.supplierList = s;
                this.filtroChexs.tamanho = this.filtroChexs.estados.length;
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
        let recebe = [];
        if ($event.target.checked) {
            this.filtroChexs.id.push(id);
            this.filtroChexs.tamanho++;


          /*  for (var i = 0; i < this.lstApoio.length; i++) {
                if (this.lstApoio[i]['SupplierId'] === id) {
                    recebe = this.lstApoio[i]
                    this.supplierListFilter.push(recebe);
                }
            } */

        }
        else {
            var index = this.filtroChexs.id.indexOf(id);
            this.filtroChexs.id.splice(index, 1);
            this.filtroChexs.tamanho--;

            for (var i = 0; i < this.supplierListFilter.length; i++) {
                if (this.supplierListFilter[i]['SupplierId'] === id) {
                    this.supplierListFilter.splice(id, 1);
                    break;
                }
            }


        }


        this.trataUltimo(id, $event);
    }

    trataUltimo(id: number, $event: any) {
        if (this.filtroChexs.tamanho == 0  && this.filtroChexs.id.length == 0) {
            this.filtroChexs.id.push(id);
            $event.target.checked = true;
            this.filtroChexs.tamanho++;
        }
    }

    getinSuppliers() {

        let teste = [];

        this.supplierService.create({
            SupplierId: '0',
            CompanyName: '',
            ContactName: '',
            City: '',
            Country: '',
            ids: this.filtroChexs.id
        })
            .subscribe(response => {
                this.supplierListFilter = response;
                this.lstApoio = response;
                console.log('lstApoio', this.lstApoio);
            });

    }
}