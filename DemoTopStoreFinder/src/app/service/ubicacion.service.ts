import { Ubicacion } from './../model/ubicacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  url: string = "http://localhost:5000/ubicacion"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Ubicacion[]>(this.url);
  }
}

