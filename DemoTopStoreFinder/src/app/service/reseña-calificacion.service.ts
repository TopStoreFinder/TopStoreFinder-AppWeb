import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reseCalificacion } from '../model/reseñaCalificacion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReseñaCalificacionService {
  url: string = "http://localhost:5000/reseniacalificacion"
  private listaCambio = new Subject<reseCalificacion[]>()
  constructor(private http: HttpClient) { }

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
    return this.http.put(this.url + "/" + rese.id, rese);
  }
  listarId(id: number) {
    return this.http.get<reseCalificacion>(`${this.url}/${id}`);
  }
}
