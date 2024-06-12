import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from '../model/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private readonly API = '/assets/grupo.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Grupo[]>(this.API);
  }
}
