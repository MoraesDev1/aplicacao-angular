import { Component } from '@angular/core';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  grupo: Grupo[] = [];

  displayedColumns = ['id', 'nome', 'descricao'];

  constructor(private grupoService: GrupoService) {
    this.getGroups();
  }

  getGroups() {
    this.grupoService.getGroups().subscribe(grupo => this.grupo = grupo)
  }
}
