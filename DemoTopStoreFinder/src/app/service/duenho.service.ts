import { environment } from './../../environments/environment';
import { Duenho } from './../model/duenho';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject , EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuenhoService {
  url: string = `${environment.host}/duenho`
  private listaCambio = new Subject<Duenho[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Duenho[]>(this.url);
  }
  insertar(duenho:Duenho){
    return this.http.post(this.url,duenho);
  }
  setLista(listaNueva:Duenho[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(duenho: Duenho) {
    return this.http.put(this.url + "/" + duenho.id, duenho);
  }
  listarId(id: number) {
    return this.http.get<Duenho>(`${this.url}/${id}`);
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
      return this.http.post<Duenho[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
