import { Duenho } from './../model/duenho';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DuenhoService {
  url: string = "http://localhost:5000/duenho"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Duenho[]>(this.url);
  }
}
