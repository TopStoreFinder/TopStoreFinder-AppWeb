import { Comprador } from './../model/comprador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  url: string = "http://localhost:5000/comprador"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Comprador[]>(this.url);
  } 
}