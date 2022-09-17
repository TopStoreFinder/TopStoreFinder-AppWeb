import { TiendaProducto } from './../model/tiendaProducto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TiendaProductoService {
  url: string = "http://localhost:5000/tiendaproducto"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TiendaProducto[]>(this.url);
  }
}
