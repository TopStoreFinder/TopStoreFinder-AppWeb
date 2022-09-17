import { Tienda } from './../model/tienda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  url: string = "http://localhost:5000/tienda"

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Tienda[]>(this.url);
  }
}
