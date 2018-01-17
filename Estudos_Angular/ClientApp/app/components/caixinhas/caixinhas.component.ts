import { Component, OnInit } from '@angular/core'
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'

@Component({
    selector: 'app-caixinhas',
    templateUrl: './caixinhas.component.html',
    styleUrls: ['./caixinhas.component.css']
})

export class CaixinhasComponent implements OnInit {

    productsList: Product[];


    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.getProducts();


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
                this.productsList = p

                console.log('Produtos', this.productsList);
                //console.log('JSON', JSON.stringify(this.products));

            });
    }

}