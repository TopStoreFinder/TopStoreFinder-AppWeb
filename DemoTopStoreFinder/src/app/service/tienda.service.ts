import { environment } from './../../environments/environment';
import { Tienda } from './../model/tienda';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject , EMPTY} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  url: string = `${environment.host}/tienda`
  private listaCambio = new Subject<Tienda[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  getCount(){
    return this.http.get<Tienda[]>(this.url);
  }
  listar() {
    return this.http.get<Tienda[]>(this.url);
  }
  insertar(Tienda: Tienda) {
    return this.http.post(this.url, Tienda);
  }
  setLista(listaNueva: Tienda[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Tienda: Tienda) {
    return this.http.put(this.url,Tienda);
  }
  listarId(id: number) {
    return this.http.get<Tienda>(`${this.url}/${id}`);
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
      return this.http.post<Tienda[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
