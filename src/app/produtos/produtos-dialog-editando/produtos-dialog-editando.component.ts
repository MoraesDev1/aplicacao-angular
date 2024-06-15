import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';
import { Marca } from 'src/app/marca';
import { GrupoService } from 'src/app/services/grupo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { SubgrupoService } from 'src/app/services/subgrupo.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { Subgrupo } from 'src/app/subgrupo';
import { Unidade } from 'src/app/unidade';

@Component({
  selector: 'app-produtos-dialog-editando',
  templateUrl: './produtos-dialog-editando.component.html',
  styleUrls: ['./produtos-dialog-editando.component.css']
})
export class ProdutosDialogEditandoComponent {

  grupos: Grupo[] = [];
  subgrupos: Subgrupo[] = [];
  marcas: Marca[] = [];
  unidades: Unidade[] = [];

  selectedGrupo: number | any;
  selectedSubgrupo: Number | any;
  selectedMarca: Number | any;
  selectedUnidade: Number | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProdutosDialogEditandoComponent>,
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

  id = this.data.selectedProduct.id;
  nome = this.data.selectedProduct.nome;
  desc = this.data.selectedProduct.descricao;
  dataCadastro = this.data.selectedProduct.dataCadastro;
  gtin = this.data.selectedProduct.gtin;
  valor = this.data.selectedProduct.valor;
  idSubgroup = this.data.selectedProduct.idProdutoSubgrupo;
  idBrand = this.data.selectedProduct.idProdutoMarca;
  idUnit = this.data.selectedProduct.idProdutoUnidade;

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
        if (this.subgrupos.length > 0) {
          this.subgrupos.forEach(subgrupo => {
            if (subgrupo.id == this.idSubgroup) {
              this.selectedSubgrupo = this.idSubgroup;
            }
          });
        }
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
        if (this.marcas.length > 0) {
          this.marcas.forEach(marca => {
            if (marca.id == this.idBrand) {
              this.selectedMarca = this.idBrand;
            }
          });
        }
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
        if (this.unidades.length > 0) {
          this.unidades.forEach(unidade => {
            if (unidade.id == this.idUnit) {
              this.selectedUnidade = this.idUnit;
            }
          });
        }
        this.addGroupNameInSubgroup();
      },
      error => {
        console.error('Erro ao buscar subgrupos:', error);
      }
    );
  }

  addGroupNameInSubgroup() {
    this.grupos.forEach(grupo => {
      this.subgrupos.forEach(subgrupo => {
        if (subgrupo.idProdutoGrupo == grupo.id) {
          subgrupo.nomeGrupo = grupo.nome;
          if (this.idSubgroup == grupo.id) {
            this.selectedGrupo = grupo.id;
          }
        }
      });
    });
  }

  clickConfirm() {
    if (!this.nome) {
      alert("Nome não informado, favor informe o nome");
    } else if (!this.gtin) {
      alert("Gtin não informado, favor informe um gtin");
    } else if (!this.dataCadastro) {
      alert("Data de cadastro não informada, favor informe uma data");
    } else if (!this.valor) {
      alert("Valor não informado, favor informe um valor");
    } else {
      this.data.selectedProduct.nome = this.nome;
      this.data.selectedProduct.gtin = this.gtin;
      this.data.selectedProduct.dataCadastro = this.dataCadastro;
      this.data.selectedProduct.valor = this.valor;
      this.dialogRef.close(this.data.selectedProduct);
    }
  }
}
