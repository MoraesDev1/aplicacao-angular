import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-marca-dialog-editando',
  templateUrl: './marca-dialog-editando.component.html',
  styleUrls: ['./marca-dialog-editando.component.css']
})
export class MarcaDialogEditandoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MarcaDialogEditandoComponent>) { }


  id = this.data.selectedBrand.id;
  nome = this.data.selectedBrand.nome;
  desc = this.data.selectedBrand.descricao;

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe uma descrição");
    } else {
      this.data.selectedBrand.nome = this.nome;
      this.data.selectedBrand.descricao = this.desc;
      this.dialogRef.close(this.data.selectedBrand);
    }
  }
}
