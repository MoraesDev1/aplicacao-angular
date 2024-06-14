import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unidade-dialog-excluindo',
  templateUrl: './unidade-dialog-excluindo.component.html',
  styleUrls: ['./unidade-dialog-excluindo.component.css']
})
export class UnidadeDialogExcluindoComponent {
  constructor(
    public dialogRef: MatDialogRef<UnidadeDialogExcluindoComponent>
  ) { }

  sim() {
    this.dialogRef.close(true);
  }
  nao() {
    this.dialogRef.close(false);
  }
}
