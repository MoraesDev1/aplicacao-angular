import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from '../model/grupo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getGroups() {
    return this.httpClient.get<Grupo[]>(this._api + '/group');
  }
}
