import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

import { SubgrupoDialogEditandoComponent } from './subgrupo-dialog-editando/subgrupo-dialog-editando.component';
import { SubgrupoDialogExcluindoComponent } from './subgrupo-dialog-excluindo/subgrupo-dialog-excluindo.component';
import { SubgrupoDialogInserindoComponent } from './subgrupo-dialog-inserindo/subgrupo-dialog-inserindo.component';

@Component({
  selector: 'app-subgrupo',
  templateUrl: './subgrupo.component.html',
  styleUrls: ['./subgrupo.component.css']
})


export class SubgrupoComponent {
  grupo: Grupo[] = [];

  displayedColumns = ['botao', 'id', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SubgrupoDialogInserindoComponent, {
      width: '100%',
      height: '90vh'
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
