import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subgrupo-dialog-editando',
  templateUrl: './subgrupo-dialog-editando.component.html',
  styleUrls: ['./subgrupo-dialog-editando.component.css']
})
export class SubgrupoDialogEditandoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SubgrupoDialogEditandoComponent>
  ) { }
  id = this.data.selectedSubgroup.id;
  nome = this.data.selectedSubgroup.nome;
  desc = this.data.selectedSubgroup.descricao;
  selectedGroup = this.data.selectedSubgroup.nomeGrupo;

  grupos = [
    { id: this.data.selectedSubgroup.idProdutoGrupo, nome: this.data.selectedSubgroup.nomeGrupo }
  ];
  selectedGrupo: Number | any;

  clickConfirm() {
    if (!this.nome) {
      alert("Nome não informado, favor informe o nome");
    } else if (!this.desc) {
      alert("Descrição não informada, favor informe uma descrição");
    } else {
      this.data.selectedSubgroup.nome = this.nome;
      this.data.selectedSubgroup.descricao = this.desc;
      this.dialogRef.close(this.data.selectedSubgroup);
    }
  }
}
