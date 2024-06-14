import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

import { ProdutosDialogEditandoComponent } from './produtos-dialog-editando/produtos-dialog-editando.component';
import { ProdutosDialogExcluindoComponent } from './produtos-dialog-excluindo/produtos-dialog-excluindo.component';
import { ProdutosDialogInserindoComponent } from './produtos-dialog-inserindo/produtos-dialog-inserindo.component';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  grupo: Grupo[] = [];

  displayedColumns = ['botao', 'id', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogInserindoComponent, {
      width: '100%',
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogExcluindoComponent, {
      width: '50%',
    });
  }

}
