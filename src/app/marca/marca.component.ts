import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

import { MarcaDialogEditandoComponent } from './marca-dialog-editando/marca-dialog-editando.component';
import { MarcaDialogExcluindoComponent } from './marca-dialog-excluindo/marca-dialog-excluindo.component';
import { MarcaDialogInserindoComponent } from './marca-dialog-inserindo/marca-dialog-inserindo.component';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {

  
  grupo: Grupo[] = [];

  displayedColumns = ['botao', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MarcaDialogInserindoComponent, {
      width: '100%',
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MarcaDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MarcaDialogExcluindoComponent, {
      width: '50%',
    });
  }
}
