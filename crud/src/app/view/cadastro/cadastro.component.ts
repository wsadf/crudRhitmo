import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nome:string = '';
  email:string = ''; 
  cpf:string = '';
  criado:string = '00/00/0000';
  endereco:string = '';
  estado:string = '';
  cep:string = '';
  cidade:string = '';
  nomeCartao:string = '';
  numeroCartao:string = '';
  codigoSeguranca:string = '';
  mes:string = '';
  ano:string = '';


  constructor() { }

  async salvar() {
    let cadastro = this.getCadastro();
    let dadosCadastro = {
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      criado: this.criado,
      endereco: this.endereco,
      estado: this.estado,
      cep: this.cep,
      cidade: this.cidade,
      nomeCartao: this.nomeCartao,
      numeroCartao: this.numeroCartao,
      codigoSeguranca: this.codigoSeguranca,
      mes: this.mes,
      ano: this.ano,
    };
    if(!cadastro) {
      localStorage.setItem('cadastro', JSON.stringify([dadosCadastro]));
    } else {
      let cadastrar = JSON.parse(this.getCadastro() || '{}');
      cadastrar.push(dadosCadastro);
      this.setCadastro(cadastrar);
    }
  }
  
  getCadastro() {
    return localStorage.getItem('cadastro');
  }

  setCadastro(dados: string | null) {
    localStorage.setItem('cadastro', JSON.stringify(dados));
  }
}
