import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './../model/Stock';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {
url: string = "http://localhost:5000/stock"
private listaCambio = new Subject<Stock[]>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Stock[]>(this.url);
  }
  insertar(stock: Stock) {
    return this.http.post(this.url,stock);
  }
  setLista(listaNueva: Stock[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(stock: Stock) {
    return this.http.put(this.url + "/" + stock.id, stock);
  }
  listarId(id: number) {
    return this.http.get<Stock>(`${this.url}/${id}`);
  }

}
