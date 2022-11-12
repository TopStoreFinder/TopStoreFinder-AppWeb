import { TipoProducto } from './../model/TipoProducto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  url: string = "http://localhost:8080/tipoproducto"
  private listaCambio = new Subject<TipoProducto[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  getCount() {
    return this.http.get<TipoProducto[]>(this.url);
  }
  listar() {
    return this.http.get<TipoProducto[]>(this.url);
  }
  insertar(TipoProducto: TipoProducto) {
    return this.http.post(this.url, TipoProducto);
  }
  setLista(listaNueva: TipoProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(comprador: TipoProducto) {
    return this.http.put(this.url, comprador);
  }
  listarId(id: number) {
    return this.http.get<TipoProducto>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoProducto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
