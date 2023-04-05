import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  email: string;
  cpf: string;
  criado: string;
}



/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tituloPagina = 'Listar';

  ELEMENT_DATA: PeriodicElement[] = [];

  displayedColumns: string[] = ['demo-nome', 'demo-email', 'demo-cpf', 'demo-criado', 'demo-actions'];
  dataSource = this.ELEMENT_DATA;

  cadastro: any;
  itemsCopy: any;
  searchTerm: any;
  busca: string = '';
  itemExcluir: number | undefined;

  async ngOnInit() {
    this.cadastro = JSON.parse(this.getCadastro() || '{}');
    this.ELEMENT_DATA = JSON.parse(this.getCadastro() || '{}');
  }

  getCadastro() {
    return localStorage.getItem('cadastro');
  }

  buscar() {
    if (this.busca.length >= 3) {
      this.cadastro.filter((filtrar: any) => {
        if (filtrar.email.startsWith(this.busca)) {
          this.cadastro = [];
          this.cadastro.push(filtrar);
        }
      });
    }
  }

  limpar() {
    this.busca = '';
    this.cadastro = [];
    this.cadastro = JSON.parse(this.getCadastro() || '{}');
  }

  excluir() {
    this.cadastro.splice(this.itemExcluir, 1);
    localStorage.setItem('cadastro', JSON.stringify(this.cadastro));
  }

  setDelete(i: number) {
    this.itemExcluir = i;
  }

}
