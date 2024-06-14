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
  constructor(
    public dialogRef: MatDialogRef<SubgrupoDialogInserindoComponent>, public grupoService: GrupoService
  ) { }

  id = '';
  nome = '';
  desc = '';

  geraLista() {
    this.grupoService.getGroups().subscribe()
  }

  grupos = [];
  selectedGrupo: Number | any;

  clickConfirm() {
    if (this.nome == '' || this.nome == null) {
      alert("Nome não informado, favor informe o nome");
    } else if (this.desc == '' || this.desc == null) {
      alert("Descrição não informada, favor informe a descrição");
    } else {
      let novoGrupo = new Subgrupo(5, this.nome, this.desc);
      this.dialogRef.close(novoGrupo);
    }
  }
}
