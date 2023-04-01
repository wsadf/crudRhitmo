import {Component} from '@angular/core';

export interface PeriodicElement {
  nome: string;
  email: string;
  cpf: string;
  criado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Assaisga', email:'pricila9722@uorak.com', cpf: '647.555.680-72', criado: '31/03/2023'},
  {nome: 'Teste', email:'teste@uorak.com', cpf: '647.555.680-72', criado: '01/08/2023'}
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['demo-nome', 'demo-email', 'demo-cpf', 'demo-criado', 'demo-actions'];
  dataSource = ELEMENT_DATA;
}
