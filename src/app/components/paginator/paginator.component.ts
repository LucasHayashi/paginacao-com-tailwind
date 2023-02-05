import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() totalDePaginas: number;
  @Input() inicioDaPagina: number;
  @Input() totalNaPagina: number;
  @Input() totalDeProdutos: number;
  @Output() mudouDePagina = new EventEmitter();

  paginaAtiva: number = 1;

  constructor() { }

  createRange(totalPages: number) {
    return new Array(totalPages).fill(0)
      .map((n, index) => index + 1);
  }

  alterarPagina(evento: any) {
    let pagina: any = evento.target.dataset.pagina;
    this.ativarPagina(pagina);
  }

  paginaAnterior() {
    if (this.paginaAtiva > 1) {
      this.paginaAtiva--;
    }

    this.ativarPagina(this.paginaAtiva);
  }

  proximaPagina() {
    if (this.paginaAtiva < this.totalDePaginas) {
      this.paginaAtiva++;
    }

    this.ativarPagina(this.paginaAtiva);
  }

  ativarPagina(pagina: any) {
    let paginasEl = document.querySelectorAll(".pagina");
    paginasEl.forEach((paginaEl) => {
      let paginaAtual = paginaEl.getAttribute('data-pagina');
      if (paginaAtual == pagina) {
        paginaEl.classList.add("active");
      } else {
        paginaEl.classList.remove("active");
      }
    });
    this.paginaAtiva = pagina;
    this.mudouDePagina.emit({ pagina: pagina });
  }
}
