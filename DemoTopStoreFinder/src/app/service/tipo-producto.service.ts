import { TipoProducto } from './../model/TipoProducto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { ResultadoCantidadProductosTipo } from '../model/ResultadoCantidadProductosTipo';
@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  url: string = "https://app-topstorefinder.herokuapp.com/tipoproducto"
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
  BuscarCantidadProductosTipo(){
    return this.http.get<ResultadoCantidadProductosTipo[]>(`${this.url}/cantidadproductostipo`)
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
