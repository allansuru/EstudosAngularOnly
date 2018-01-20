import { Component, OnInit } from '@angular/core'
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { SupplierService } from "../../services/supplier.service";
import { Supplier } from "../../models/supplier";


@Component({
    selector: 'app-caixinhas',
    templateUrl: './caixinhas.component.html',
    styleUrls: ['./caixinhas.component.css']
})

export class CaixinhasComponent implements OnInit {

    productsList: Product[];
    supplierList: Supplier[];

    size: number = 4;
    productsFirsts: any = [];
    supplirsFirsts: any = [];

    product = {
        id: 0,
        name: '',
        preco: '',
        estoque: '',
        quantidade: ''
    }

    supplier = {
        id: 0,
        companyName: '',
        contactName: '',
        city: '',
        country: ''
    }

    constructor(
        private productService: ProductService,
        private supplierService: SupplierService
    )
    { }

    ngOnInit() {
        this.getProducts();
        this.getSuppliers();

       


    }
    public delete(id: number) {
        console.log('ID', id);
        this.productService.deleteProduct(id)
            .subscribe(x => {
                console.log('Deletado com sucesso: ', id);
                this.getProducts();
            });

    }

    private getProducts() {
        this.productService.getProducts()
            .subscribe(p => {
                this.productsList = p;
          
                console.log('Produtos', this.productsList);
                this.productsFirsts = this.productsList.slice(0, 4);
                console.log('Firsts', this.productsFirsts);

                //console.log('JSON', JSON.stringify(this.products));

            });
    }

    private getSuppliers() {
        this.supplierService.getSuppliers()
            .subscribe(s => {
                this.supplierList = s;
                this.supplirsFirsts = this.supplierList.slice(0, this.size);
                console.log('Suppliers', this.supplierList);
            });
    }

    limpaSupplier(p: any) {
        console.log('Id', p);

        if (p == 0) {
            delete this.supplier.id;
        }     
    }

    validShowProducts(product: any) {
        let result = (product.SupplierID == 5 || product.SupplierID == 1) ? true : false
        return result;
    }
}
