import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosDialogInserindoComponent } from './produtos-dialog-inserindo/produtos-dialog-inserindo.component';
import { ProdutosDialogEditandoComponent } from './produtos-dialog-editando/produtos-dialog-editando.component';
import { ProdutosDialogExcluindoComponent } from './produtos-dialog-excluindo/produtos-dialog-excluindo.component';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  constructor(public dialog: MatDialog) {
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
