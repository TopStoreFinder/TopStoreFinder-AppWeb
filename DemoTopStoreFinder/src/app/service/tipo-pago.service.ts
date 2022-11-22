import { ResultadoTIendasPorTipoPago } from './../model/resultadoTIendasPorTipoPago';
import { HttpClient } from '@angular/common/http'
import { TipoPago } from '../model/tipoPago';
import { Injectable } from '@angular/core';
import { Subject , EMPTY} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {
  url: string = `http://localhost:8080/tipopago`
  private listaCambio = new Subject<TipoPago[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  getCount(){
    return this.http.get<TipoPago[]>(this.url);
  }

  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertar(tiopago: TipoPago) {
    return this.http.post(this.url, tiopago);
  }

  BuscarTipopagoPorTienda(){
    return this.http.get<ResultadoTIendasPorTipoPago[]>(`${this.url}/buscarcantidadtiendasportipoPago`);
  }

  setLista(listaNueva: TipoPago[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tiopago: TipoPago) {
    return this.http.put(this.url, tiopago);
  }
  listarId(id: number) {
    return this.http.get<TipoPago>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoPago[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
