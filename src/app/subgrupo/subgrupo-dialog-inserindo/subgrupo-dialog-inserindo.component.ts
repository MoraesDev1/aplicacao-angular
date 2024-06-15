import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Grupo } from 'src/app/grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import { Subgrupo } from 'src/app/subgrupo';

@Component({
  selector: 'app-subgrupo-dialog-inserindo',
  templateUrl: './subgrupo-dialog-inserindo.component.html',
  styleUrls: ['./subgrupo-dialog-inserindo.component.css']
})
export class SubgrupoDialogInserindoComponent {

  grupos: Grupo[] = [];
  selectedGrupo!: Number;

  constructor(
    public dialogRef: MatDialogRef<SubgrupoDialogInserindoComponent>, public groupService: GrupoService,
  ) {
    this.getGroups();
  }

  id = '';
  nome = '';
  desc = '';

  getGroups() {
    this.groupService.getGroups().subscribe(
      grupos => this.grupos = grupos,
      error => {
        console.error('Erro ao buscar grupos:', error);
      }
    );
  }

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe a descrição");
    } else if (this.selectedGrupo == null) {
      alert("Grupo não informado, favor informe o Grupo");
    } else {
      let novoSubgrupo = new Subgrupo(Number(this.selectedGrupo), this.nome, this.desc);
      this.dialogRef.close(novoSubgrupo);
    }
  }
}
