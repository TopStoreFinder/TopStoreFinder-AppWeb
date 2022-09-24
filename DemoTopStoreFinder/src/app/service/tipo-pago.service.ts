import { HttpClient } from '@angular/common/http'
import { TipoPago } from '../model/tipoPago';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {
  url: string = "http://localhost:5000/tipopagos"
  private listaCambio = new Subject<TipoPago[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertar(tiopago: TipoPago) {
    return this.http.post(this.url, tiopago);
  }
  setLista(listaNueva: TipoPago[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tiopago: TipoPago) {
    return this.http.put(this.url + "/" + tiopago.id, tiopago);
  }
  listarId(id: number) {
    return this.http.get<TipoPago>(`${this.url}/${id}`);
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
}
