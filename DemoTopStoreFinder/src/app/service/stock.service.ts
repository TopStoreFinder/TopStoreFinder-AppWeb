import { ResultadoCantidadStockPorProducto } from './../model/ResultadoCantidadStockPorProducto';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './../model/Stock';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {
url: string = `https://app-topstorefinder.herokuapp.com/stock`
private listaCambio = new Subject<Stock[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  getCount(){
    return this.http.get<Stock[]>(this.url);
  }
  listar(){
    return this.http.get<Stock[]>(this.url);
  }
  insertar(stock: Stock) {
    return this.http.post(this.url,stock);
  }


  BuscarTipopagoPorTienda(){
    return this.http.get<ResultadoCantidadStockPorProducto[]>(`${this.url}/buscarstockporproducto`);
  }


  setLista(listaNueva: Stock[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(stock: Stock) {
    return this.http.put(this.url, stock);
  }
  listarId(id: number) {
    return this.http.get<Stock>(`${this.url}/${id}`);
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
      return this.http.post<Stock[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
