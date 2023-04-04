import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  cpf: string = '';
  criado: string = '00/00/0000';
  endereco: string = '';
  estado: string = '';
  cep: string = '';
  cidade: string = '';
  nomeCartao: string = '';
  numeroCartao: string = '';
  codigoSeguranca: string = '';
  mes: string = '';
  ano: string = '';
  tituloPagina = 'Listar';
  tituloBotao = 'Realizar Matricula';
  indiceEditar: number | undefined;
  editando: boolean = false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let index = this.route.snapshot.params['index'];
    if (index) {
      this.indiceEditar = index;
      this.PreencherCampos();
      this.editando = true
      this.tituloPagina = 'Atualizar Cadastro'
      this.tituloBotao = 'Salvar'
    } else {
      this.editando = false
      this.tituloPagina = 'Listar';
      this.tituloBotao = 'Realizar Matricula';
    }
  }

  edit() {
    let cadastro = JSON.parse(this.getCadastro() || '{}');
    // console.log('teste ',cadastro);
    let editar = cadastro.splice(this.indiceEditar, 1);
    return editar;
  }

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
    if (!cadastro) {
      localStorage.setItem('cadastro', JSON.stringify([dadosCadastro]));
    } else {
      let cadastrar = JSON.parse(this.getCadastro() || '{}');
      if (!this.editando) {
        cadastrar.push(dadosCadastro);
        this.setCadastro(cadastrar);
      } else {
        //atualizar indice do array
        console.log('editando')
      }
    }
    this.limparCampos()
  }

  getCadastro() {
    return localStorage.getItem('cadastro');
  }

  setCadastro(dados: string | null) {
    localStorage.setItem('cadastro', JSON.stringify(dados));
  }

  limparCampos() {
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.criado = '';
    this.endereco = '';
    this.estado = '';
    this.cep = '';
    this.cidade = '';
    this.nomeCartao = '';
    this.numeroCartao = '';
    this.codigoSeguranca = '';
    this.mes = '';
    this.ano = '';
  }

  PreencherCampos() {
    let dados = this.edit()[0];
    this.nome = dados.nome;
    this.email = dados.email;
    this.cpf = dados.cpf;
    this.criado = dados.criado;
    this.endereco = dados.endereco;
    this.estado = dados.estado;
    this.cep = dados.cep;
    this.cidade = dados.cidade;
    this.nomeCartao = dados.nomeCartao;
    this.numeroCartao = dados.numeroCartao;
    this.codigoSeguranca = dados.codigoSeguranca;
    this.mes = dados.mes;
    this.ano = dados.ano;
  }
}
