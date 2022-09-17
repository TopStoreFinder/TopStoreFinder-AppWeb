import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompradorUbicacion } from '../model/compradorUbicacion';

@Injectable({
  providedIn: 'root'
})
export class CompradorUbicacionService {
  url: string = "http://localhost:5000/compradorubicacion"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<CompradorUbicacion[]>(this.url);
  }
}

