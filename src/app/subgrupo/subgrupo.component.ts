import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { SubgrupoDialogInserindoComponent } from './subgrupo-dialog-inserindo/subgrupo-dialog-inserindo.component';
import { SubgrupoDialogEditandoComponent } from './subgrupo-dialog-editando/subgrupo-dialog-editando.component';
import { SubgrupoDialogExcluindoComponent } from './subgrupo-dialog-excluindo/subgrupo-dialog-excluindo.component';

@Component({
  selector: 'app-subgrupo',
  templateUrl: './subgrupo.component.html',
  styleUrls: ['./subgrupo.component.css']
})


export class SubgrupoComponent {
  constructor(public dialog: MatDialog) {

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
