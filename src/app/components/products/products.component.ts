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

  config: PaginationInstance = {
    id: 'productPagination',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
      this.productList
    });
  }

  alteraQtdPorPagina(evento: any) {
    let selectEl = evento.target;
    let selectedIndexValue = selectEl.selectedOptions[0].value;
    this.config.itemsPerPage = selectedIndexValue;
  }
}
