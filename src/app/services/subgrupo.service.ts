import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subgrupo } from '../model/subgrupo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getSubgroups() {
    return this.httpClient.get<Subgrupo[]>(this._api + '/subgroup');
  }

  deleteSubgroup(idSubgroup: Number) {
    return this.httpClient.delete<Subgrupo>(this._api + '/subgroup/' + idSubgroup);
  }
}