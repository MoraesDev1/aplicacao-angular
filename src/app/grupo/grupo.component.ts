import { Component } from '@angular/core';
import { GrupoInterface } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { MatDialog } from '@angular/material/dialog';
import { GrupoDialogInserindoComponent } from './grupo-dialog-inserindo/grupo-dialog-inserindo.component';
import { GrupoDialogEditandoComponent } from './grupo-dialog-editando/grupo-dialog-editando.component';
import { GrupoDialogExcluindoComponent } from './grupo-dialog-excluindo/grupo-dialog-excluindo.component';
import { SubgrupoInterface } from '../model/subgrupo';
import { ProdutoInterface } from '../model/produto';
import { SubgrupoService } from '../services/subgrupo.service';
import { ProdutoService } from '../services/produto.service';
import { Grupo } from '../grupo';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  grupo: GrupoInterface[] = [];
  subgrupo: SubgrupoInterface[] = [];


  displayedColumns = ['botoes', 'nome', 'descricao'];

  constructor(public dialog: MatDialog, private grupoService: GrupoService, private subgrupoService: SubgrupoService) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo);
    this.subgrupoService.getSubgroups().subscribe(subgrupo => this.subgrupo = subgrupo);
  }

  deleteGroup(idGroup: Number) {
    const relatedItens = this.subgrupo.filter(subgrupo => subgrupo.idProdutoGrupo === idGroup);
    if (relatedItens.length == 0) {
      this.grupoService.deleteGroup(idGroup).subscribe(_ => this.getGroups());
    } else {
      alert(`Ação bloqueada\nExistem ${relatedItens.length} Subgrupos dentro deste Grupo no momento`);
    }
  }

  postGroup(grupo: Grupo) {
    this.grupoService.postGroup(grupo).subscribe(_ => this.getGroups());
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(GrupoDialogInserindoComponent, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(newGroup => {
      if (newGroup) {
        this.postGroup(newGroup);
      }
    })
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
