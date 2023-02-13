import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { PaginationInstance } from 'ngx-pagination';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Array<Product> = [];
  requestComplete: boolean = false;
  loadingSkeletonTime: number = 2500; // Tempo em milisegundos para finalizar a animação do esqueleto após a requisição

  config: PaginationInstance = {
    id: 'productPagination',
    itemsPerPage: 10,
    currentPage: 1
  };

  skeletonRangeItems: Array<number> = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.skeletonRangeItems = Array.from(Array(this.config.itemsPerPage).keys());

    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
      setTimeout(() => {
        this.requestComplete = true;
      }, this.loadingSkeletonTime);
    });
  }

  alteraQtdPorPagina(evento: any) {
    let selectEl = evento.target;
    let selectedIndexValue = selectEl.selectedOptions[0].value;
    this.config.itemsPerPage = selectedIndexValue;
  }
}
