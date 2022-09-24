import { TiendaProducto } from './../model/tiendaProducto';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaProductoService {
  url: string = "http://localhost:5000/tiendaproducto"
  private listaCambio = new Subject<TiendaProducto[]>()

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TiendaProducto[]>(this.url);
  }
  insertar(TiendaProducto: TiendaProducto) {
    return this.http.post(this.url, TiendaProducto);
  }
  setLista(listaNueva: TiendaProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(TiendaProducto: TiendaProducto) {
    return this.http.put(this.url + "/" + TiendaProducto.id, TiendaProducto);
  }
  listarId(id: number) {
    return this.http.get<TiendaProducto>(`${this.url}/${id}`);
  }
}
