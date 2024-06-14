import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

import { UnidadeDialogEditandoComponent } from './unidade-dialog-editando/unidade-dialog-editando.component';
import { UnidadeDialogExcluindoComponent } from './unidade-dialog-excluindo/unidade-dialog-excluindo.component';
import { UnidadeDialogInserindoComponent } from './unidade-dialog-inserindo/unidade-dialog-inserindo.component';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent {
  grupo: Grupo[] = [];

  displayedColumns = ['botao', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UnidadeDialogInserindoComponent, {
      width: '100%',
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UnidadeDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UnidadeDialogExcluindoComponent, {
      width: '50%',
    });
  }
}
