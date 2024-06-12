import { Component } from '@angular/core';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  grupo: Observable<Grupo[]>;
  displayedColumns = ['id','nome','descricao'];

  constructor(private grupoService: GrupoService){
    this.grupo = this.grupoService.list()
  }

}
