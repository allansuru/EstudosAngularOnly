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
    public paginacao: any[];
    public porpagina: number = 10;
    public pagina: number = 0;

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
                this.montaPaginacao();
                this.paginarFiltrados();
            });
 
    }

    pesquisarComponente(pesquisa: string) {
        console.log(pesquisa);
        if (pesquisa == '') {
            this.lstProdutos = this.lstProdutosTotal;
        }
        this.lstAux = this.lstProdutos;

        this.lstAux = this.lstAux.filter(item =>
            (item['ProductName']
                .toLowerCase()
                .indexOf(pesquisa.toLowerCase()) !== -1));

        return this.lstProdutos = this.lstAux;
    }

    private montaPaginacao() {
        this.paginacao = []
        for (var i = 0; i < this.lstProdutosTotal.length / this.porpagina; i++) {
            this.paginacao.push(i);
        }
    }

    private paginarFiltrados() {
        let lstTotal_aux: any = [];


        lstTotal_aux = this.lstProdutosTotal.slice(this.pagina * this.porpagina, (this.pagina + 1) * this.porpagina);


        return this.lstProdutos = lstTotal_aux;
    }
    private mudarPagina(pagina: any) {
        if (pagina > 0) {
            this.pagina = pagina;
            this.paginarFiltrados();
        }
    }
}

