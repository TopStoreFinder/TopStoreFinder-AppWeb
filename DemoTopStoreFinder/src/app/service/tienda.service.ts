import { Tienda } from './../model/tienda';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
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
