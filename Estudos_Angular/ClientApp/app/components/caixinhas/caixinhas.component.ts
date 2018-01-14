import { Component, OnInit } from '@angular/core'
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'

@Component({
    selector: 'app-caixinhas',
    templateUrl: './caixinhas.component.html',
    styleUrls: ['./caixinhas.component.css']
})

export class CaixinhasComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.getProducts();


    }

    private getProducts() {
        this.productService.getProducts()
            .subscribe(p => {
                this.products = p

                console.log('Produtos', this.products);
                //console.log('JSON', JSON.stringify(this.products));

            });
    }

}