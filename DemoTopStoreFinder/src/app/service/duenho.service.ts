import { Duenho } from './../model/duenho';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DuenhoService {
  url: string = "http://localhost:5000/duenho"
  private listaCambio = new Subject<Duenho[]>()
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
}
