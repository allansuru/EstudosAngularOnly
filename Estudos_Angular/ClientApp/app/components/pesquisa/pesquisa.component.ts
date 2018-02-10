import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service'

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styles: ['li { list-style: none }']
})
export class PesquisaComponent implements OnInit {

    public pesquisa: string;
    private lstProdutos: any[] = [];
    private lstProdutosTotal: any[] = [];
    private lstAux: any[] = [];

    constructor(private produtos: ProductService) { }

    ngOnInit() {
        this.pesquisa = '';
        this.getProducts();
    }

    getProducts() {
        this.produtos.getAll()
            .subscribe(result => {
                this.lstProdutos = result;
                this.lstProdutosTotal = result;
                console.log('Lista de Produtos: ', this.lstProdutos);
            })
    }

    pesquisarComponente(pesquisa: string) {
        console.log(pesquisa);
        if (pesquisa == '') {
            this.lstProdutos = this.lstProdutosTotal;
        }
        this.lstAux = this.lstProdutos;

        this.lstAux = this.lstAux.filter(item =>
            (item['ProductName'].toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1));

        return this.lstProdutos = this.lstAux;


    }
}

