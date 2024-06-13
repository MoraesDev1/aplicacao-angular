import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../model/unidade';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getUnits() {
    return this.httpClient.get<Unidade[]>(this._api + '/unit');
  }

  deleteUnit(idUnit: number) {
    return this.httpClient.delete<Unidade>(this._api + '/unit/' + idUnit);
  }
}