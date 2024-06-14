import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GrupoInterface } from 'src/app/model/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-grupo-dialog-excluindo',
  templateUrl: './grupo-dialog-excluindo.component.html',
  styleUrls: ['./grupo-dialog-excluindo.component.css']
})
export class GrupoDialogExcluindoComponent {

  constructor(
    public dialogRef: MatDialogRef<GrupoDialogExcluindoComponent>
  ) { }

  sim() {
    this.dialogRef.close(true);
  }
  nao() {
    this.dialogRef.close(false);
  }
}
