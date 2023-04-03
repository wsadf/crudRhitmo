import {Component} from '@angular/core';

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

  ELEMENT_DATA: PeriodicElement[] = [];

  displayedColumns: string[] = ['demo-nome', 'demo-email', 'demo-cpf', 'demo-criado','demo-actions'];
  dataSource = this.ELEMENT_DATA;

  cadastro: any;

  async ngOnInit() {
   this.cadastro = JSON.parse(this.getCadastro() || '{}');
   this.ELEMENT_DATA = JSON.parse(this.getCadastro() || '{}');
  }

  getCadastro() {
    return localStorage.getItem('cadastro');
  }
}
