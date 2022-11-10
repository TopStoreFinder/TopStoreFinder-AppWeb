import { Comprador } from './../model/comprador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject ,EMPTY } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  url:  string = `https://app-topstorefinder.herokuapp.com/comprador`
  private listaCambio = new Subject<Comprador[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Comprador[]>(this.url);
  }
  insertar(comprador: Comprador) {
    return this.http.post(this.url,comprador);
  }
  setLista(listaNueva: Comprador[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(comprador: Comprador) {
    return this.http.put(this.url,comprador);
  }
  listarId(id: number) {
    return this.http.get<Comprador>(`${this.url}/${id}`);
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
      return this.http.post<Comprador[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
