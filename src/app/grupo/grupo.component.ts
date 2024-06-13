import { Component } from '@angular/core';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { MatDialog } from '@angular/material/dialog';
import { GrupoDialogInserindoComponent } from './grupo-dialog-inserindo/grupo-dialog-inserindo.component';
import { GrupoDialogEditandoComponent } from './grupo-dialog-editando/grupo-dialog-editando.component';
import { GrupoDialogExcluindoComponent } from './grupo-dialog-excluindo/grupo-dialog-excluindo.component';
import { Subgrupo } from '../model/subgrupo';
import { Produto } from '../model/produto';
import { SubgrupoService } from '../services/subgrupo.service';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  grupo: Grupo[] = [];
  subgrupo: Subgrupo[] = [];
  produto: Produto[] = [];

  displayedColumns = ['botoes', 'nome', 'descricao'];

  constructor(public dialog: MatDialog, private grupoService: GrupoService, private subgrupoService: SubgrupoService, private produtoService: ProdutoService) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo);
    this.subgrupoService.getSubgroups().subscribe(subgrupo => this.subgrupo = subgrupo);
    this.produtoService.getProducts().subscribe(produto => this.produto = produto);
  }

  deleteGroup(idGroup: Number) {
    const subgruposParaDeletar = this.subgrupo.filter(subgrupo => subgrupo.idProdutoGrupo === idGroup);
    subgruposParaDeletar.forEach(subgrupo => {
      const produtosParaDeletar = this.produto.filter(produto => produto.idProdutoSubgrupo === subgrupo.id);
      produtosParaDeletar.forEach(produto => {
        this.produtoService.deleteProducts(produto.id!).subscribe(_ => this.getGroups());
      });

      this.subgrupoService.deleteSubgroup(subgrupo.id!).subscribe(_ => this.getGroups());
    });
    this.grupoService.deleteGroup(idGroup).subscribe(_ => this.getGroups());
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GrupoDialogInserindoComponent, {
      width: '100%',
    });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GrupoDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string, idGroup: Number): void {
    const dialogRef = this.dialog.open(GrupoDialogExcluindoComponent, {
      width: '50%',
      data: { id: idGroup }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteGroup(idGroup);
        window.location.reload();
      }
    });
  }

}
