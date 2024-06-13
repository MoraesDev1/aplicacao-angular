import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos-dialog-excluindo',
  templateUrl: './produtos-dialog-excluindo.component.html',
  styleUrls: ['./produtos-dialog-excluindo.component.css']
})
export class ProdutosDialogExcluindoComponent {

  constructor(
    public dialogRef: MatDialogRef<ProdutosDialogExcluindoComponent>
  ) { }

  sim() {
    this.dialogRef.close(true);
  }
  nao() {
    this.dialogRef.close(false);
  }
}
