import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeInterface } from '../model/unidade';
import { environment } from 'src/environments/environment';
import { Unidade } from '../unidade';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getUnits() {
    return this.httpClient.get<UnidadeInterface[]>(this._api + '/unit');
  }

  deleteUnit(idUnit: Number) {
    return this.httpClient.delete<UnidadeInterface>(this._api + '/unit/' + idUnit);
  }

  postUnit(unit: Unidade) {
    return this.httpClient.post(this._api + '/unit', unit);
  }

  editUnit(idUnidade: Number, unit: Unidade) {
    return this.httpClient.put(this._api + '/unit/' + idUnidade, unit);
  }
}