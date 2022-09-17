import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reseCalificacion } from '../model/reseñaCalificacion';

@Injectable({
  providedIn: 'root'
})
export class ReseñaCalificacionService {
  url: string = "http://localhost:5000/reseniacalificacion"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<reseCalificacion[]>(this.url);
  }
}
