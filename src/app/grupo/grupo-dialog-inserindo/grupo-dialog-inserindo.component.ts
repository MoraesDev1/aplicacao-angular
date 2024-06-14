import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grupo-dialog-inserindo',
  templateUrl: './grupo-dialog-inserindo.component.html',
  styleUrls: ['./grupo-dialog-inserindo.component.css']
})
export class GrupoDialogInserindoComponent {
  constructor(
    public dialogRef: MatDialogRef<GrupoDialogInserindoComponent>
  ) { }

  clickConfirm() {
    console.log('chamou');
  }
}
