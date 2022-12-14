import { ResultadoCantidadReseniaporTienda } from './../model/ResultadoCantidadReseniaporTienda';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { reseCalificacion } from '../model/rese├▒aCalificacion';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rese├▒aCalificacionService {
  url: string = `https://app-topstorefinder.herokuapp.com/reseniacalificacion`
  private listaCambio = new Subject<reseCalificacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  getCount(){
    return this.http.get<reseCalificacion[]>(this.url);
  }
  listar() {
    return this.http.get<reseCalificacion[]>(this.url);
  }
  insertar(rese: reseCalificacion) {
    return this.http.post(this.url, rese);
  }
  setLista(listaNueva: reseCalificacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(rese: reseCalificacion) {
    return this.http.put(this.url, rese);
  }
  listarId(id: number) {
    return this.http.get<reseCalificacion>(`${this.url}/${id}`);
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
      return this.http.post<reseCalificacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  BuscarCantidadReseniasPorTienda(){
    return this.http.get<ResultadoCantidadReseniaporTienda[]>(`${this.url}/BuscarCantidadReseniasPorTienda`);
  }
}
