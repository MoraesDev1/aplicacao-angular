import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';

@Component({
  selector: 'app-grupo-dialog-inserindo',
  templateUrl: './grupo-dialog-inserindo.component.html',
  styleUrls: ['./grupo-dialog-inserindo.component.css']
})
export class GrupoDialogInserindoComponent {
  constructor(
    public dialogRef: MatDialogRef<GrupoDialogInserindoComponent>
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
      let novoGrupo = new Grupo(this.nome, this.desc);
      this.dialogRef.close(novoGrupo);
    }
  }
}
