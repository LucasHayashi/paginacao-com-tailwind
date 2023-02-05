import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Array<any> = [];
  listaPaginada: Array<any> = [];
  paginaAtual: number = 1;
  totalPorPagina: number = 10;
  inicioDaPagina: number = 0;
  totalDePaginas: number = 0;
  totalDeProdutos: number = 0;
  totalNaPagina: number = 0;
  fimDaPagina: number = 0;

  constructor(private productsService: ProductsService) { }

  criarPaginacao() {
    this.totalDePaginas = Math.ceil(this.productList.length / this.totalPorPagina);
    this.totalDeProdutos = this.productList.length;
    this.fimDaPagina = this.paginaAtual * this.totalPorPagina;
    this.inicioDaPagina = this.fimDaPagina - this.totalPorPagina;
    this.listaPaginada = this.productList.slice(this.inicioDaPagina, this.fimDaPagina);
    this.totalNaPagina = this.fimDaPagina - (this.totalPorPagina - this.listaPaginada.length);
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.productList = data;
      this.criarPaginacao();
    });
  }

  onMudouDePagina(evento: any) {
    this.paginaAtual = evento.pagina;
    this.criarPaginacao();
  }

  alterarItensPorPagina(evento: any) {
    let quantidadeSelecionada = evento.target.options[evento.target.selectedIndex].value;
    this.totalPorPagina = Number(quantidadeSelecionada);
    this.criarPaginacao();
  }
}
