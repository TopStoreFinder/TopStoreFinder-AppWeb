import { Ubicacion } from './../model/ubicacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject , EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  url: string = "http://localhost:5000/ubicacion"
  private listaCambio = new Subject<Ubicacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Ubicacion[]>(this.url);
  }
  insertar(ubicacion: Ubicacion) {
    return this.http.post(this.url, ubicacion);
  }
  setLista(listaNueva: Ubicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(ubicacion: Ubicacion) {
    return this.http.put(this.url + "/" + ubicacion.id, ubicacion);
  }
  listarId(id: number) {
    return this.http.get<Ubicacion>(`${this.url}/${id}`);
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
      return this.http.post<Ubicacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}

