import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Unidade } from 'src/app/unidade';

@Component({
  selector: 'app-unidade-dialog-inserindo',
  templateUrl: './unidade-dialog-inserindo.component.html',
  styleUrls: ['./unidade-dialog-inserindo.component.css']
})
export class UnidadeDialogInserindoComponent {
  constructor(
    public dialogRef: MatDialogRef<UnidadeDialogInserindoComponent>
  ) { }

  id = '';
  sigla = '';
  desc = '';

  clickConfirm() {
    if (this.sigla == '' || this.sigla == null) {
      alert("Sigla não informada, favor informe a sigla");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe a descrição");
    } else {
      let novaUnidade = new Unidade(this.sigla, this.desc);
      this.dialogRef.close(novaUnidade);
    }
  }
}
