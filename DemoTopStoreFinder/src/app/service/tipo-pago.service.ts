import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TipoPago } from '../model/tipoPago';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {
  url: string = "http://localhost:5000/tipopagos"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }


}
