import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-subgrupo-dialog-editando',
  templateUrl: './subgrupo-dialog-editando.component.html',
  styleUrls: ['./subgrupo-dialog-editando.component.css']
})
export class SubgrupoDialogEditandoComponent {

  id = this.data.selectedSubgroup.id;
  nome = this.data.selectedSubgroup.nome;
  desc = this.data.selectedSubgroup.descricao;
  selectedGroup = this.data.selectedSubgroup.nomeGrupo;
  idSelectedGroup = this.data.selectedSubgroup.idProdutoGrupo;

  grupos: Grupo[] = [];
  selectedGrupo: number | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SubgrupoDialogEditandoComponent>,
    public groupService: GrupoService
  ) {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe(
      grupos => {
        this.grupos = grupos;
        if (this.grupos.length > 0) {
          this.grupos.forEach(grupo => {
            if (grupo.id == this.idSelectedGroup) {
              this.selectedGrupo = grupo.id;
            }
          });
        }
      },
      error => {
        console.error('Erro ao buscar grupos:', error);
      }
    );
  }

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
