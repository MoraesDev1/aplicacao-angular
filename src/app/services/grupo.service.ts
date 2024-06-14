import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrupoInterface } from '../model/grupo';
import { environment } from 'src/environments/environment';
import { Grupo } from '../grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getGroups() {
    return this.httpClient.get<GrupoInterface[]>(this._api + '/group');
  }

  getGroup(idGroup: Number) {
    return this.httpClient.get<GrupoInterface[]>(this._api + '/group' + idGroup);
  }

  deleteGroup(idGroup: Number) {
    return this.httpClient.delete<GrupoInterface>(this._api + '/group/' + idGroup);
  }

  postGroup(group: Grupo) {
    return this.httpClient.post(this._api + '/group', group);
  }

  editGroup(idGroup: Number, group: Grupo) {
    return this.httpClient.put(this._api + '/group/' + idGroup, group);
  }
}
