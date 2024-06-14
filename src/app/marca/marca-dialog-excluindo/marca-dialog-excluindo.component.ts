import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-marca-dialog-excluindo',
  templateUrl: './marca-dialog-excluindo.component.html',
  styleUrls: ['./marca-dialog-excluindo.component.css']
})
export class MarcaDialogExcluindoComponent {
  constructor(
    public dialogRef: MatDialogRef<MarcaDialogExcluindoComponent>
  ) { }

  sim() {
    this.dialogRef.close(true);
  }
  nao() {
    this.dialogRef.close(false);
  }
}
