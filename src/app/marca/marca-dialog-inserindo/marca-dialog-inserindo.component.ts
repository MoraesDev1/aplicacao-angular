import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Marca } from 'src/app/marca';

@Component({
  selector: 'app-marca-dialog-inserindo',
  templateUrl: './marca-dialog-inserindo.component.html',
  styleUrls: ['./marca-dialog-inserindo.component.css']
})
export class MarcaDialogInserindoComponent {
  constructor(
    public dialogRef: MatDialogRef<MarcaDialogInserindoComponent>
  ) { }

  id = '';
  nome = '';
  desc = '';

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe a descrição");
    } else {
      let novaMarca = new Marca(this.nome, this.desc);
      this.dialogRef.close(novaMarca);
    }
  }
}
