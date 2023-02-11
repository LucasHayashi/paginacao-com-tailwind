import { Component, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.css']
})
export class CustomPaginatorComponent {
  @Input() config: PaginationInstance = {
    id: 'identificador',
    itemsPerPage: 10,
    currentPage: 1
  };
}