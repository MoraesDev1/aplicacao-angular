import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unidade-dialog-editando',
  templateUrl: './unidade-dialog-editando.component.html',
  styleUrls: ['./unidade-dialog-editando.component.css']
})
export class UnidadeDialogEditandoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UnidadeDialogEditandoComponent>) { }


  id = this.data.selectedUnit.id;
  sigla = this.data.selectedUnit.sigla;
  desc = this.data.selectedUnit.descricao;

  clickConfirm() {
    if (this.sigla == '' || this.sigla == null) {
      alert("Sigla não informado, favor informe a sigla");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe uma descrição");
    } else {
      this.data.selectedUnit.sigla = this.sigla;
      this.data.selectedUnit.descricao = this.desc;
      this.dialogRef.close(this.data.selectedUnit);
    }
  }
}
