import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';

@Component({
  selector: 'app-grupo-dialog-editando',
  templateUrl: './grupo-dialog-editando.component.html',
  styleUrls: ['./grupo-dialog-editando.component.css']
})
export class GrupoDialogEditandoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<GrupoDialogEditandoComponent>) { }


  id = this.data.selectedGroup.id;
  nome = this.data.selectedGroup.nome;
  desc = this.data.selectedGroup.descricao;

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe uma descrição");
    } else {
      this.data.selectedGroup.nome = this.nome;
      this.data.selectedGroup.descricao = this.desc;
      this.dialogRef.close(this.data.selectedGroup);
    }
  }
}
