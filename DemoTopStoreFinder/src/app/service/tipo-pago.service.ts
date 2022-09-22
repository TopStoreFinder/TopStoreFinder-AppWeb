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
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertar(propietario: TipoPago) {
    return this.http.post(this.url, propietario);
  }
  setLista(listaNueva: TipoPago[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
