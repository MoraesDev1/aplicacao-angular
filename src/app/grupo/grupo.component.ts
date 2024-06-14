import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { GrupoDialogEditandoComponent } from './grupo-dialog-editando/grupo-dialog-editando.component';
import { GrupoDialogExcluindoComponent } from './grupo-dialog-excluindo/grupo-dialog-excluindo.component';
import { GrupoDialogInserindoComponent } from './grupo-dialog-inserindo/grupo-dialog-inserindo.component';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  grupo: Grupo[] = [];

  displayedColumns = ['botao', 'id', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
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

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GrupoDialogExcluindoComponent, {
      width: '50%',
    });
  }

}
