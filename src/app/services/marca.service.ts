import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarcaInterface } from '../model/marca';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getBrands() {
    return this.httpClient.get<MarcaInterface[]>(this._api + '/brand');
  }

  deleteBrand(idBrand: Number) {
    return this.httpClient.delete<MarcaInterface>(this._api + '/brand/' + idBrand);
  }
}
