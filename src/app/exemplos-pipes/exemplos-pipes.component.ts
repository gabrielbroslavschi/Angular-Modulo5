import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structure',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro!: string;

  addCurso(valor: any) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    let filter = this.filtro.toLocaleLowerCase();

    return this.livros.filter((v: any) => {
      if (v.toLocaleLowerCase().indexOf(filter) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  })


  constructor() {}

  ngOnInit(): void {}
}
