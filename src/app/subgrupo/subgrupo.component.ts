import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubgrupoDialogInserindoComponent } from './subgrupo-dialog-inserindo/subgrupo-dialog-inserindo.component';
import { SubgrupoDialogEditandoComponent } from './subgrupo-dialog-editando/subgrupo-dialog-editando.component';
import { SubgrupoDialogExcluindoComponent } from './subgrupo-dialog-excluindo/subgrupo-dialog-excluindo.component';
import { Subgrupo } from '../model/subgrupo';
import { SubgrupoService } from '../services/subgrupo.service';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-subgrupo',
  templateUrl: './subgrupo.component.html',
  styleUrls: ['./subgrupo.component.css']
})
export class SubgrupoComponent {

  grupo: Grupo[] = [];
  subgrupo: Subgrupo[] = [];

  displayedColumns = ['botoes', 'grupo', 'nome', 'descricao'];

  constructor(private subgrupoService: SubgrupoService, private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
    this.getSubgroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo);
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

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SubgrupoDialogExcluindoComponent, {
      width: '50%',
    });
  }

}
