import { Component, OnInit } from '@angular/core'
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { SupplierService } from "../../services/supplier.service";
import { Supplier } from "../../models/supplier";
import { AppError } from "../../common/app-error";
import { NotFoundError } from "../../common/not-found-error";


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
    supplirsFirsts: Supplier[];

    product = {
        id: 0,
        name: '',
        preco: '',
        estoque: '',
        quanthex: ''
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
        this.productService.delete(id)
            .subscribe(x => {
                console.log('Deletado com sucesso: ', id);
                this.getProducts();
            },
            (error: AppError) => {
                if (error instanceof NotFoundError) {
                    console.log("Esse poste já foi deletado - erro 404!");
                }
                else throw error

            });
    }

    private getProducts() {

        this.productService.getAll()
            .subscribe(p => {
                this.productsList = p;
       
                console.log('Produtos', this.productsList);
                this.productsFirsts = this.productsList.slice(0, 4);
                console.log('Firsts', this.productsFirsts);

                this.modificaPrd(this.productsList);
            });
    }

    private getSuppliers() {
        this.supplierService.getAll()
            .subscribe(s => {
                this.supplierList = s;
                this.supplirsFirsts = this.supplierList.slice(0, this.size);
                this.supplierRecebe(this.supplirsFirsts);
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
        let result;

        if (this.size == 4) {
            result = (product.SupplierID == 5
                   || product.SupplierID == 1
                   || product.ProductId == 77
                   || product.ProductId == 30)
                   && (product.UnitPrice >= 10)
                ? true : false
        }
        else if (this.size == 20) {
            result = (product.SupplierID == 5
                || product.SupplierID == 1
                || product.SupplierID == 2
                || product.SupplierID == 3
                || product.SupplierID == 4
                || product.ProductId == 77
                || product.ProductId == 30)
                && (product.UnitPrice >= 10)
                ? true : false
        }
   
        return result;
    }

    supplierRecebe(lstSuplier: any) {

        lstSuplier.push({
            'City': 'Chex da Porral',
            'CompanyName': 'Compania da Porral',
            'ContactName': 'Contact Name da Porra',
            'Country': 'BR',
            'SupplierId': 1
        });
    }

    modificaPrd(p: any[]) {

        let modifica = p.filter(x => x.ProductId == 76)
        modifica[0].ProductId = 77;

        console.log('MODIFICA: ', modifica);

        //Jeito velho, melhor usar o filter
        //for (var i = 0; i < p.length; i++) {
        //    if (p[i].ProductId == 76) {
        //        p[i].ProductId = 77;
        //        console.log('Produto Modificado pra burlar o ngIf: ', p[i]);
        //    }
        //}

  
    }
}
