import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';
import { Marca } from 'src/app/marca';
import { Produto } from 'src/app/produto';
import { GrupoService } from 'src/app/services/grupo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { SubgrupoService } from 'src/app/services/subgrupo.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { Subgrupo } from 'src/app/subgrupo';
import { Unidade } from 'src/app/unidade';

@Component({
  selector: 'app-produtos-dialog-inserindo',
  templateUrl: './produtos-dialog-inserindo.component.html',
  styleUrls: ['./produtos-dialog-inserindo.component.css'],

})

export class ProdutosDialogInserindoComponent {

  grupos: Grupo[] = [];
  subgrupos: Subgrupo[] = [];
  marcas: Marca[] = [];
  unidades: Unidade[] = [];
  subgruposFiltrados: Subgrupo[] = [];

  selectedGrupo: number | any;
  selectedSubgrupo: Number | any;
  selectedMarca: Number | any;
  selectedUnidade: Number | any;

  constructor(
    public dialogRef: MatDialogRef<ProdutosDialogInserindoComponent>,
    public groupService: GrupoService,
    public subgrupoService: SubgrupoService,
    public marcaService: MarcaService,
    public unidadeService: UnidadeService
  ) {
    this.getGroups();
    this.getSubgroups();
    this.getBrands();
    this.getUnits();
  }

  id = '';
  nome = '';
  gtin = '';
  valor = '';
  dataCadastro = '';

  getGroups() {
    this.groupService.getGroups().subscribe(
      grupo => { this.grupos = grupo },
      error => {
        console.error('Erro ao buscar grupos:', error);
      }
    );
  }

  getSubgroups() {
    this.subgrupoService.getSubgroups().subscribe(
      subgrupo => {
        this.subgrupos = subgrupo;
        this.subgruposFiltrados = subgrupo;
      },
      error => {
        console.error('Erro ao buscar subgrupos:', error);
      }
    );
  }

  getBrands() {
    this.marcaService.getBrands().subscribe(
      marca => {
        this.marcas = marca;
      },
      error => {
        console.error('Erro ao buscar marcas:', error);
      }
    );
  }

  getUnits() {
    this.unidadeService.getUnits().subscribe(
      unidade => {
        this.unidades = unidade;
      },
      error => {
        console.error('Erro ao buscar subgrupos:', error);
      }
    );
  }

  filterSubgroup() {
    this.selectedSubgrupo = null;
    this.subgruposFiltrados = this.subgrupos.filter(subgrupo => subgrupo.idProdutoGrupo == this.selectedGrupo);
  }

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.gtin == '' || this.gtin == null) {
      alert("Gtin não informado, favor informe o gtin");
    } else if (this.valor == '' || this.valor == null) {
      alert("Valor não informado, favor informe o valor");
    } else if (this.dataCadastro == '' || this.dataCadastro == null) {
      alert("Data de cadastro não informada, favor informe a data");
    } else if (this.selectedGrupo == null) {
      alert("Grupo não informado, favor informe o grupo");
    } else if (this.selectedMarca == null) {
      alert("Marca não informada, favor informe a marca");
    } else if (this.selectedSubgrupo == null) {
      alert("Subgrupo não informado, favor informe o subgrupo");
    } else if (this.selectedUnidade == null) {
      alert("Unidade não informada, favor informe a unidade");
    } else {
      let novoSubgrupo = new Produto(Number(this.selectedSubgrupo), Number(this.selectedMarca), Number(this.selectedUnidade), this.nome, this.gtin, Number(this.valor), this.dataCadastro)
      this.dialogRef.close(novoSubgrupo);
    }
  }
}
