import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { UnidadeDialogInserindoComponent } from './unidade-dialog-inserindo/unidade-dialog-inserindo.component';
import { UnidadeDialogEditandoComponent } from './unidade-dialog-editando/unidade-dialog-editando.component';
import { UnidadeDialogExcluindoComponent } from './unidade-dialog-excluindo/unidade-dialog-excluindo.component';
import { Unidade } from '../model/unidade';
import { UnidadeService } from '../services/unidade.service';
@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent {

  unidade: Unidade[] = [];

  displayedColumns = ['botoes', 'sigla', 'descricao'];

  constructor(private unidadeService: UnidadeService, public dialog: MatDialog) {
    this.getUnits();
  }

  getUnits() {
    this.unidadeService.getUnits().subscribe(unidade => this.unidade = unidade);
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
