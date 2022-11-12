import { Subject , EMPTY} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompradorUbicacion } from '../model/compradorUbicacion';

@Injectable({
  providedIn: 'root'
})
export class CompradorUbicacionService {
  url: string = "http://localhost:8080/compradorubicacion"
  private listaCambio = new Subject<CompradorUbicacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  getCount(){
    return this.http.get<CompradorUbicacion[]>(this.url);
  }
  listar() {
    return this.http.get<CompradorUbicacion[]>(this.url);
  }
  insertar(compradorubicacion: CompradorUbicacion) {
    return this.http.post(this.url, compradorubicacion);
  }
  setLista(listaNueva: CompradorUbicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(compradorubicacion: CompradorUbicacion) {
    return this.http.put(this.url, compradorubicacion);
  }
  listarId(id: number) {
    return this.http.get<CompradorUbicacion>(`${this.url}/${id}`);
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
      return this.http.post<CompradorUbicacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}

