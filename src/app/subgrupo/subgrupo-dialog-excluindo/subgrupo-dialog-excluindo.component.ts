import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subgrupo-dialog-excluindo',
  templateUrl: './subgrupo-dialog-excluindo.component.html',
  styleUrls: ['./subgrupo-dialog-excluindo.component.css']
})
export class SubgrupoDialogExcluindoComponent {
  constructor(
    public dialogRef: MatDialogRef<SubgrupoDialogExcluindoComponent>
  ) { }

  sim() {
    this.dialogRef.close(true);
  }
  nao() {
    this.dialogRef.close(false);
  }
}
