import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../model/produto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<ProdutoInterface[]>(this._api + '/product');
  }

  deleteProducts(idProduct: Number) {
    return this.httpClient.delete<ProdutoInterface>(this._api + '/product/' + idProduct);
  }
}