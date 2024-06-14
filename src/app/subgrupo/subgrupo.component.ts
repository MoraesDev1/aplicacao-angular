import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubgrupoDialogInserindoComponent } from './subgrupo-dialog-inserindo/subgrupo-dialog-inserindo.component';
import { SubgrupoDialogEditandoComponent } from './subgrupo-dialog-editando/subgrupo-dialog-editando.component';
import { SubgrupoDialogExcluindoComponent } from './subgrupo-dialog-excluindo/subgrupo-dialog-excluindo.component';
import { SubgrupoInterface } from '../model/subgrupo';
import { SubgrupoService } from '../services/subgrupo.service';
import { GrupoInterface } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { ProdutoInterface } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-subgrupo',
  templateUrl: './subgrupo.component.html',
  styleUrls: ['./subgrupo.component.css']
})
export class SubgrupoComponent {

  grupo: GrupoInterface[] = [];
  subgrupo: SubgrupoInterface[] = [];
  produto: ProdutoInterface[] = [];

  displayedColumns = ['botoes', 'grupo', 'nome', 'descricao'];

  constructor(public dialog: MatDialog, private subgrupoService: SubgrupoService, private grupoService: GrupoService, private produtoService: ProdutoService) {
    this.getGroups();
    this.getSubgroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo);
    this.produtoService.getProducts().subscribe(produto => this.produto = produto);
  }

  getSubgroups() {
    this.subgrupoService.getSubgroups().subscribe(subgrupo => {
      this.subgrupo = subgrupo;
      this.addGroupInSubgroup();
    });
  }

  addGroupInSubgroup() {
    this.grupo.forEach(grupo => {
      this.subgrupo.forEach(subgrupo => {
        if (grupo.id === subgrupo.idProdutoGrupo) {
          subgrupo.nomeGrupo = grupo.nome;
        }
      });
    });
  }

  deleteSubgroup(idSubgroup: Number) {
    const relatedItens = this.produto.filter(produto => produto.idProdutoSubgrupo === idSubgroup);
    if (relatedItens.length == 0) {
      this.subgrupoService.deleteSubgroup(idSubgroup).subscribe(_ => this.getSubgroups());
    } else {
      alert(`Ação bloqueada\nExistem ${relatedItens.length} produtos dentro deste Subgrupo no momento`);
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SubgrupoDialogInserindoComponent, {
      width: '100%',
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SubgrupoDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string, idSubgroup: Number): void {
    const dialogRef = this.dialog.open(SubgrupoDialogExcluindoComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteSubgroup(idSubgroup);
        window.location.reload();
      }
    });
  }

}
